//EVERY ->  PERCORRE TODOS OS ELEMENTOS DO MEU ARRAY PASSANDO PELO TESTE IMPLMENTADO NA FUNÇÃO FORNECIDA. ESTE MÉTODO RETORNA UM VALOR BOOLEANO.
 
//TRUE -> SE TODOS OS ITENS SATISFAZEREM A CONDIÇÃO PASSADA COMO FUNNÇÃO
//FALSE -> SE NO MÍNIMO 1 NÃO SATISFAZER

const numeros = [1, 2, 3, 4, 5, 6, 'a']

const novoArray = numeros.every(item =>{
   return typeof item === 'number'
} );

console.log(JSON.stringify(novoArray)) //FALSE


//SOME -> VERIFICA SE PELO MENOS 1 SATISFAZ O TESTE

const peloMenosUmItemNaoEUmNumero = numeros.some(item =>{
    return typeof item !== 'number';
})

console.log(JSON.stringify(peloMenosUmItemNaoEUmNumero));