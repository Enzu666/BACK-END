/**********************************************************************************
 * Objetivo:
 * Data:        17/04/26
 * Autor:       Enzo
 * Versão:      1.0
***********************************************************************************/

//import das dependências para criar a API

const express   = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//import das controllers do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Criando um objeto para manipular dados do body da API em formato json
const bodyParserJSON = bodyParser.json()

//criando um objeto para manipular o express 
const app = express()

//conjunto de permissões a serem aplicadas no cors da api
const corsOptions = {
    origin : ['*'], //A origem da requisição, podendo ser um ip ou o * (todos)
    methods: 'GET, POST, PUT, DELETE, OPTIONS', //verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content type', 'Autorization'], //allowedHeaders são permissões de cabeçalho de CORS
}

//configura as permissões da api através do cors
app.use(cors(corsOptions))

//ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){
    //recebe o conteúdo dentro do body da requisição
    let dados = request.body
    //recebe o content-type da requisição para validar se é um json
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filme', async function(request, response){
    let result = await controllerFilme.listarFilme()

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/filme/:id', async function(request, response){
    //recebe o parametro pelo id
    let id = request.params.id

    let result = await controllerFilme.buscarFilme(id)
    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/filme/:id', bodyParserJSON, async function (request, response){
    //essa linha recebe o content type da requisição
    let contentType = request.headers['content-type']
    //recebe o ID do registro a ser realizado
    let id = request.params.id
    //recebe os dados enviados no corpo da requisição
    let dados = request.body

    //chama a função de atualizar na controller e encaminha os dados, id e content-type
    //obedecendo a ordem da criação na função da controller
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

app.delete('/v1/senai/locadora/filme/:id', async function(request, response){
    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)
    response.status(result.status_code)
    response.json(result)
})
//Serve para inicializar a API para receber requisições
app.listen(8080, function(){
    console.log('API funcionando')
})