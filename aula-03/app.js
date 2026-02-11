/******************************************************************
 * Objetivo: Criar Funções (Recriando exercício da aula-02)
 * Data: 11/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/

const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada do nome do cliente
entradaDeDados.question("Digite o nome do cliente: ", function(nome){
    let nomeCliente = nome
    //Entrada do nome do produto
    entradaDeDados.question("Digite o nome do produto: ", function(produto){
        let nomeProduto = produto
        //Entrada do valor da compra
        entradaDeDados.question("Digite o valor do produto: ", function(capital){
            let capitalProduto = capital
            //Entrada da taxa de juros
            entradaDeDados.question("Digite a taxa de juros a ser aplicada na compra: ", function(taxa){
                let taxaCompra = taxa
                //Entrada do tempo de pagamento
                entradaDeDados.question("Digite o tempo para realizar o pagamento: ", function(tempo){
                    let tempoPagamento = tempo

                    //import da biblioteca que realiza cálculos (que criamos)
                    let calculos = require("./modulo/calculos.js")

                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxaCompra, tempoPagamento)

                    if(montante){
                    console.log("O montante final é: " + montante.toFixed(2))
                    }else{
                        entradaDeDados.close()
                    }

                })
            })
        })
    })
})
