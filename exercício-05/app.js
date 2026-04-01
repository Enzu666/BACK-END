/********************************************************************************************************
 * Objetivo: Arquivo responsável pela criação de API do projeto de Estados e Cidades
 * Data: 01/04/2026
 * Autor: Enzo
 * Versão: 1.0
 * 
 * Instalação do Express - npm install express --save
 *      Dependência responsável pela ultilização do protocolo HTTP para criar um API
 * 
 * Instalação do Cors - npm install cors --save
 *      Dependência responsável pelas configurações a serem realizadas para a permissão de acesso da API
*********************************************************************************************************/

//import das dependências para criar a API

const express   = require('express')
const cors = require('cors')

//criando um objeto para manipular o express 
const app = express()

//conjunto de permissões a serem aplicadas no cors da api
const corsOptions = {
    origin : ['*'], //A origem da requisição, podendo ser um ip ou o * (todos)
    methods: 'GET', //verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content type', 'Autorization'], //allowedHeaders são permissões de cabeçalho de CORS
}

//configura as permissões da api através do cors
app.use(cors(corsOptions))

//request -> Retornos de API
//require -> Chegadas de dados da API

//import do arquivo de funções
const estadosCidades = require('./modulo/array_jason.js')

//criando EndPoints para a API
app.get('/v1/senai/estados', function(request, response){

    //chama a função que retorna a lista de estados
    let estados = estadosCidades.getListaDeEstados()

    response.json(estados)
    response.status('200')
})

app.get('/v1/senai/dados/estado/:uf', function(request, response){
    let sigla = request.params.uf
    let dadosEstados = estadosCidades.getDadosEstado(sigla)
    response.json(dadosEstados)
    response.status('200')
    if(!dadosEstados){
        response.json({"message": "erro na url"})
        response.status(404)
    }
})

app.get('/v1/senai/capital/estados/:uf', function(request, response){
    let sigla = request.params.uf
    let capital = estadosCidades.getCapitalEstado(sigla)
    response.json(capital)
    response.status('200')
    if(!capital){
        response.json({"message": "erro na url"})
        response.status(404)
    }
})

app.get('/v1/senai/regiao/estados/:regiao', function(request, response){
    let regiao = request.params.regiao
    let regioes = estadosCidades.getEstadosRegiao(regiao)
    response.json(regioes)
    response.status('200')
    
})

app.get('/v1/senai/capitais/brasil', function(request, response){
    let capitais = estadosCidades.getCapitalPais()
    response.json(capitais)
    response.status('200')
})

app.get('/v1/senai/cidades/:uf', function(request, response){

    let sigla = request.params.uf
    let cidades = estadosCidades.getCidades(sigla)

    response.json(cidades)
    response.status(200)
})

app.listen(8080, function(){
    console.log('API funcionando')
})