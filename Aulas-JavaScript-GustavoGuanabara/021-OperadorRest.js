//REST OPERATOR -> SEGUINDO RACIOCÍNIO DA DESESTRUTURAÇÃO. O QUE ACONTECE COM O RESTO DAS INFORMAÇÕES QUE SOBRAM DA DESESTRUTURAÇÃO? 

//VOCÊ PODE BUSCAR ELAS COM REST OPERATOR

const user = {
    name: "Nicolas",
    age: 12,
    hobbies:{
        play: "Football"
    }
}

const {name: nome, age, ...rest} = user;//VAI RETORNAR TODAS AS INFORMAÇÕES, MENOS O NOME E AGE

console.log(JSON.stringify(rest));

//COM ARRAYS

const array = [1, 2, 3, 4, 5, 6, 7];

const [primeiro, ,terceiro, ...resto] = array;

console.log(JSON.stringify({primeiro, terceiro, resto}))

