//FILTER -> CRIA UMA CÓPIA DE UMA PARTE DO ARRAY, FILTADA APENAS PARA ELEMENTOS DO ARRAY ESPECIFICADA QUE PASSAM NO TESTE IMPLEMENTADO PELA FUNÇÃO FORNECIDA.

//NÃO ALTERA OS DADOS DO ARRAY, APENAS FILTRA! 

const array = [1, 2, 3, 4, 5, 6, 7, 8]

const filtroArray = array.filter(item => {
    return item % 2 === 0
});

console.log(JSON.stringify(filtroArray))


//OU PODE SER ASSIM: 
function somenteImpares(array){
    return array % 2 !== 0;
}

console.log(JSON.stringify(array.filter(somenteImpares)));


//USANDO COM MAP
const filtroSomaPar = array
    .filter(item => item % 2 === 0)
    .map(item => item *10);

console.log(JSON.stringify(filtroSomaPar))