/******************************************************************
 * Objetivo: Cálculo de juros compostos
 * Data: 04/02
 * Autor: Enzo
 * Versão: 1.0.2.26
*******************************************************************/ 
/* 
M = C*(1+i)
n

Onde:
C é o capital inicial.
i é a taxa de juros.
n é o tempo para pagamento que sempre deverá ser em meses.

Sua tarefa é:
● Solicite a digitação do nome do cliente e o nome do produto
que está sendo comprado.
● Solicite ao usuário que insira o valor da compra.
● Solicite ao usuário que insira a taxa de juros (o sistema deverá
calcular o percentual).
● Solicite ao usuário que insira o tempo de pagamento.
● Calcule o montante final utilizando a fórmula acima.
● Exiba o montante final ao usuário.
● É fundamental que todas as entradas de dados sejam validadas
e convertidas conforme a necessidade.

A saída de dados da sua aplicação deverá seguir a
seguinte estrutura:

******************* [Nome da Empresa] *******************
Muito obrigado por realizar a sua compra conosco Sr(a) xxxxxxxxx.
A compra do produto xxxxxxxxx, tem um valor de: xxxxxxxxx.
A sua compra será parcelada em xx vezes e o Sr(a) pagará: xxxxxx.
O acréscimo realizado ao valor de: xxxxxxxx será de xxxxxxxxxx.

Muito obrigado por escolher a [Nome da Empresa].
*******************************************************

Desafio bem Legal !!!

A sua aplicação poderá permitir a entrada do tempo de pagamento
em anos, até para facilitar para o usuário, porém o valor fornecido
deverá ser convertido em meses pelo sistema, para então ser
aplicado a fórmula.

Para isso o sistema poderá durante a entrada de dados validar com o
usuário se a entrada é em meses ou em anos, e assim realizar a sua
respectiva conversão.

Essa nova funcionalidade poderá dar muito mais conforto e
autonomia a quem for utilizar a aplicação.
*/

const readline = require ("readline");

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question("Digite o seu nome: ", function(nomeUsuario){
    let nome = nomeUsuario;

    entradaDeDados.question("Qual o nome do produto que será comprado? ", function(nomeProdutoDigitado){
        let nomeProduto = nomeProdutoDigitado;

        entradaDeDados.question("Digite o valor deste produto: ", function(valorProdutoDigitado){
            let valorProduto = valorProdutoDigitado;

            entradaDeDados.question("Digite a taxa de juros: ", function(taxaDeJurosDigitado){
                let taxaDeJuros = taxaDeJurosDigitado;

                entradaDeDados.question("você deseja digitar o tempo de pagamentos em meses ou anos? meses = M anos = A ", function(escolhaDeTempoDigitado){
                    let escolhaDeTempo = escolhaDeTempoDigitado

                    entradaDeDados.question("Qual será o tempo de pagamento? ", function(tempodePagamentoDigitado){
                        let tempodePagamento = tempodePagamentoDigitado
                    });

                });
            });
        });
    });
});