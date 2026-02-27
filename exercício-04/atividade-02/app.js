/******************************************************************
 * Objetivo: Cálculo de média escolar
 * Data: 27/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/
const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("digite a nota1: ", function(resultado1){
    let nota1 = Number(resultado1)
    entradaDeDados.question("digite a nota2: ", function(resultado2){
        let nota2 = Number(resultado2)
        entradaDeDados.question("digite a nota3: ", function(resultado3){
            let nota3 = Number(resultado3)
            entradaDeDados.question("digite a nota4: ", function(resultado4){
                let nota4 = Number(resultado4)
                
                let calculos = require("../modulo/calcular.js")
                let resultado = calculos.calculoDeMedia(nota1, nota2, nota3, nota4)
                console.log(resultado)
                    
                if(resultado >= 50 && resultado <= 69){
                    entradaDeDados.question("digite a nota5: ", function(resultado5){
                        let nota5 = Number(resultado5)
                        let resultado1 = calculos.calculoDeMediaDois(resultado, nota5)
                        console.log(resultado1)
                    })
                    
                }else{
                    console.log("fim")
                }

             
            })
        })
    })
})