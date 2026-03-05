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

entradaDeDados.question("Tabuada inicial (2 a 100): ", function(rTabInicial) {
    entradaDeDados.question("Tabuada final (2 a 100): ", function(rTabFinal) {
        entradaDeDados.question("Contador inicial (1 a 50): ", function(rContInicial) {
            entradaDeDados.question("Contador final (1 a 50): ", function(rContFinal) {

                const tabInicial  = Number(rTabInicial)
                const tabFinal    = Number(rTabFinal)
                const contInicial = Number(rContInicial)
                const contFinal   = Number(rContFinal)

                const erro = tabuada.validarEntradas(tabInicial, tabFinal, contInicial, contFinal)

                if (erro) {
                    console.log(`\nErro: ${erro}`)
                } else {
                    tabuada.exibirTabuada(tabInicial, tabFinal, contInicial, contFinal)
                }

                entradaDeDados.close()
            })
        })
    })
})