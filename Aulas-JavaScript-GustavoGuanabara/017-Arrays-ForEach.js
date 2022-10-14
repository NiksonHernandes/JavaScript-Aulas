//FOREACH O método forEach() executa uma dada função em cada elemento de um array.
const numeros = [1, 4, 6, 3];

const testes = numeros.forEach((numeros, indice) => {
    console.log(indice + ": " + numeros);
})