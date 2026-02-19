//?INTRODUÇÃO AO JAVASCRIPT

//Como declarar variável
//Sempre que vai criar uma variável do modo texo, será entre aspas
/*
let nome ="INÁCIO"

nome ="INÁCIO"
let idade = 38
let nota = 2.5
let ativo = true
let desativado = false

const x = 3.14 //constante
x = 3.14 // num conflito de informações iguais, apresenta o erro no código
//?var usado para declarar uma variável também, porém está em desuso
console.log (x)   // sempre que vier com parenteses no final, significar que é uma função
console.log (nome)

//! Obs.: O navegador ler o código verticalmente.
//* O let permite alterar o valor da variável
// para transformar 
//Porquê não usar o Var? Devido aos erros que ele traz para o sistema com definições existentes. Provoca erros no código.

console.log (x)
*/

//var x = 6
//[Running] node "d:\inacio\Aula JS\Aula01.js"
//undefined
/*
if (true){  // isso é um bloco de execução!

    let nome ="Matheus"
}
 */
// //TODO TIPO DE DADO

// let nome = 'Inacio'
// let media = 6
// let nota  = 5
// let ativo  = true
// let x
// let y = NaN



// console.log (typeof (nome)) //* String
// console.log (typeof (media)) //* Number
// console.log (typeof (nota)) //* Number
// console.log (typeof (ativo)) //* boolean
// console.log (typeof (x)) //* underfined
// console.log (typeof (x)) //* Nan

//Todo: OPERADORES

//? Operadores Matemáticos 

// let a = 5
// let b = 2
// a + b

// console.log (a+b)
//[Running] node "d:\inacio\Aula JS\Aula01.js"
//7
// let a = 5
// let b = 2
//let c = (a+b)

// let c = a+b // *SOMA
// let c = a-b // *SUBTRAÇÃO
// let c = a*b // *MULTIPLICAÇÃO
// let c = a/b // *DIVISÃO
// let c = a**b // *POTÊNCIA
// let c = a%b // !MODULO (RESTO DA DIVISÃO)

//let c = 4 ** (1/2)

//console.log (c)

// Todo OPERADORES LOGICOS
//BOOLEANA
//* || ( e ) and
//* && ( ou ) or
//* ! ( não ) not

// Todo OPERADORES DE ATRUBUIÇÃO

// * = RECEBE
// * == IGUAL DE VALOR 
//* === ESTRITAMENTE IGUAL (PARA VALOR E STRING (TEXTO))
//* > MAIOR
//* < MENOR
//* >= MAIOR OU IGUAL 
//* <= MENOR OU IGUAL
//* != DIFERENTE

//console.log (5!=2)

// // ! JS é CASSSENSITIVE

// let a = 2
// let A = 5

// Mikael tirou nota 3.5 na primeira e nota 5.8 na segunda, calcule a médio

// let nota1 = 3.5
// let nota2 = 5.8

// let media = (nota1+nota2)/2


// // console.log (media)
// console.log (`Sua média foi: ` + media) // para concatenar usa-se a crase para imprimir o texto na tela


//TODO: TRABALHANDO COM STRINGS (TEXTO)

// let nome = 'Inacio'
// let nome1 = "Matheus"
// //a crase é uma forma moderna de inserir o valor de uma variável dentro de um texto
//console.log (`Olá, ${nome1} seja bem vindo!`) // para concatenar usa-se a crase para imprimir o texto na tela

// console.log (nome.length) // ? retorna o tamanho da String

// console.log (nome.toUpperCase()) // ? retorna String Maiuscula

// console.log (nome.toLowerCase()) // ? retorna String Minuscula

// console.log (nome.slice(1,4)) // ? retorna parte da String
// //O slice aceita numeros negativos (ex.: 0, -1)
// console.log (nome.replace("Inacio", "Matheus")) // ? substitui parte da String

let frase = "   Estou estudando Programação   "
console.log (frase.trim()) // ? remove os espaços em branco do início e do fim da String

let frase2 = "   Estou estudando Programação   "
console.log (frase2.trim().length) // ? remove os espaços em branco do início e do fim da String e retorna o tamanho da String







