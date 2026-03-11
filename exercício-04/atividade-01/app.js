/******************************************************************
 * Objetivo: Cálculo de IMC
 * Data: 27/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/
const readline = require("readline")
let imc = require("../modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("\n****************************************")
console.log("         SISTEMA DE CÁLCULO DE IMC")
console.log("****************************************\n")

entradaDeDados.question("Nome: ", function(nome) {
    entradaDeDados.question("Peso (kg): ", function(peso1) {
        entradaDeDados.question("Altura (m): ", function(altura1) {

            const peso   = Number(peso1.replace(",", "."))
            const altura = Number(altura1.replace(",", "."))

            const erro = imc.validarEntradasImc(nome, peso1, altura1)

            if (erro) {
                console.log(`Erro: ${erro}`)
            } else {
                imc.exibirResultadoImc(nome, peso, altura)
            }

            entradaDeDados.close()
        })
    })
})