//MÉTODOS IMPORTANTES PARA USAR NOS OBJETOS

const user = {
    name: "Diego",
    idade: 24,
    adress: {
        rua: "Rua tatu",
        number: 154,
    },
};

console.log('idade' in user) //-> VERIFICA SE EXISTE UMA PROPRIEDADE(KEY) DENTRO DO OBJETO - RETORNA TRUE OU FALSE

console.log( Object.keys(user)) //-> RETORNA UM VETOR COM TODAS AS CHAVES DO OBJ

console.log(Object.values(user)) //-> RETORNA UM VETOR COM TODAS AS PROPRIEDADES DO OBG 

console.log(Object.entries(user)) //-> RETORNA UM VETOR COM VÁRIOS SUB-VETORES DENTRO. CADA SUB-VETOR CONTEM AS CHAVES E VALORES DO OBJETO

console.log(JSON.stringify(Object.values(user))) //-> RETORNA EM UM FORMATO JSON 


console.log("\n-----------------------------------\n")
//-----------------------------------------------------------
//DESESTRUTURAÇÃO -> REMOVER PARTE DO OBJETO PARA UMA VARIÁVEL A PARTE, POR EXEMPLO. 

//EM OBJETOS: 

const cadastro = {
    nome: "Marcos",
    age: 34,
    hobbies: {
        one: "play football",
        two: "sleep",
       // three: "Ok"
    }
}

//const nomeCadastro = cadastro.nome; 
//MESMA COISA QUE: const {nome} = cadastro; você atribui o valor de nome a uma variável que tem o nome de NOME! 
const {nome, age: idade, hobbies: {three = "Ainda não definido"}} = cadastro;

console.log(nome, idade, three);


console.log("\n-----------------------------------\n")
//-----------------------------------------------------------
//COM FUNÇÕES

function mostraNome({nome}){
    return nome
};

console.log(mostraNome(cadastro));