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

function getDadosEstado(){

    let uf = 'sp'

    json.listaDeEstados.estados.forEach(function(descricao){
        if(String(descricao.sigla).toUpperCase() == String(uf).toUpperCase()){
            estado = {
                "uf": descricao.sigla,
                "descricao": descricao.nome,
                "capital": descricao.capital,
                "regiao": descricao.regiao
            }
        }
    })
    return estado
}

function getCapitalEstado(){
    let sigla = 'ac'

    json.listaDeEstados.estados.forEach(function(informacao){
        if(String(informacao.sigla).toUpperCase() == String(sigla).toUpperCase()){
            estado = {
                "uf": informacao.sigla, "descricao": informacao.nome, "capital": informacao.capital
            }
        }
    })
    return estado

}

function getEstadosRegiao(){
    let estado = {
        "regiao": '',
        "estados": []
    }
    let regiao = 'sul'
    json.listaDeEstados.estados.forEach(function(regiaoEstados){
        if(String(regiaoEstados.regiao).toUpperCase() == String(regiao).toUpperCase()){
            estado.regiao = regiaoEstados.regiao
            estado.estados.push(
                {"uf": regiaoEstados.nome, "descricao": regiaoEstados.nome}
            )
        }

    })
    return estado
}

function getCapitalPais(){
    let estados
    let cidadesCapital = []
    json.listaDeEstados.estados.forEach(estado => {
        if(estado.capital_pais){
            let json1 = {
                "capital_atual": estado.capital_pais.capital,
                "uf": estado.sigla,
                "descricao": estado.nome,
                "capital": estado.capital,
                "regiao": estado.regiao,
                "capital_pais_ano_inicio": estado.capital_pais.ano_inicio,
                "capital_pais_ano_termino": estado.capital_pais.ano_fim
            }
            cidadesCapital.push(json1)
            estados = {
                "capitais": 
                    cidadesCapital
                
            }
        }
    })
    return estados
}

function getCidades(){
    let uf = 'ac'
    let cidadesEstado = false
    let cidades = []
    json.listaDeEstados.estados.forEach(function(pesquisaCidade){
        if(String(pesquisaCidade.sigla).toUpperCase() == String(uf).toUpperCase()){
            pesquisaCidade.cidades.forEach(function(objeto){
                cidades.push(objeto.nome)
                cidadesEstado = {
                    "uf": pesquisaCidade.sigla,
                    "descricao": pesquisaCidade.nome,
                    "quantidade": cidades.length,
                    "cidades": cidades
                }
            })
        }
    })

    return cidadesEstado
}

console.log(getListaDeEstados())
console.log(getDadosEstado())
console.log(getCapitalEstado())
console.log(getEstadosRegiao())
console.log(getCapitalPais())
console.log(getCidades())