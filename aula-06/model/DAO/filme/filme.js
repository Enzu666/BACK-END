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
                        '${filme.avaliacao}', 
                        '${filme.valor}', 
                        '${filme.capa}'
                        );`

    //Executar o ScriptSQL no banco de dados
    let result = await knexConex.raw(sql)

    if(result)
        return true
    else
        return false
}

//Função para atualizar um filme existente na tabela
const updateFilme = async function(filme){

}

//Função para retornar todos os dados da tabela de filmes  
const selectAllFilme = async function(){

}

//Função para retornar os dados do filme, filtrando pelo ID
const selectByIdFilme = async function(id){

}

//Função para excçuir um filme pelo ID
const deleteFilme = async function(id){

}

module.exports = {
    insertFilme,
    updateFilme,
    selectAllFilme,
    selectByIdFilme,
    deleteFilme
}