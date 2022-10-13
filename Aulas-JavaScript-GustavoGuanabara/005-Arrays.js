let num = [8, 13, 4, 1, 3, 0, 9 , 7];

//num.push(34);
let tamanho = num.length;
//num.sort();

console.log(`O vetor tem tamanho de ${tamanho} e os seguintes elementos: ${num} \n`);


//FOR... IN COM ARRAYS
for(let pos in num){ //para cada posição dentro do NUM
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

let encontrar = num.indexOf(3);

if(encontrar == -1){
    console.log("Valor não foi encontrado!");
}else{
    console.log(`Valor encontrado no índice ${encontrar}`);
}


