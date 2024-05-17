/*
Crie uma classe Pessoa com propriedades nome, idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa.

Crie uma classe Retangulo com propriedades largura e altura e métodos para calcular a área e o perímetro do retângulo.

Crie uma classe ContaBancaria com propriedades saldo e titular e métodos para depositar, sacar e verificar o saldo.

Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).

Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.

Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.

Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.

Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.

Crie uma classe Livro com propriedades titulo, autor e ano e um método para exibir todas as informações do livro.

Crie uma classe Circulo com propriedade raio e métodos para calcular a área e o perímetro do círculo.
*/

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log("O meu nome e:", this.nome, "e minha idade e:", this.idade);
    }
}
const p = new Pessoa ("Eric", 18)
p.apresentar();


/////////////////////////////////////////////////////////////////////////////////


class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    perimetro() {
        return 2 * (this.largura + this.altura);
    }

    area() {
        return this.largura * this.altura;
    }
}

// Criação de um objeto da classe Retangulo
const a = new Retangulo(30, 10);

// Cálculo e exibição do perímetro
console.log("O perímetro do Retângulo é:", a.perimetro());

// Cálculo e exibição da área
console.log("A área do Retângulo é:", a.area());

/////////////////////////////////////////////////////////////////////////////////
class ContaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }

    verificarSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`);
        return this.saldo;
    }
}

// Criação de uma instância da classe ContaBancaria
const conta = new ContaBancaria("Eric", 1000);

// Depósito
conta.depositar(500);

// Saque
conta.sacar(200);

// Verificação de saldo
conta.verificarSaldo();
/////////////////////////////////////////////////////////////////////////////////
/*Crie uma classe Produto com propriedades nome, preco e quantidade e métodos para calcular o valor total do produto (preço * quantidade).*/
class Produto {
    constructor(nome, preço, quantidade) {
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }

    CalculaValor() {
        return this.preço * this.quantidade;
    }

   
}
const cv = new  Produto ("Aham",30, 10)

console.log("O valor do produto é:", cv.CalculaValor());
/////////////////////////////////////////////////////////////////////////////////
/*Crie uma classe Carro com propriedades marca, modelo e ano e um método para exibir todas as informações do carro.*/

class Carro{
    constructor(marca,modelo,ano ){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    informaçoes(){
        console.log("A marca desse desse carro é:",this.marca,"O ano do carro é:",this.ano, "O modelo do carro é:",this.modelo)
    }
}

const e = new  Carro ("Fiat","Uno com Escada em Cima", 2000)
e.informaçoes()
/////////////////////////////////////////////////////////////////////////////////
/*Crie uma classe Aluno com propriedades nome, matricula, notas (array) e um método para calcular a média das notas.*/
class Aluno{
    constructor(nome2,matricula,notas){
        this.nome2 = nome2
        this.matricula = matricula
        this.notas = notas
    }
    notas2(){
        console.log("A média da nota é:",this.notas * 2)
    }
}
const n = new Aluno ("A nota do Eric é: ",9.0, 10)
n.notas2()
/////////////////////////////////////////////////////////////////////////////////
/*Crie uma classe Animal com propriedades nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.*/
class Animal {
    constructor(nome,tipo){
        this.nome = nome
        this.tipo = tipo
    }
    NomeAnimal(){
    console.log("O nome do Animal é:",this.nome, "O tipo do animal é:" ,this.tipo)
    }
}
const z = new Animal ("Junin", "Golden Retriever")
z.NomeAnimal()
/////////////////////////////////////////////////////////////////////////////////
/*Crie uma classe Triangulo com propriedades lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.*/


