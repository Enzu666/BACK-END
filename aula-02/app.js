/******************************************************************
 * Objetivo: Calcular médias escolares
 * Data: 29/01
 * Autor: Enzo
 * Versão: 1.0.1.26
*******************************************************************/ 
/*
    Existem 3 formas de criar variáveis:

        var -> Permite a criação de um espaço na memória 
               do tipo variável. Foi utilizado muito em 
               projetos antigos.
               Recomendação: Caso você queira utilizar, 
               recomenda-se na criação de variáveis globais 
               (Aquelas no início do código).

        let -> Permite a criação de um espaço na memória
               do tipo variável. A utilização deste padrão é
               para criação dentro de blocos de programação local { }.
               Essa variável nasce e morre dentro deste bloco.
               Não é recomendado a sua utilização em escopo global. 

        const -> Permiote a cração de um espaço na memória 
                 onde não sofrerá alteração durante o código.
                 A const pode ser utilizada dentro e fora de bloco { }.
                 Recomendação: Caso você queira diferenciar uma const, var e um let, 
                 lembre-se, a const pode ser criada com letras MAIUSCULAS.


*/

//import da biblioteca
const readline = require ("readline");

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDeDados.question("Digite o nome do aluno: ", function(nome){
    //recebe o nome do aluno que foi digitado, para preservar a informação original
    let nomeAluno = nome;

    entradaDeDados.question("Digite a nota 1: ", function(nota1){
        //recebe a nota1 que foi digitado, para preservar a informação original
        let valor1 = nota1;

        entradaDeDados.question("Digite a nota 2: ", function(nota2){
            //recebe a nota2 que foi digitado, para preservar a informação original
            let valor2 = nota2;

            entradaDeDados.question("Digite a nota 3: ", function(nota3){
                //recebe a nota3 que foi digitado, para preservar a informação original
                let valor3 = nota3;

                entradaDeDados.question("Digite a nota 4: ", function(nota4){
                    //recebe a nota4 que foi digitado, para preservar a informação original
                    let valor4 = nota4;

                    /*
                        Operadores de comparação:

                        compara o conteúdo
                        ==  -> igual à
                        <   -> menor que
                        >   -> maior que
                        <=  -> menor ou igual à
                        >=  -> maior ou igual à
                        !=  -> diferente de

                        compara o conteúdo e a tipagem de dados
                        === -> conteúdo são igual? e a tipagem?
                        !== -> conteúdo diferente de? e a tipagem?
                        ==! ->

                        operadores lógicos:
                        E   -> AND -> &&
                        OU  -> OR  -> ||
                        NÃO -> NOT -> !
                    */

                    if(nomeAluno == "" || valor1 == "" || valor2 == "" || valor3 == "" || valor4 == ""){
                        console.log("É obrigatório preencher todos os dados");
                        
                    
                    }else if(resultado < 0 || resultado >100){
                        console.log("ERRO");
                    
                    }else{
                      var resultado =  ( Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4) ) /4
                      console.log("A nota do aluno é: " + resultado);

                    if(resultado < 40){ 
                        console.log("REPROVADO")  
                        
                    }else if(resultado >= 50){
                        console.log("APROVADO"); 

                    }else{
                        console.log("RECUPERAÇÃO")
                    }
                    }
                
                
                });

            });

        });

    });
});