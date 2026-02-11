/******************************************************************************************
 * Objetivo: Arquivo responsável pelas funções de cálculo para este projeto
 * Autor: Enzo
 * Data: 11/02
 * Versão: 1.0.2.26
*******************************************************************************************/


//Crinado uma função para calcular o valor da compra parcelada
//Métod tradicional de criar uma função

function calcularJurosCompostos(valorCompra, taxaDeJuros, tempoPagamento){
    //recebe os argumentos da função em vriáveis locais (let)
    //as variáveis locais (valor, taxa e tempo) são numéricas por conta da conversão
    //mas os argumentos (valorCompra, taxaDeJuros e tempoPagamento), ainda são Strings
    let valor   = Number(valorCompra)
    let taxa    = Number(taxaDeJuros)
    let tempo   = Number(tempoPagamento)

    //validação para caixa vazia ou caracteres inválidos
    if(valorCompra == "" || isNaN(valorCompra) || tempoPagamento == "" || isNaN(tempoPagamento)){
        return false
    }else{
        //chama a função para converter o número em percentual
        let percentual = calcularPercentual(taxa)

        //validação para o erro do percentual na função calcularPercentual()
        if(percentual){
            let montante = valor * ((1+ percentual)**tempo)
            return Number(montante.toFixed(2))
        }else{
            return false
        }
    }
}

//cálcula o percentual de um número
function calcularPercentual(numero){

    let numeroPercentual = Number(numero)

    //validação para verificar se é um número válido 
    if(numero == "" || numero <= 0 || isNaN(numero)){
        return false//não processar
    }else{
        //Processamento do cálculo do percentual
        let percentual = numeroPercentual/100
        return Number(percentual.toFixed(2))
    }
}

//tornando as funções públicas para este projeto
module.exports = {
    calcularJurosCompostos,
    calcularPercentual
}