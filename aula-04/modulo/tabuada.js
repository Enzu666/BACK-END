/******************************************************************************
 * Objetivo: desenvolver uma aplicação que possa realizar cálculos matemáticos.
 * Data: 25/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************************/

//Import  da biblioteca para cálculos
const calculosMatematicos = require('./calcular.js')

//função para imprirmir a tabuada usando while
const gerarTabuada = function(){
    let tab = Number(tabuada)
    let cont = 0
    let resultado

    //repetição para gerar números até 10
    while(cont <= 10){
        //chama a função multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(tab + 'x' + cont + " = " + resultado)

        //cont = cont + 1
        //cont ++
        cont +=1
    }
}

//função para imprirmir a tabuada usando while
const gerarTabuadaFor = function(){
    let tab = Number(tabuada)
    //let cont = 0
    let resultado

    //repetição para gerar números até 10
    for(let cont = 0; cont <= 10; cont++){
        //chama a função multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(tab + 'x' + cont + " = " + resultado)
    }
}

//gerarTabuada(2)
gerarTabuadaFor(6)