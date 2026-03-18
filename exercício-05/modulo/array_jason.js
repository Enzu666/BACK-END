/*****************************************************************************************
 * Objetivo: MAnipular dados utilizando Array e JSON para o exercício bem legal kkkkk
 * Data: 18/03/2026
 * Autor: Enzo
 * Versão: 1.0
******************************************************************************************/

const json = require('./estados_cidades.js')

function getListaDeEstados(){

    let uf = {
        "estados": [],
        "qtde": 0
    }

    json.listaDeEstados.estados.forEach(function(nomeEstado){
       uf.estados.push(nomeEstado.sigla)
       uf.qtde++
    })

    return uf
}

console.log(getListaDeEstados())