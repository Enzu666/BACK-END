/*****************************************************************************************
 * Objetivo: MAnipular dados utilizando Array e JSON
 * Data: 05/03/2026
 * Autor: Enzo
 * Versão: 1.0
******************************************************************************************/

/*
    [ ] -> representa um objeto do tipo ARRAY
    { } -> representa um objeto do tipo JSON

    Array -> É um objeto na memória que permite trabalhar
    com vários valores em um único objeto

    let nome = "josé"
    let nome2 = "maria"
    let nome3 = "joão!"

    índice         0      1     2
    let nome = ["josé, maria, joão"]

    JSON -> é um objeto na memória que permite trabalhar com CHAVE e VALOR

    let nome = "josé"
    let telefone = "1191111-1111"
    let email = "jos@gmail.com"

    let cliente =   {   "nome": "josé",
                        "telefone": "1191111-1111",
                        "email": "jos@gmail.com"
                        }
*/

//Formas de criar um ARRAY
const listaDeNomes = ['José', 'Maria', 'João', 'André', 'Alex', 'Carlos', 'Ana', 'Bruna', 'Diego', 'José', 'José da Silva']
const listaDeCliente = []
const listaDeFornecedores = []

const exibirDados = function(){

    //exibe o objeto ARRAY e seu conteúdo
    console.log(listaDeNomes)
    //exibe o conteúdo do objeto ARRAY e os seus índices em formato de tabela
    console.table(listaDeNomes)
    //exibe apenas o conteúdo do objeto pelo ÍNDICE
    console.log(listaDeNomes[0])
    //typeof exibe o tipo de dado de um índice do array
    console.log(typeof(listaDeNomes[4]))

    console.log(`O nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`O nome do cliente é: ${listaDeNomes[4]}`)

    //Estruturas de repetição
    console.log()
    console.log("WHILE")
    let cont = 0
    while(cont<=4){
        console.log(`o nome do cliente é: ${listaDeNomes[cont]}`)
        cont +=1
    }

    console.log()
    console.log("FOR")
    for(let contador = 0; contador <=4; contador++){
        console.log(`O nome do cliente é: ${listaDeNomes[contador]}`)
    }

    //Retorna o conteúdo de cada elemento através de um CAL BACK (uma das mais utilizadas)
    console.log()
    console.log("FOR EACH")
    listaDeNomes.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)
    })

    //retorna o índice do elemento, e será preciso colocar dentro do objeto do ARRAY
    //EX: listaDeNomes[item]
    console.log()
    console.log("FOR IN")
    for(item in listaDeNomes){
        console.log(`O índice do cliente é: ${item}`)
    }

    //Percorre o ARRAY e retorna apenas o conteúdo de cada índice, sendo muito parecido com o forEACH
    console.log()
    console.log("FOR OF")
    for(cliente of listaDeNomes){
        console.log(`O nome do cliente é: ${cliente}`)
    }
}

const manipularDados = function(){
    //Adicionando novos valores no ARRAY através do índice
    listaDeCliente[0] = "José da silva"
    listaDeCliente[1] = "Maria da Silva"
    listaDeCliente[2] = "João da Silva"
    listaDeCliente[4] = "Alex da Silva"

    console.log(listaDeCliente)

    //o push permite adicionar novos elementos no ARRAY sempre ao final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')
    console.table(listaDeFornecedores)

    //o unshift permite adicionar novos elementos sempre ao inicio da lista
    listaDeFornecedores.unshift('Ana Carolina')
    console.table(listaDeFornecedores)

    //remover elementos do ARRAY
    //o pop permite remover o ÚLTIMO elemento da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //o shift permite remover o PRIMEIRO elemento da lista
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    //permite remover um conteúdo baseado no índice
    //o splice permite ir até um índice e remover a quantidade de conteúdos que você passou
    //                  splice(índice,quantidade que será removida)
    listaDeFornecedores.splice(2,1)
    console.table(listaDeFornecedores)

    //o splice também permite ir até um índice e adicionar um conteúdo sem apagar um índice já existente
    //permite adicionar um novo elemento baseado no índice
                            //índice, 0->significa que não será removido nínguem, 'novo conteúdo'
    listaDeFornecedores.splice(2,0,'Carlos da Silva')
    console.table(listaDeFornecedores)

}

const removerItem = function(nome){

    //o indexOf retorna o índice de um elemento fazendo a busca pelo valor '(nome)'
    // se o indexOF não encontrar o conteúdo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    if(indice != -1){
        listaDeNomes.splice(indice, 1)
        return true
    }else{
        return false
    }
    

    // listaDeNomes.splice(indice,1)

    //for(indice in listaDeNomes){
        //if(listaDeNomes[indice] == nome){
            //listaDeNomes.splice(indice,1)
        //}
    //}
}

const verificarItem = function(nome){
    //pode usar o indexOf ou o forin

    //include verifica a existencia de um conteúdo dentro de uma lista (true/false)
    return listaDeNomes.includes(nome)
}

const quantidadeDeItem = function(nome){
    let cont = 0
    listaDeNomes.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont +=1
    })
    return cont
}

//Formas de trabalhar com JSON

const criandoDadosJSON = function(){
    let aluno = {"nome": "José", "ra": 123456, "telefone": "1191234-5678", "email": "jose@gmail.com"}

    //exibindo o objeto JSON completo 
    console.log(aluno)
    console.table(aluno)

    //exibindo apenas um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.email)

    //adiciona um novo atributo no JSON
    aluno.sexo = 'Maculino'
    console.log(aluno)

    //remove um atributo do JSON
    delete aluno.telefone
    console.log(aluno)
}

//mesclando ARRAY e JSON

const cadastroDeProdutos = function(){
    let cores = [ //[]=> ARRAY {}=> JSON
        {"id": 1, "cor": "Branco"},  //índice 0
        {"id": 2, "cor": "Preto"},   //índice 1
        {"id": 3, "cor": "Azul"},    //índice 1
        {"id": 4, "cor": "Rosa"},    //índice 1
        {"id": 5, "cor": "Cinza"}    //índice 1
    ]

    let marcas = [
        {"id": 1, "marca": "L6",          "telefone": "1191234-1234", "email": "l6l6@gmail.com"},
        {"id": 2, "marca": "Dell",        "telefone": "1191234-5678", "email": "dell@gmail.com"},
        {"id": 3, "marca": "Lenovo",      "telefone": "1191234-9101", "email": "lenovo@gmail.com"},
        {"id": 4, "marca": "Aplle",       "telefone": "1191234-1213", "email": "aplle@gmail.com"},
        {"id": 5, "Marca": "Rayzer",      "telefone": "1191234-1415", "email": "rayzer@gmail.com"},
        {"id": 6, "marca": "Logitech",    "telefone": "1191234-1617", "email": "logi@gmail.com"},
        {"id": 7, "modelo": "Multilazer", "telefone": "1191234-1819", "email": "multilala@gmail.com"}
    ]

    let produtos = [
        {   "id": 1, 
            "nome": "Monitor", 
            "descricao": "27 polegadas",
            "marca":    [
                            marcas[1].marca,
                        ],
            "qtde": 20,
            "cor":  [
                        cores[4],
                        cores[1]
                    ],
            "valor": 800.50
        },

        {
            "id": 2,
            "nome": "Teclado",
            "descricao": "Teclado mecânico RGB",
            "marca":    [
                            marcas[1].marca,
                        ],
            "qtde": 200,
            "cor": cores,
            "valor": 150.00
        },

        {
            "id": 3,
            "nome": "Mouse",
            "descricao": "Mouse bluethoot RGB",
            "marca":    [
                            marcas[0].marca,
                            marcas[1].marca,
                            marcas[5].marca
                        ],   
            "qtde": 500,
            "cor":  [
                        cores[0],
                        cores[1],
                        cores[4]
                    ],
            "valor": 80.00
        }

    ]
     
    // console.log(produtos[0].cor)
    // console.log(produtos[0].cor[1])
    // console.log(produtos[0].cor[1].cor)
    // console.log("")
    // console.table(produtos)
    // console.log("")
    // console.log("")
    // console.table(produtos)

    // produtos[0].cor.forEach(function(nomeCor){
    //     console.log("A cor do produto é: " + nomeCor.cor)
    // })

    // console.log(cores)
    // console.table(cores)
    // //printa o objeto completo pelo índice
    // console.log(cores[2])
    // //printa o atributo do objeto especificado pelo índice
    // console.log(cores[2].nome)
}

//exibirDados()
//manipularDados()
// let resposta = removerItem('klaehksjdghskjdgh')
// if(resposta){
//     console.log('Item removido com sucesso!')
// }else{
//     console.log('Item não encontrado')
// }
// console.table(listaDeNomes)

//verificarItem('José')

//console.log(quantidadeDeItem('José'))

//criandoDadosJSON()
cadastroDeProdutos()