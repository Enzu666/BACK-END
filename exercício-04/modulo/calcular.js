/******************************************************************
 * Objetivo: Funções de Cálculos
 * Data: 25/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/ 

function calculoDeImc(peso, altura){
    
    let altura1 = altura*altura

    let imc = peso/altura1
    return imc
}

function calculoDeMedia(nota1, nota2, nota3, nota4){
    let media = (nota1+nota2+nota3+nota4)/4
    return media
}
function calculoDeMediaDois(nota1, nota2){
   
    let media = (nota1+nota2)/2
    return media
}

module.exports ={
    calculoDeImc,
    calculoDeMedia,
    calculoDeMediaDois
}