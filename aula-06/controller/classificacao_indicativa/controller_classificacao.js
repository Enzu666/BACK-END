/************************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *              Manipulação de dados para o CRUD de filmes
 * Data: 08/05/2026
 * Autor: Enzo
 * Versão: 1.0
*************************************************************************************/

//Import do arquivo de padronização de mensagens
const  config_message = require('../modulo/configMessages.js')
//Import do arquivo DAO para fazer o crud do filme no Banco de Dados
const filmeDAO = require("../../model/DAO/classificacao_indicativa/classificacao_indicativa.js")