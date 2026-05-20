/************************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *              Manipulação de dados para o CRUD de filmes
 * Data: 08/05/2026
 * Autor: Enzo
 * Versão: 1.0
*************************************************************************************/

// controller/classificacao_indicativa/controller_classificacao.js

const classificacaoDAO = require('../../model/DAO/classificacao_indicativa/classificacao_indicativa.js')

const validarClassificacao = function(dados) {
    const erros = []

    if (!dados.sigla || dados.sigla.trim() === '')
        erros.push('O campo sigla é obrigatório.')
    else if (dados.sigla.trim().length > 45)
        erros.push('A sigla deve ter no máximo 45 caracteres.')

    if (!dados.nome || dados.nome.trim() === '')
        erros.push('O campo nome é obrigatório.')
    else if (dados.nome.trim().length > 100)
        erros.push('O nome deve ter no máximo 100 caracteres.')

    if (dados.descricao && dados.descricao.trim().length > 255)
        erros.push('A descrição deve ter no máximo 255 caracteres.')

    return erros
}

const inserirClassificacao = async function(dados, contentType) {
    if (!dados || Object.keys(dados).length === 0) {
        return { status_code: 400, message: 'Body da requisição está vazio ou ausente.' }
    }

    if (String(contentType).toLowerCase().includes('application/json') === false) {
        return { status_code: 415, message: 'Content-Type inválido. Envie application/json.' }
    }

    const erros = validarClassificacao(dados)
    if (erros.length > 0) {
        return { status_code: 400, message: 'Dados inválidos.', errors: erros }
    }

    const result = await classificacaoDAO.insertClassificacao(dados)

    if (result) {
        return { status_code: 201, message: 'Classificação inserida com sucesso.' }
    } else {
        return { status_code: 500, message: 'Não foi possível inserir a classificação.' }
    }
}

const atualizarClassificacao = async function(dados, id, contentType) {
    if (!dados || Object.keys(dados).length === 0) {
        return { status_code: 400, message: 'Body da requisição está vazio ou ausente.' }
    }

    if (String(contentType).toLowerCase().includes('application/json') === false) {
        return { status_code: 415, message: 'Content-Type inválido. Envie application/json.' }
    }

    if (!id || isNaN(id)) {
        return { status_code: 400, message: 'ID inválido ou não informado.' }
    }

    const classificacaoExistente = await classificacaoDAO.selectByIdClassificacao(id)
    if (!classificacaoExistente || classificacaoExistente.length === 0) {
        return { status_code: 404, message: 'Classificação não encontrada.' }
    }

    const erros = validarClassificacao(dados)
    if (erros.length > 0) {
        return { status_code: 400, message: 'Dados inválidos.', errors: erros }
    }

    dados.id = id

    const result = await classificacaoDAO.updateClassificacao(dados)

    if (result) {
        return { status_code: 200, message: 'Classificação atualizada com sucesso.' }
    } else {
        return { status_code: 500, message: 'Não foi possível atualizar a classificação.' }
    }
}

const listarClassificacoes = async function() {
    const result = await classificacaoDAO.selectAllClassificacao()

    if (result && result.length > 0) {
        return { status_code: 200, message: 'Classificações encontradas.', quantidade: result.length, classificacoes: result }
    } else {
        return { status_code: 404, message: 'Nenhuma classificação encontrada.' }
    }
}

const buscarClassificacaoPorId = async function(id) {
    if (!id || isNaN(id)) {
        return { status_code: 400, message: 'ID inválido ou não informado.' }
    }

    const result = await classificacaoDAO.selectByIdClassificacao(id)

    if (result && result.length > 0) {
        return { status_code: 200, message: 'Classificação encontrada.', classificacao: result[0] }
    } else {
        return { status_code: 404, message: 'Classificação não encontrada.' }
    }
}

const excluirClassificacao = async function(id) {
    if (!id || isNaN(id)) {
        return { status_code: 400, message: 'ID inválido ou não informado.' }
    }

    const classificacaoExistente = await classificacaoDAO.selectByIdClassificacao(id)
    if (!classificacaoExistente || classificacaoExistente.length === 0) {
        return { status_code: 404, message: 'Classificação não encontrada.' }
    }

    const result = await classificacaoDAO.deleteClassificacao(id)

    if (result) {
        return { status_code: 200, message: 'Classificação excluída com sucesso.' }
    } else {
        return { status_code: 500, message: 'Não foi possível excluir a classificação.' }
    }
}

module.exports = {
    inserirClassificacao,
    atualizarClassificacao,
    listarClassificacoes,
    buscarClassificacaoPorId,
    excluirClassificacao
}