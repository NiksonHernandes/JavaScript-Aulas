//FUNÇÃO CONSTRUTORA -> DEFINE AS PROPRIEDADES E MÉTODOS QUE SERÃO INICIALIZADOS QUANDO A FUNÇÃO FOR CHAMADA, CRIANDO TAMBÉM UM OBJ, MAS COM UM OBJ COM UM CONSTRUTOR
//TEM A MESMA FUNÇÃO DA FACTORY FUNCTION -> RETORNAR UM NOVO OBJ

//OBJ DE EXEMPLO
const endereco = {
    rua: "Fagundes",
    bairro: "Joaquim de Palmas",
    cidade: "Santos",
    habitante: 15543,
    mudarCep: function(){
        console.log("cep alterado")
    }
}

//COM CONSTRUCTOR FUNCTION  
function Endereco(rua, bairro, cidade, habitante){
    this.rua = rua,
    this.bairro = bairro,
    this.cidade = cidade,
    this.habitante = habitante,
    this.mudarCep = () =>{
        console.log("Cep alterado")
    }
}


const ende1 = new Endereco("Fagundes", "joaquim", "SP", 1233)
console.log(ende1);
ende1.mudarCep()