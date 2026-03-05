/******************************************************************
 * Objetivo: Cálcular fatorial
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


entradaDeDados.question("Digite um número para calcular o fatorial: ", function(rNumero) {

    const numero = Number(rNumero)

    const erro = fatorial.validarEntrada(rNumero, numero)

    if (erro) {
        console.log(`\nErro: ${erro}`)
    } else {
        fatorial.exibirFatorial(numero)
    }

    entradaDeDados.close()
})