//COMBINAR E DIVIDIR ARRAYS: 
const primeiro = [1, 2, 3]
const segundo = [8, 9, 10]

//COMBINAR - CONCAT
const juntar = primeiro.concat(segundo);
console.log(juntar)

//DIVIDIR - SLICE
const dividir = juntar.slice(1, 4) //RETORNA UMA CÓPIA DO ARRAY A PARTIR DAS POSIÇÕES DE INICIO E FIM - O FIM NÃO É INCLUSIVO - O ARRAY ORIGINAL NÃO É MODIFICADO

//.slice(1) -> EXTRAI TODOS A PARTIR DESSE
console.log(dividir)

//-------------------------------------------------------------------------------
//COPIANDO COM SPREAD

//COMBINANDO
const juntarComSpread = [...primeiro, 'a', ...segundo];
console.log(juntarComSpread)

//COPIANDO
const copiandoComSpread = [...primeiro];
console.log(copiandoComSpread)