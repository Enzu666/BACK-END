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

entradaDeDados.question("Nome: ", function(nome) {
    entradaDeDados.question("Peso (kg): ", function(rPeso) {
        entradaDeDados.question("Altura (m): ", function(rAltura) {

            const peso   = Number(rPeso.replace(",", "."))
            const altura = Number(rAltura.replace(",", "."))

            const erro = imc.validarEntradas(nome, rPeso, rAltura, peso, altura)

            if (erro) {
                console.log(`\nErro: ${erro}`)
            } else {
                imc.exibirResultado(nome, peso, altura)
            }

            entradaDeDados.close()
        })
    })
})