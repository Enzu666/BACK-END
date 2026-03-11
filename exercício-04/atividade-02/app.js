/******************************************************************
 * Objetivo: Cálculo de média escolar
 * Data: 27/02/2026
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/
const readline = require("readline")
let calculos = require("../modulo/calcular.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("\n****************************************")
console.log("   SISTEMA DE MÉDIAS ESCOLARES")
console.log("*****************************************\n")

entradaDeDados.question("Nome do aluno: ", function(nomeAluno) {
    entradaDeDados.question("Sexo do aluno (M/F): ", function(sexoAluno) {
        entradaDeDados.question("Nome do professor: ", function(nomeProf) {
            entradaDeDados.question("Sexo do professor (M/F): ", function(sexoProf) {
                entradaDeDados.question("Nome do curso: ", function(nomeCurso) {
                    entradaDeDados.question("Nome da disciplina: ", function(nomeDisc) {

                        console.log("\n--- Notas (0 a 100) ---")
                        entradaDeDados.question("Nota 1: ", function(nota1) {
                            entradaDeDados.question("Nota 2: ", function(nota2) {
                                entradaDeDados.question("Nota 3: ", function(nota3) {
                                    entradaDeDados.question("Nota 4: ", function(nota4) {

                                        const n1 = Number(nota1)
                                        const n2 = Number(nota2)
                                        const n3 = Number(nota3)
                                        const n4 = Number(nota4)
                                        const media = calculos.calcularMedia(n1, n2, n3, n4)
                                        const statusParcial = calculos.definirStatus(media)

                                        if (statusParcial === "exame") {
                                            console.log(`\nMédia ${media.toFixed(2)} — ${calculos.getTitulo(nomeAluno, sexoAluno, "aluno")} está de exame.`)
                                            entradaDeDados.question("Digite a nota do exame: ", function(exame) {
                                                const notaExame = Number(exame)
                                                const mediaExame = calculos.calcularMediaExame(media, notaExame)
                                                const status = calculos.definirStatusExame(mediaExame)

                                                calculos.exibirRelatorio({ nomeAluno, sexoAluno, nomeProf, sexoProf, nomeCurso, nomeDisc, n1, n2, n3, n4, notaExame, media, mediaExame, status })
                                                entradaDeDados.close()
                                            })
                                        } else {
                                            calculos.exibirRelatorio({ nomeAluno, sexoAluno, nomeProf, sexoProf, nomeCurso, nomeDisc, n1, n2, n3, n4, notaExame: null, media, mediaExame: null, status: statusParcial })
                                            entradaDeDados.close()
                                        }

                                    })
                                })
                            })
                        })

                    })
                })
            })
        })
    })
})