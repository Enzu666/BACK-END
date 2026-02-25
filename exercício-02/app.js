/******************************************************************
 * Objetivo: Cálculo de juros compostos
 * Data: 04/02/2026
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

const readline = require("readline");

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//recebe o nome do usuário e protege contra números ou espaço vazio
entradaNomeUsuario()
function entradaNomeUsuario(){
    entradaDeDados.question("Digite o seu nome: ", function(nomeUsuarioDigitado){
        let nomeUsuario = nomeUsuarioDigitado
        if(nomeUsuario == ""){
            console.log("Não é possível prosseguir sem o nome.");
            entradaNomeUsuario()
        }else if(!isNaN(nomeUsuario)){
            console.log("Não é possível atribuir números ao nome.")
            entradaNomeUsuario()
        }
        //recebe o nome do produto e protege contra espaço vazio
        entradaNomeProduto()
        function entradaNomeProduto(){
            entradaDeDados.question("Qual o nome do produto que será comprado? ", function(nomeProduto){

                if(nomeProduto == ""){
                    console.log("Não é possível prosseguir sem o nome do produto.");
                    entradaNomeProduto()
                }
                //recebe o valor do produto e protege contra letras ou espaço vazio
                entradaValorProduto()
                function entradaValorProduto(){
                    entradaDeDados.question("Digite o valor deste produto: ", function(valorProdutoDigitado){
                        let valorProduto = Number(valorProdutoDigitado);

                        if(valorProduto == ""){
                            console.log("Não é possível prosseguir sem o valor do produto.");
                            entradaValorProduto()
                        }else if(isNaN(valorProduto)){
                            console.log("Não é possível atribuir letras ao valor.")
                            entradaValorProduto()
                        }
                        //recebe taxa de juros e protege contra letras ou espaço vazio
                        entradaTaxaDeJuros()
                        function entradaTaxaDeJuros(){
                            entradaDeDados.question("Digite a taxa de juros : ", function(taxaDeJurosDigitado){
                                let taxaDeJuros = Number(taxaDeJurosDigitado);

                                if (taxaDeJuros > 1) {
                                    taxaDeJuros = taxaDeJuros / 100;

                                }else if(taxaDeJuros == ""){
                                    console.log("Não é possível prosseguir sem o valor de juros.");
                                    entradaTaxaDeJuros()

                                }else if(isNaN(taxaDeJuros)){
                                    console.log("Não é possível atribuir letras ao valor do juros.")
                                    entradaTaxaDeJuros()
                                }
                                //recebe tempo de pagamento e protege contra números, espaço vazio ou outras letras que não seja m ou a
                                entradaEscolhaTempo()
                                function entradaEscolhaTempo(){
                                    entradaDeDados.question("Você deseja digitar o tempo de pagamento em meses ou anos? (M/A): ", function(escolhaDeTempoDigitado){
                                        escolhaDeTempo = escolhaDeTempoDigitado
                                        if(escolhaDeTempo !== "a" && escolhaDeTempo !== "A" && escolhaDeTempo !== "M" && escolhaDeTempo !== "m"){
                                            console.log("Digite apenas uma das opções acima.")
                                            entradaEscolhaTempo()
                                        }
                                        //recebe o nome do usuário e protege contra letras ou espaço vazio, e faz o cálculo de juros composto
                                        entradaTempoPagamento()
                                        function entradaTempoPagamento(){
                                            entradaDeDados.question("Qual será o tempo de pagamento? ", function(tempodePagamentoDigitado){
                                                let tempodePagamento = Number(tempodePagamentoDigitado);

                                                console.log(tempodePagamento)
                                                
                                                if(tempodePagamento == ""){
                                                    console.log("Não é possível prosseguir sem o tempo de pagamento.");
                                                    entradaTempoPagamento()
                
                                                }else if(isNaN(tempodePagamento)){
                                                    console.log("Não é possível atribuir letras ao tempo de pagamento.")
                                                    entradaTempoPagamento()
                                                }

                                                if(escolhaDeTempo === "A" || escolhaDeTempo === "a"){
                                                    tempodePagamento = tempodePagamento * 12;
                                                }
                                                
                                                let montante = valorProduto * Math.pow((1 + taxaDeJuros), tempodePagamento);
                                                let valorParcela = montante / tempodePagamento;

                                                console.log("******************* [Viva Moda] *******************");
                                                console.log("Muito obrigado por realizar a sua compra conosco Sr(a) " + nomeUsuario);
                                                console.log("A compra do produto " + nomeProduto + " tem um valor de: R$ " + valorProduto.toFixed(2));
                                                console.log("A sua compra será parcelada em " + tempodePagamento + " vezes de R$ " + valorParcela.toFixed(2));
                                                console.log("Montante total a pagar: R$ " + montante.toFixed(2));
                                                console.log("Total de juros: R$ " + (montante - valorProduto).toFixed(2));
                                                console.log("*******************************************************");
                                                
                                                entradaDeDados.close();
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}