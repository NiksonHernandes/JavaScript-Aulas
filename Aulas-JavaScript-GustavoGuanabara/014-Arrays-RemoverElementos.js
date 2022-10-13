//REMOVER ELEMENTOS DO ARRAY:
const numeros = [1, 2, 4, 6, 5, 8, 1];

//INICIO
const removePrimeiro = numeros.shift();
console.log(`Removido do inicio: ${removePrimeiro}`)

//MEIO
const removeMeio = numeros.splice(2, 1);//QUERO REMOVER O ELEMENTOS DA POSIÇÃO 2. QUANTOS ELEMENTOS A PARTIR DELE? - APENAS 1.
//numeros.splice(2) -> remove todos a partir do 2 
console.log(`Removido do meio: ${removeMeio}`)

//FINAL
const removeFinal = numeros.pop();
console.log(`Removido do final: ${removeFinal}`)



console.log("Array inteiro: " + numeros)