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

entradaDeDados.question("Número inicial (0 a 500): ", function(rInicial) {
    entradaDeDados.question("Número final (100 a 1000): ", function(rFinal) {

        const numInicial = Number(rInicial)
        const numFinal   = Number(rFinal)

        const erro = numeros.validarEntradas(rInicial, rFinal, numInicial, numFinal)

        if (erro) {
            console.log(`\nErro: ${erro}`)
        } else {
            numeros.exibirResultado(numInicial, numFinal)
        }

        entradaDeDados.close()
    })
})