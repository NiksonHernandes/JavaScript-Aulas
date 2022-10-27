//OPTIONAL CHAINING -> ENCADEAMENTO OPCIONAL

const usuario ={
    nome: "Gustavo",
    idade: 45,
    endereco: {
        rua: "Buil Oal",
        CEP:{
            code: '15910-010'
        },

        // mostraDados() {
        //     return 'ok';
        // }
    }
}

//console.log(usuario.endereco.CEP.code);
console.log(usuario.endereco?.CEP?.code ?? "Não informado");

//?-> SE 'ENDERECO' NÃO EXISTIR ELE CAÍ NO 'NÃO INFORMADO' E NEM TENTA ACESSAR O RESTANTE!;

//COM FUNÇÃO 
console.log(usuario.endereco?.mostraDados?.() ?? "Não informado");
//SÓ VAI CHAMAR A FUNÇÃO CASO ELA EXISTA