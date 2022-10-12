//FACTORY FUNCTION (FUNÇÕES DE FÁBRICA) -> É UMA FUNÇÃO QUE RETORNA UM NOVO OBJETO

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

//Factory Function
function criarEndereco(rua, bairro, cidade, habitante){
   return {
        // rua: rua,
        // bairro: bairro,
        // cidade: cidade,
        // habitante: habitante,
        rua,
        bairro,
        cidade,
        habitante,
        descricao(){
            console.log(`Rua: ${this.rua}, bairro: ${this.bairro}, cidade: ${this.cidade}`)
        }
    }

}

const endereco1 = criarEndereco("Fagundes", "joaquim", "SP", 1233);
console.log(endereco1);
endereco1.descricao()