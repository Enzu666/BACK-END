/*********************************************************************************
 * Objetivo:Arquivo responsável pelo CRUD no Banco de dados MySQL na tabela Filme
 * Data: 15/04/2026
 * Autor: Enzo
 * Versão: 1.0
***********************************************************************************/

//Import da biblioteca para gerenciar o banco de dados MySQL no node.js
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD MySQL
const knexConfig = require('../../database_config_knex/knexFile')

//Criar a conexão com o BD MySQL
const knexConex = knex(knexConfig.development)
 //Função par inserir dados na tabela de filmes 
 const insertFilme = async function(filme){
    try {
            let sql = `insert into tbl_filme(
                            nome, 
                            data_lancamento, 
                            duracao, 
                            sinopse, 
                            avaliacao, 
                            valor, 
                            capa
                            )
                    values (
                            '${filme.nome}', 
                            '${filme.data_lancamento}', 
                            '${filme.duracao}', 
                            '${filme.sinopse}', 
                            if('${filme.avaliacao}' = '', null, '${filme.avaliacao}'), 
                            '${filme.valor}', 
                            '${filme.capa}'
                            );`
            //console.log(sql)
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

//Função para atualizar um filme existente na tabela
const updateFilme = async function(filme){
    try {
        //script para atualizar os dados no BD
        let sql =      `update tbl_filme set
                                nome            = '${filme.nome}',
                                data_lancamento = '${filme.data_lancamento}',
                                duracao         = '${filme.duracao}',
                                sinopse         = '${filme.sinopse}',
                                avaliacao       = if('${filme.avaliacao}' = '', null, '${filme.avaliacao}'),
                                valor           = '${filme.valor}',
                                capa            = '${filme.capa}'
                        where id                = ${filme.id};`

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
const selectAllFilme = async function(){
    try {
        //script para retornar todos os filmes
        let sql = `select * from tbl_filme order by id desc`
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
const selectByIdFilme = async function(id){
    try {
        let sql = `select * from tbl_filme where id= ${id}`

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
const deleteFilme = async function(id){
    try {
        let sql = `delete from tbl_filme where id = ${id};`

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
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
}