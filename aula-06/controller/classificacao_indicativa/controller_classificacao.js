/************************************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *              Manipulação de dados para o CRUD de filmes
 * Data: 08/05/2026
 * Autor: Enzo
 * Versão: 1.0
*************************************************************************************/

//Import do arquivo de padronização de mensagens
const  config_message = require('../modulo/configMessages.js')
//Import do arquivo DAO para fazer o crud do filme no Banco de Dados
const filmeDAO = require("../../model/DAO/classificacao_indicativa/classificacao_indicativa.js")

// controller/classificacaoController.js

const classificacaoDAO = require('../../model/DAO/classificacao_indicativa/classificacao_indicativa.js') // ajuste o caminho conforme seu projeto

// POST /classificacao — Inserir nova classificação
const inserirClassificacao = async function(request, response) {
    try {
        const classificacao = request.body

        // Validação
        const erros = validarClassificacao(classificacao)
        if (erros.length > 0) {
            return response.status(400).json({
                status: 400,
                message: 'Dados inválidos.',
                errors: erros
            })
        }

        // Chama o DAO para inserir
        const result = await classificacaoDAO.insertClassificacao(classificacao)

        if (result) {
            return response.status(201).json({
                status: 201,
                message: 'Classificação inserida com sucesso.'
            })
        } else {
            return response.status(500).json({
                status: 500,
                message: 'Não foi possível inserir a classificação.'
            })
        }

    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: 'Erro interno do servidor.',
            error: error.message
        })
    }
}

// PUT /classificacao — Atualizar classificação existente
const atualizarClassificacao = async function(request, response) {
    try {
        const classificacao = request.body

        // Valida se o ID foi informado
        if (!classificacao.id || isNaN(classificacao.id)) {
            return response.status(400).json({
                status: 400,
                message: 'ID inválido ou não informado.'
            })
        }

        // Verifica se a classificação existe antes de atualizar
        const classificacaoExistente = await classificacaoDAO.selectByIdClassificacao(classificacao.id)
        if (!classificacaoExistente || classificacaoExistente.length === 0) {
            return response.status(404).json({
                status: 404,
                message: 'Classificação não encontrada.'
            })
        }

        // Validação dos dados
        const erros = validarClassificacao(classificacao)
        if (erros.length > 0) {
            return response.status(400).json({
                status: 400,
                message: 'Dados inválidos.',
                errors: erros
            })
        }

        const result = await classificacaoDAO.updateClassificacao(classificacao)

        if (result) {
            return response.status(200).json({
                status: 200,
                message: 'Classificação atualizada com sucesso.'
            })
        } else {
            return response.status(500).json({
                status: 500,
                message: 'Não foi possível atualizar a classificação.'
            })
        }

    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: 'Erro interno do servidor.',
            error: error.message
        })
    }
}

// GET /classificacoes — Listar todas as classificações
const listarClassificacoes = async function(request, response) {
    try {
        const result = await classificacaoDAO.selectAllClassificacao()

        if (result && result.length > 0) {
            return response.status(200).json({
                status: 200,
                message: 'Classificações encontradas.',
                classificacoes: result,
                quantidade: result.length
            })
        } else {
            return response.status(404).json({
                status: 404,
                message: 'Nenhuma classificação encontrada.'
            })
        }

    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: 'Erro interno do servidor.',
            error: error.message
        })
    }
}

// GET /classificacao/:id — Buscar classificação por ID
const buscarClassificacaoPorId = async function(request, response) {
    try {
        const id = request.params.id

        // Valida o ID
        if (!id || isNaN(id)) {
            return response.status(400).json({
                status: 400,
                message: 'ID inválido ou não informado.'
            })
        }

        const result = await classificacaoDAO.selectByIdClassificacao(id)

        if (result && result.length > 0) {
            return response.status(200).json({
                status: 200,
                message: 'Classificação encontrada.',
                classificacao: result[0]
            })
        } else {
            return response.status(404).json({
                status: 404,
                message: 'Classificação não encontrada.'
            })
        }

    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: 'Erro interno do servidor.',
            error: error.message
        })
    }
}

// DELETE /classificacao/:id — Excluir classificação por ID
const excluirClassificacao = async function(request, response) {
    try {
        const id = request.params.id

        // Valida o ID
        if (!id || isNaN(id)) {
            return response.status(400).json({
                status: 400,
                message: 'ID inválido ou não informado.'
            })
        }

        // Verifica se existe antes de excluir
        const classificacaoExistente = await classificacaoDAO.selectByIdClassificacao(id)
        if (!classificacaoExistente || classificacaoExistente.length === 0) {
            return response.status(404).json({
                status: 404,
                message: 'Classificação não encontrada.'
            })
        }

        const result = await classificacaoDAO.deleteClassificacao(id)

        if (result) {
            return response.status(200).json({
                status: 200,
                message: 'Classificação excluída com sucesso.'
            })
        } else {
            return response.status(500).json({
                status: 500,
                message: 'Não foi possível excluir a classificação.'
            })
        }

    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: 'Erro interno do servidor.',
            error: error.message
        })
    }
}

// Validação dos dados da classificação
const validarClassificacao = function(classificacao) {
    const erros = []

    // Verifica se o campo existe e não está vazio
    if (!classificacao.classificacao || classificacao.classificacao === '') {
        erros.push('O campo classificação é obrigatório.')
    }

    // Verifica se é string
    if (typeof classificacao.classificacao !== 'string') {
        erros.push('O campo classificação deve ser um texto.')
    }

    // Verifica tamanho mínimo e máximo (ajuste conforme sua regra de negócio)
    if (classificacao.classificacao && classificacao.classificacao.trim().length < 2) {
        erros.push('A classificação deve ter pelo menos 2 caracteres.')
    }

    if (classificacao.classificacao && classificacao.classificacao.trim().length > 50) {
        erros.push('A classificação deve ter no máximo 50 caracteres.')
    }

    return erros
}

module.exports = {
    inserirClassificacao,
    atualizarClassificacao,
    listarClassificacoes,
    buscarClassificacaoPorId,
    excluirClassificacao
}