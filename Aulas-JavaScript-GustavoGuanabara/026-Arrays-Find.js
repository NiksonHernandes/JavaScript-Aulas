//FIND -> RETORNA O PRIMEIRO ELEMENTO NO ARRAY QUE SATISFAÇA A FUNÇÃO DE TESTE FORNECIDA. SE NENHUM SATISFAZER ELE RETORA UNDEFINED!

const numeros = [1, 3, 4, 2, 5]

const primeiroParEncontrado = numeros.find(item => item % 2 === 0);

console.log(JSON.stringify(primeiroParEncontrado));

//FINDINDEX -> IGUAL AO FIND, MAS EM VEZ DE RETORNAR O VALOR, ELE RETORNA O INDICE DO PRIMEIRO ELEMENTO ENCONTRADO QUE SATISFAÇA A FUNÇÃO .


const primeiroIndiceParEncontrado = numeros.findIndex(item => item % 2 === 0);

console.log(JSON.stringify(primeiroIndiceParEncontrado));