/************************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *              Manipulação de dados para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Enzo
 * Versão: 1.0
*************************************************************************************/

//Import do arquivo de padronização de mensagens
const  config_message = require('../modulo/configMessages.js')
//Import do arquivo DAO para fazer o crud do filme no Banco de Dados
const filmeDAO = require("../../model/DAO/filme/filme.js")
//Função para inserir um novo Filme
const inserirNovoFilme = async function(filme, contentType){

    //criando um clone do objeto JSON para manipular sua estrutura local, sem modificar a estrutura original
    //realiza uma conversão do json para string e permite clonar a const config_message sem modificar o original
    let message = JSON.parse(JSON.stringify(config_message))


    try {
        //Validação para o tipo de dados da requisição (somente json)
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){
            //validação de dados  para os atributos do filme (status 400)
            let validar = await validarDados(filme)

            //se a função validar retornar um json de erro, iremos devolver ao app

            if(validar){
                 validar
            }else{
                //encaminha os dados do filme para o DAO
                let result = await filmeDAO.insertFilme(filme)

                if(result){ //201
                    message.DEFAULT_MESSAGE.status = message.SUCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCESS_CREATED_ITEM.message
                }else{ //500
                    return message.ERROR_INTERNAL_SERVER_MODEL //500
                }
                    return message.DEFAULT_MESSAGE
            }
        }else{
        return message.ERROR_CONTENT_TYPE //415
        }
    }catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500(controller)
    }
}

//Função para atualizar um Filme
const atualizarFilme = async function(filme, id, contentType){
    let message = JSON.parse(JSON.stringify(config_message))

    try {

        //VALIDAÇÃO DO CONTENTTYPE PARA JSON
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            //validação de ID
            let resultBuscarId =  await buscarFilme(id)

            //se a função buscar encontrar o filme, o atributo status do JSON será verdadeiro
            //isso signfica que o filme existe na base, caso não retorne true, então
            //o retorno da função poderá ser um 400 ou 404 ou um 500
            if(resultBuscarId.status){

                let validar = await validarDados(filme)

                //validação de campos obrigatórios para a atualização (Body)
                if(!validar){

                    //adciono o id do filme no JSON para ser enviado para o DAO
                    filme.id = id

                    //chama a função do DAO para atualizar o filme (dados e ID)
                    let result = await filmeDAO.updateFilme(filme)

                    if(result){
                        message.DEFAULT_MESSAGE.status = message.SUCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCESS_UPDATED_ITEM.message

                        return message.DEFAULT_MESSAGE //200 atualizado
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL //500
                    }
                }else{
                    return validar //400
                }
            }else{
                return message.resultBuscarId //400 ou 404 ou 500
            }

        }else{
            return message.ERROR_CONTENT_TYPE //415
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 controller
    }
}

//Função para retornar todos os Filmes
const listarFilme = async function(){

    //criando um clone do objeto JSON para manipular sua estrutura local, sem modificar a estrutura original
    //realiza uma conversão do json para string e permite clonar a const config_message sem modificar o original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //chama a função do DAO para retornar a lista de todos os filmes
        let result = await filmeDAO.selectAllFilme()
        
        //Validação para verificar se o DAO conseguiu processar os dados
        if(result){
            //Validação para verificar se existe conteúdo no array
            if(result.length > 0){
                message.DEFAULT_MESSAGE.status = message.SUCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.filme = result

                return message.DEFAULT_MESSAGE //200 (dados do filme)
            }else{
                return message.ERROR_NOT_FOUND //404
            }
        }else{
            return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para buscar um Filme pelo id 
const buscarFilme = async function(id){
    //criando um clone do objeto JSON para manipular sua estrutura local, sem modificar a estrutura original
    //realiza uma conversão do json para string e permite clonar a const config_message sem modificar o original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //Validação par garantir que o id seja válido
        if(id == undefined || id == "" || id == null || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = "[ID] INVÁLIDO"
            return message.ERROR_BAD_REQUEST //400
            
        }else{
            let result = await filmeDAO.selectByIdFilme(id)

            if(result){
                if(result.length > 0){

                    message.DEFAULT_MESSAGE.status = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme = result

                    return message.DEFAULT_MESSAGE //200

                }else{
                    return message.ERROR_NOT_FOUND //404
                }
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500(model)
            }
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//Função para excluir um filme
const excluirFilme = async function(id){
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //Validação par garantir que o id seja válido
        let resultBuscarID = await buscarFilme(id)
        if(resultBuscarID.status){
            //chama a função do DAO para deletar o filme
            let result = await filmeDAO.deleteFilme(id)

            if(result){
                return message.SUCESS_DELETED_ITEM //200 (rgistro excluido)
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL //500 model
            }
        }else{
         return resultBuscarID //400 ou 404
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller)
    }
}

//função para validar todos os dados de filme (obrigatórios, qtde de caracteres, etc)
const validarDados = async function(filme){

    let message = JSON.parse(JSON.stringify(config_message))

    if(filme.nome == undefined || filme.nome == "" || filme.nome == null || filme.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filme.data_lancamento == undefined || filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento.length !=10){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filme.duracao == undefined || filme.duracao == "" || filme.duracao == null || filme.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filme.sinopse == undefined || filme.sinopse == '' || filme.sinopse == null){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(isNaN(filme.avaliacao) || filme.avaliacao.lenght > 3){
        message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filme.valor == undefined || filme.valor == "" || filme.valor == null || filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filme.capa.lenght > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else{
        return false
    }    
}

module.exports = {
    inserirNovoFilme,
    atualizarFilme,
    listarFilme,
    buscarFilme,
    excluirFilme,
    validarDados
}