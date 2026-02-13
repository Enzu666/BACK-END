/******************************************************************************
 * Objetivo: desenvolver uma aplicação que possa realizar cálculos matemáticos.
 * Data: 13/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************************/

function calcularOperacao(valor1, valor2, operacao){

    let numero1 = tratarDados(valor1)
    let numero2 = tratarDados(valor2)

    if(numero1 === null || numero2 === null){
        return false
    }

    if(operacao === "divisão" && numero2 === 0){
        console.log("Não é possível dividir por zero.")
        return false
    }
    
    if(operacao == "soma"){
        return numero1 + numero2
       
    }else if(operacao == "subtração"){
        return numero1 - numero2
        
    }else if(operacao == "multiplicação"){
        return numero1 * numero2
        
    }else{
       return numero1 / numero2
    }
    
}

function tratarDados(valor){

    if(valor === ""){
        return null
    }
    
    let virgulas = (valor.match(/,/g) || []).length
    let pontos = (valor.match(/\./g) || []).length

    if(virgulas > 1 || pontos > 1){
        console.log("Número inválido: múltiplas vírgulas ou pontos.")
        return null
    }

    
    let numero = Number(valor.replace(/,/g, "."))
    
    if (isNaN(numero)) {
        
        return null
    }
    
    return numero
    
}

module.exports ={
    calcularOperacao,
    tratarDados
}
