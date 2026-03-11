/******************************************************************
 * Objetivo: Cálculo de tabuada
 * Data: 27/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/
const readline = require("readline")
let tabuada = require("../modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("\n****************************************")
console.log("      SISTEMA DE CÁLCULO DE TABUADA")
console.log("****************************************\n")

entradaDeDados.question("Tabuada inicial (2 a 100): ", function(tabInicial1) {
    entradaDeDados.question("Tabuada final (2 a 100): ", function(tabFinal1) {
        entradaDeDados.question("Contador inicial (1 a 50): ", function(contInicial1) {
            entradaDeDados.question("Contador final (1 a 50): ", function(contFinal1) {

                const tabInicial  = Number(tabInicial1)
                const tabFinal    = Number(tabFinal1)
                const contInicial = Number(contInicial1)
                const contFinal   = Number(contFinal1)

                const erro = tabuada.validarEntradasTab(tabInicial, tabFinal, contInicial, contFinal)

                if (erro) {
                    console.log(`Erro: ${erro}`)
                } else {
                    tabuada.exibirTabuada(tabInicial, tabFinal, contInicial, contFinal)
                }

                entradaDeDados.close()
            })
        })
    })
})