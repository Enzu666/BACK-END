/******************************************************************************
 * Objetivo: desenvolver uma aplicação que possa realizar cálculos matemáticos.
 * Data: 13/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************************/

const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Insira um número: ", function(valor1){
    let numero1 = valor1
    entradaDeDados.question("Insira o segundo número: ", function(valor2){
        let numero2 = valor2
        entradaDeDados.question("Digite a operação desejada Soma, Subtração, Multiplicação ou Divisão: ", function(escolhaOperacao){
            let operacao = escolhaOperacao

            let operacaoBaixa = operacao.toLowerCase()

            if(operacaoBaixa == "soma" || operacaoBaixa == "subtração" || operacaoBaixa == "multiplicação" || operacaoBaixa == "divisão"){
                let calculos = require("./moduloExercicio/calcExercicio.js")
                let resultado = calculos.calcularOperacao(numero1, numero2, operacao)

                if(resultado){
                    console.log("O resultado final é: " + resultado.toFixed(2))
                    }else{
                        console.log("Algo deu errado...")
                        entradaDeDados.close()
                    }
            }
        })
    })
})