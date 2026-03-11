/******************************************************************
 * Objetivo: Gerenciador de números pares e ímpares
 * Data: 27/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/
const readline = require("readline")
let numeros = require("../modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("\n****************************************")
console.log("   GERENCIADOR DE NÚMEROS PARES E ÍMPARES")
console.log("****************************************\n")

entradaDeDados.question("Número inicial (0 a 500): ", function(numeroInicial) {
    entradaDeDados.question("Número final (100 a 1000): ", function(numeroFinal) {

        const inicial = Number(numeroInicial)
        const final   = Number(numeroFinal)

        const erro = numeros.validarEntradasParEImpar(numeroInicial, numeroFinal, inicial, final)

        if (erro) {
            console.log(`Erro: ${erro}`)
        } else {
            numeros.exibirResultado(inicial, final)
        }

        entradaDeDados.close()
    })
})