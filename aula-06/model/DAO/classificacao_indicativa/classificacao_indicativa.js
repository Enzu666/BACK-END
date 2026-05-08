/*********************************************************************************
 * Objetivo:Arquivo responsável pelo CRUD no Banco de dados MySQL na tabela Filme
 * Data: 08/05/2026
 * Autor: Enzo
 * Versão: 1.0
***********************************************************************************/

//Import da biblioteca para gerenciar o banco de dados MySQL no node.js
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD MySQL
const knexConfig = require('../../database_config_knex/knexFile')

//Criar a conexão com o BD MySQL
const knexConex = knex(knexConfig.development)
//Função par inserir dados na tabela de classificação indicativa 
 const insertClassificacao = async function(classificacao){
    try {
            let sql = `insert into tbl_classificacao_indicativa(
                            classificacao
                            )
                    values (
                            '${classificacao.classificacao}'
                            );`
            //Executar o ScriptSQL no banco de dados
            let result = await knexConex.raw(sql)

            if(result)
                return true
            else
                return false
            

    } catch (error) {
        return false
    }
}
//Função para atualizar a classificação indicativa existente na tabela
const updateClassificacao = async function(classificacao){
    try {
        //script para atualizar os dados no BD
        let sql =      `update tbl_classificacao_indicativa set
                                classificacao   = '${classificacao.classificacao}'
                        where id                = ${classificacao.id};`

        //executa o script sql no bd
        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false
    } catch (error) {
        return false
    }
}
//Função para retornar todos os dados da tabela de filmes  
const selectAllClassificacao = async function(){
    try {
        //script para retornar todos os filmes
        let sql = `select * from tbl_classificacao_indicativa order by id desc`
        //executa no banco de dados o script sql para retornar os filmes
        let result = await knexConex.raw(sql)
        //validação para verificar se o retorno do banco é um array
        //se o script sql der erro, o banco n devolve um array
        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}
//Função para retornar os dados do filme, filtrando pelo ID
const selectByIdClassificacao = async function(id){
    try {
        let sql = `select * from tbl_classificacao_indicativa where id= ${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result)){
            return result[0]
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

//Função para excçuir um filme pelo ID
const deleteClassificacao = async function(id){
    try {
        let sql = `delete from tbl_classificacao_indicativa where id = ${id};`

        let result = await knexConex.raw(sql)

        if(result)
            return true
        else
            return false

    } catch (error) {
        return false
    }
}

module.exports = {
    insertClassificacao,
    updateClassificacao,
    selectAllClassificacao,
    selectByIdClassificacao,
    deleteClassificacao
}
