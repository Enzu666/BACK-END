/******************************************************************
 * Objetivo: Criar Funções (Recriando exercício da aula-02)
 * Data: 11/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/
let valorPercentual = 5

//import da biblioteca de cálculos financeiros
let calculos = require("./modulo/calculos.js")

let percentual = calculos.calcularPercentual(valorPercentual)

console.log(percentual)