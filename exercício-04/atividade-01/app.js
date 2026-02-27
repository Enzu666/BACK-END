/******************************************************************
 * Objetivo: Cálculo de IMC
 * Data: 27/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/

const readline = require("readline")
const { calculoDeImc } = require("../modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("digite o seu peso (kg): ", function(peso){
    let peso1 = Number(peso)
    entradaDeDados.question("digite sua altura (m): ", function(altura){
        let altura1 = Number(altura)

        let calculos = require("../modulo/calcular.js")
        let resultado = calculos.calculoDeImc(peso1, altura1)
        console.log(resultado)
    })
})