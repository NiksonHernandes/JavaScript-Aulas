
//FOR..IN -> PODE SER USANDO EM OBJETOS E ARRAYS


//COM OBJETOS
const pessoa = {
    nome: "Carlos",
    idade: 14,
    sexo: 'M'
}

for(let posi in pessoa){ //Para cada posição no meu obj pessoa
    console.log(posi + ": " + pessoa[posi]);
}


//COM ARRAYS
const array = [1, 4, 5, 'a', 'x'];

for(let indice in array){
    console.log(indice + " = "+ array[indice])
}

//-------------------------------------------------------------------------------

//FOR..OF -> PODE SER USADO SOMENTE COM ARRAYS!!

//COM ARRAY
for(let valores of array){
    console.log(valores)
}