//comentário
/*
comentário
 em
 bloco
*/

//imprime no terminal um conteúdo
console.log("testando o print do console");

//criar variável
var nome = "Enzo";

//visualizar variável
console.log(nome);

//visualizar um texto fixo e concatenar com uma variável
console.log("o nome do usuário é: " + nome);
//ou
console.log(`o nome do usuário é: ${nome}`);

//importar arquivos ou bibliotecas e captar entradas de dados via terminal de forma provisória
var readline = require("readline");

//objeto que cria uma interface para entrada de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//função de callback. Para retornar o nome digitado pelo usuário no terminal
//o método question após a digitação chama a sua função "CALL BACK"
//para entregar o que foi digitado no terminal, através do argumento
//nomeUsuario
entradaDeDados.question("Favor, digitar o seu nome: " , function(nomeUsuario){
    console.log("O nome do usuário é: " + nomeUsuario);

    //Entrada de dados para o email
    entradaDeDados.question("Favor, digitar o seu email: " , function(emailDoUsuario){
        console.log(`o email informado é: ${emailDoUsuario}`)
    });
});