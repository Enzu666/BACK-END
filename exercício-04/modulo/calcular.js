/******************************************************************
 * Objetivo: Funções de Cálculos e validações
 * Data: 25/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/ 

function validarEntradasImc(nome, rawPeso, rawAltura, peso, altura) {
    if (nome.trim() === "")
        return "O nome não pode ficar vazio."
    if (rawPeso.trim() === "" || rawAltura.trim() === "")
        return "Nenhum campo pode ficar vazio."
    if (isNaN(peso) || isNaN(altura))
        return "Digite apenas valores numéricos válidos."
    if (peso <= 0)
        return "O peso deve ser maior que zero."
    if (altura <= 0 || altura > 3)
        return "A altura deve ser um valor válido em metros (ex: 1.75)."
    return null
}

function calcularImc(peso, altura) {
    return peso / (altura * altura)
}

function classificarImc(imc) {
    if (imc < 18.5)               return "Abaixo do peso"
    if (imc >= 18.5 && imc <= 24.9) return "Peso normal"
    if (imc >= 25   && imc <= 29.9) return "Acima do peso (Sobrepeso)"
    if (imc >= 30   && imc <= 34.9) return "Obesidade grau 1"
    if (imc >= 35   && imc <= 39.9) return "Obesidade grau 2"
    return "Obesidade grau 3"
}

function exibirResultadoImc(nome, peso, altura) {
    const resultado      = calcularImc(peso, altura)
    const classificacao  = classificarImc(resultado)

    console.log("\n****************************************")
    console.log("            RESULTADO DO IMC")
    console.log("****************************************")
    console.log(`Nome:           ${nome}`)
    console.log(`Peso:           ${peso} kg`)
    console.log(`Altura:         ${altura} m`)
    console.log(`IMC:            ${resultado.toFixed(2)}`)
    console.log(`Classificação:  ${classificacao}`)
    console.log("****************************************\n")
}

function calcularMedia(n1, n2, n3, n4) {
    let resultado = (n1 + n2 + n3 + n4) / 4
    return resultado
}

function calcularMediaExame(media, notaExame) {
    return (media + notaExame) / 2
}

function definirStatus(media) {
    if (media >= 70) return "aprovado"
    if (media < 50)  return "reprovado"
    return "exame"
}

function definirStatusExame(mediaExame) {
    return mediaExame >= 60 ? "aprovado no exame" : "reprovado no exame"
}

function getTitulo(nome, sexo, tipo) {
    if (tipo === "aluno") return sexo === "F" ? `aluna ${nome}` : `aluno ${nome}`
    return sexo === "F" ? `professora ${nome}` : `professor ${nome}`
}

function exibirRelatorio(dados) {
    const titAluno = getTitulo(dados.nomeAluno, dados.sexoAluno, "aluno")
    const titProf  = getTitulo(dados.nomeProf, dados.sexoProf, "professor")
    const notasStr = `${dados.n1}, ${dados.n2}, ${dados.n3}, ${dados.n4}` +
        (dados.notaExame !== null ? `, Nota do Exame: ${dados.notaExame}` : "")

    console.log("\n****************************************")
    console.log("         RELATÓRIO DO ALUNO")
    console.log("****************************************")
    console.log(`\nO ${titAluno} foi [${dados.status}] na disciplina [${dados.nomeDisc}].`)
    console.log(`Curso: ${dados.nomeCurso}`)
    console.log(`${titProf.charAt(0).toUpperCase() + titProf.slice(1)}`)
    console.log(`Notas do aluno: ${notasStr}`)
    console.log(`Média Final: ${dados.media.toFixed(2)}`)
    if (dados.mediaExame !== null) {
        console.log(`Média Final do Exame: ${dados.mediaExame.toFixed(2)}`)
    }
    console.log("****************************************\n")
}

function validarEntradasTab(tabInicial, tabFinal, contInicial, contFinal) {
    if (!tabInicial || !tabFinal || !contInicial || !contFinal)
        return "Nenhum campo pode ficar sem preenchimento."
    if (tabInicial < 2 || tabInicial > 100 || tabFinal < 2 || tabFinal > 100)
        return "A tabuada deve ser entre 2 e 100."
    if (tabInicial > tabFinal)
        return "A tabuada inicial não pode ser maior que a final."
    if (contInicial < 1 || contInicial > 50 || contFinal < 1 || contFinal > 50)
        return "O contador deve ser entre 1 e 50."
    if (contInicial > contFinal)
        return "O contador inicial não pode ser maior que o final."
    return null
}

function exibirTabuada(tabInicial, tabFinal, contInicial, contFinal) {
    console.log("")
    for (let t = tabInicial; t <= tabFinal; t++) {
        console.log(`Tabuada do [${t}]`)
        for (let c = contInicial; c <= contFinal; c++) {
            console.log(`${t} x ${c} = ${t * c}`)
        }
        console.log("")
    }
}

function validarEntradaFatorial(raw, numero) {
    if (raw.trim() === "")
        return "O campo não pode ficar vazio."
    if (isNaN(numero) || !Number.isInteger(numero))
        return "Digite apenas números inteiros válidos."
    if (numero === 0)
        return "Não existe fatorial de 0."
    if (numero === 1)
        return "Não é possível calcular o fatorial de 1, precisa ser maior que 1."
    if (numero < 0)
        return "Não existe fatorial de números negativos."
    return null
}

function calcularFatorial(numero) {
    let resultado = 1
    for (let i = numero; i >= 2; i--) {
        resultado *= i
    }
    return resultado
}

function montarExpressao(numero) {
    let partes = []
    for (let i = numero; i >= 1; i--) {
        partes.push(i)
    }
    return partes.join(" x ")
}

function exibirFatorial(numero) {
    const resultado  = calcularFatorial(numero)
    const expressao  = montarExpressao(numero)

    console.log("\n****************************************")
    console.log(`Fatorial de ${numero} é ${expressao} = ${resultado}`)
    console.log("****************************************\n")
}

function validarEntradasParEImpar(rawInicial, rawFinal, numInicial, numFinal) {
    if (rawInicial.trim() === "" || rawFinal.trim() === "")
        return "Nenhum campo pode ficar vazio."
    if (isNaN(numInicial) || isNaN(numFinal))
        return "Digite apenas números válidos."
    if (numInicial < 0 || numInicial > 500)
        return "O número inicial deve ser entre 0 e 500."
    if (numFinal < 100 || numFinal > 1000)
        return "O número final deve ser entre 100 e 1000."
    if (numInicial === numFinal)
        return "O número inicial e o final não podem ser iguais."
    if (numInicial > numFinal)
        return "O número inicial não pode ser maior que o número final."
    return null
}

function separarPares(numInicial, numFinal) {
    let pares = []
    for (let i = numInicial; i <= numFinal; i++) {
        if (i % 2 === 0) pares.push(i)
    }
    return pares
}

function separarImpares(numInicial, numFinal) {
    let impares = []
    for (let i = numInicial; i <= numFinal; i++) {
        if (i % 2 !== 0) impares.push(i)
    }
    return impares
}

function exibirResultado(numInicial, numFinal) {
    const pares   = separarPares(numInicial, numFinal)
    const impares = separarImpares(numInicial, numFinal)

    console.log("\n****************************************")
    console.log("Lista de números Pares")
    console.log("****************************************")
    pares.forEach(n => console.log(n))
    console.log(`Quantidade de números encontrados: ${pares.length}`)

    console.log("\n****************************************")
    console.log("Lista de números Ímpares")
    console.log("****************************************")
    impares.forEach(n => console.log(n))
    console.log(`Quantidade de números encontrados: ${impares.length}`)
    console.log("****************************************\n")
}
module.exports ={
    validarEntradasImc,
    calcularImc,
    classificarImc,
    exibirResultadoImc,
    calcularMedia,
    calcularMediaExame,
    definirStatus,
    definirStatusExame,
    getTitulo,
    exibirRelatorio,
    validarEntradasTab,
    exibirTabuada,
    validarEntradaFatorial,
    calcularFatorial,
    montarExpressao,
    exibirFatorial,
    validarEntradasParEImpar,
    separarPares,
    separarImpares,
    exibirResultado
}