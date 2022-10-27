//FOREACH O método forEach() executa uma dada função em cada elemento de um array.
const numeros = [1, 4, 6, 3];

const testes = numeros.forEach((numeros, indice) => {
    console.log(indice + ": " + numeros);
})

//CASO QUEIRA RETORNAR UM ARRAY MULTIPLICADO POR 2, VOCÊ NÃO CONSEGUE!
//NÃO PODE TER RETORNO DE DENTRO DO FOREACH! SE QUISER QUE ELE RETORNE ALGUMA COISA, USE O MAP.
//ex:

const novoArray = numeros.forEach(item => {
    return item * 2;
})

console.log(JSON.stringify(novoArray)) //VAI DAR ERRO, POIS N RETORNA 