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

    //o splice permite ir até um índice e remover a quantidade de conteúdos que você passou
    //                  splice(índice,quantidade)
    listaDeFornecedores.splice(2,1)
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

console.log(quantidadeDeItem('José'))