//ESVAZIANDO ARRAYS
let numeros = [1, 5, 6, 2, 8];
let outros = numeros;

//SOLUÇÃO 1: 
numeros.length = 0; //APAGA AS REFERENCIAS JUNTOS

//SOLUÇÃO 2:
numeros.splice(0, numeros.length);


console.log(outros)
