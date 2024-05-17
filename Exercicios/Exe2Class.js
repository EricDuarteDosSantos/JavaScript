/*
    1-Crie uma função chamada soma que aceita dois parâmetros e retorna a 
    soma deles.

    2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e 
    não tem nenhum parâmetro nem retorno.

    3-Escreva uma função chamada verificarPar que recebe um número como parâmetro 
    e retorna verdadeiro se o número for par e falso caso contrário.

    4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo
     como parâmetro e retorna a área do círculo.

    5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro 
    e retorna a data atual.

    6-Escreva uma função chamada calcularMedia que recebe um array de números 
    como parâmetro e retorna a média desses números.

    7-Crie uma função chamada adicionarDois que aceita um número como parâmetro
     e retorna esse número adicionado a 2.

    8-Defina uma função chamada concatenarStrings que recebe duas strings como
     parâmetros e retorna uma nova string que é a concatenação das duas strings 
     fornecidas.

    9-Escreva uma função chamada verificarNegativo que recebe um número como
     parâmetro e retorna verdadeiro se o número for negativo e falso caso
     contrário.

    10-Crie uma função chamada removerEspacos que recebe uma string como 
    parâmetro e retorna a mesma string sem espaços em branco.

*/
/*
1-Crie uma função chamada soma que aceita dois parâmetros e retorna a soma deles.
*/

function soma(a, b) {
    return a + b;
}
let resultadoSoma = soma(10, 2);
console.log("O resultado das somas é:",resultadoSoma);

    

/*
2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e não tem nenhum parâmetro nem retorno.
*/

function saudacao(){
    
}
console.log("Olá, mundo!")

/*3-Escreva uma função chamada verificarPar que recebe um número como parâmetro e retorna verdadeiro se o número for par e falso caso contrário. */

function verificarPar(x){
    if (x %2 == 0){
        return console.log("O número é par");
    }
    else
    {
        return console.log("O número é Impar.");
    }
}
console.log(verificarPar(2))
/*4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo como parâmetro e retorna a área do círculo.*/

function calcularAreaCirculo(){
    if (raio < 0)
  calcularAreaCirculo("O raio não pode ser negativo.")

area = math.pi * (raio ** 2)
return area

}
/* 5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro e retorna a data atual.*/

function retornarDataAtual (){
    
}
console.log("16/05/2024")

/*6-Escreva uma função chamada calcularMedia que recebe um array de números como parâmetro e retorna a média desses números.*/
