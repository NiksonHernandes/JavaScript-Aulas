//JOIN -> JUNTA TODOS OS ELEMENTOS DE UM ARRAY EM UMA STRING E RETORNA ESSA STRING
const numeros = [1, 3, 5, 3, 4];

const junta = numeros.join('-');
console.log(junta)

const frase = "Eu gosto de chocolate com café"
const une = frase.split(' '); //TRANSFORMOU A STRING EM UM ARRAY DE PALAVRAS
console.log(une);

const traco = une.join(' '); //TRANSFORMOU O ARRAY EM UMA STRING
console.log(traco)