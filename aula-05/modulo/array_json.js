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
const listaDeNomes = ['José', 'Maria', 'João', 'André', 'Alex']
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

    //Retorna o conteúdo de cada elemento através de um CAL BACK
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

    // push permite adicionar novos valores no ARRAY sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')
    console.log(listaDeFornecedores)
}

//exibirDados()
manipularDados()