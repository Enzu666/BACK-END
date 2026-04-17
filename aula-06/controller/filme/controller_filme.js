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
const filmeDAO = require("../../model/DAO/filme.js")
//Função para inserir um novo Filme
const inserirNovoFilme = async function(filme){

    //criando um clone do objeto JSON para manipular sua estrutura local, sem modificar a estrutura original
    //realiza uma conversão do json para string e permite clonar a const config_message sem modificar o original
    let message = JSON.parse(JSON.stringify(config_message))
    //validação de dados  para os atributos do filme (status 400)
    if(filme.nome == "" || filme.nome == null || filme.nome == undefined || filme.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        //return message.ERROR_BAD_REQUEST // erro 400
    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined || filme.data_lancamento.length !=10){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
        //return message.ERROR_BAD_REQUEST // erro 400
    }else if(filme.duracao == "" || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        //return message.ERROR_BAD_REQUEST // erro 400
    }else if(filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        //return message.ERROR_BAD_REQUEST // erro 400
    }else if(isNaN(filme.avaliacao) || filme.avaliacao.lenght > 3){
        message.ERROR_BAD_REQUEST.field = '[AVALIACAO] INVÁLIDO'
        //return message.ERROR_BAD_REQUEST // erro 400
    }else if(filme.valor == "" || filme.valor == null || filme.valor == undefined || filme.valor.lenght > 5 || isNaN(filme.valor)){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        //return message.ERROR_BAD_REQUEST // erro 400
    }else if(filme.capa.lenght > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        //return message.ERROR_BAD_REQUEST // erro 400
    }else{
        let result = await filmeDAO.insertFilme(filme)
        if(result){ //201
            message.DEFAULT_MESSAGE.status = message.SUCESS_CREATED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCESS_CREATED_ITEM.status_code
            message.DEFAULT_MESSAGE.message = message.SUCESS_CREATED_ITEM.message
        }else{ //400
            message.DEFAULT_MESSAGE.status = message.ERROR_BAD_REQUEST.status
            message.DEFAULT_MESSAGE.status_code = message.ERROR_BAD_REQUEST.status_code
            message.DEFAULT_MESSAGE.message = message.ERROR_BAD_REQUEST.message
            message.DEFAULT_MESSAGE.field = message.ERROR_BAD_REQUEST.field
        }
        return message.DEFAULT_MESSAGE
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

module.exports = {
    inserirNovoFilme,
    atualizarFilme,
    listarFilme,
    buscarFilme,
    excluirFilme
}