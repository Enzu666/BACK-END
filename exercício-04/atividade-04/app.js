/******************************************************************
 * Objetivo: Sistema para Cálcular fatorial
 * Data: 27/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/
const readline = require("readline")
let fatorial = require("../modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("\n****************************************")
console.log("      SISTEMA DE CÁLCULO DE FATORIAL")
console.log("****************************************\n")

entradaDeDados.question("Digite um número para calcular o fatorial: ", function(n1) {

    const numero = Number(n1)

    const erro = fatorial.validarEntradaFatorial(n1, numero)

    if (erro) {
        console.log(`Erro: ${erro}`)
    } else {
        fatorial.exibirFatorial(numero)
    }

    entradaDeDados.close()
})