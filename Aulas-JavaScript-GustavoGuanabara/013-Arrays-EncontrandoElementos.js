//ENCONTRAR ELEMENTOS DO TIPO PRIMITIVOS:
const numeros = [1, 2, 3, 1, 4]

//INDEXOF 
console.log(numeros.indexOf(2))

//LASTINDEXOF
console.log(numeros.lastIndexOf(5))//ENCONTRA A ÚLTIMA OCORRENCIA DESSE VALOR E RETORNA O INDEX

//PODE USAR O INCLUDES TMB 
console.log(numeros.includes(4))

//--------------------------------------------------------------------------------------------

//ENCONTRAR ELEMENTOS DO TIPO REFERENCIA:
const supermercado = [
    {nome: "pão", preco: 12},
    {nome: "banana", preco: 5},
    {nome: "carne", preco: 82}
]

//FIND -> RETORNA O PRIMEIRO ELEMENTO NO ARRAY QUE SATISFAÇA A FUNÇÃO FORNECIDA. SE NENHUM VALOR SATISFAZER A FUNÇÃO RETORNA UNDEFINED.
// const produto = supermercado.find(function(produto) {
//     return produto.nome === 'pão';
// })

const produto = supermercado.find(produto => produto.nome === 'pão') //com arrow function
console.log(produto);


//EXEMPLO 2:
const number = [ 1,2,344, 10, 123, 55454]

const teste1 = number.find((number) => {
    return number > 10; //retorna 344
})

console.log(teste1);