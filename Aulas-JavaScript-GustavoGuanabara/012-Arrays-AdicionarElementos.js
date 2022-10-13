//ADICIONAR ELEMENTOS NO ARRAY 
const numeros = [1, 2, 4, 5];

//ADICIONAR NO INICIO
numeros.unshift(0)

//ADICIONAR NO MEIO 
numeros.splice(1, 0, 'A') //INDICE QUE ELE VAI INICIAR, (0 -> INSERIR), QUAL ITEM VOCÊ DESEJA COLOCAR

//ADICIONAR NO FINAL
numeros.push(47)

console.log(numeros)