//OBJETOS

//DECLARAR/SINTAXE OBJETOS: 
let pessoa = {
    nome: "Rafael", //KEY-VALUE -> PROPRIEDADE: VALOR
    idade: 24,
    sobrenome: "Silva",
    hobbies: ['correre', 'comer', 'jogar'],

};
console.log(pessoa);

//ADICIONANDO ELEMENTOS NO OBJ
pessoa.sexo = "M";
pessoa.saudacao = function (){
    console.log(`Olá, meu nome é ${this.nome}`)
};

//APAGAR UMA PROPRIEDADE
delete pessoa.sexo;

 
