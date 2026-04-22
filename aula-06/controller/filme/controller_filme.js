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
const atualizarFilme = async function(){

}

//Função para retornar todos os Filmes
const listarFilme = async function(){

}

//Função para buscar um Filme pelo id 
const buscarFilme = async function(){

}

//Função para excluir um filme
const excluirFilme = async function(){

}

//função para validar todos os dados de filme (obrigatórios, qtde de caracteres, etc)
const validarDados = async function(filme){

    let message = JSON.parse(JSON.stringify(config_message))

    if(filme.nome == "" || filme.nome == null || filme.nome == undefined || filme.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length !=10){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filme.duracao == "" || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(isNaN(filme.avaliacao) || filme.avaliacao.lenght > 3){
        message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filme.valor == "" || filme.valor == null || filme.valor == undefined || filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)){
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