//CLONAR/COPIAR UM OBJETO 

const computador = {
    marca: "Acer",
    RAM: "8GB",
    processador: "Core i5",

    ligar: function(){
        console.log("ligando computador")
    },

    teclasEspeciais: ['ã', 'ç']
}

//CLONANDO/COPIAR COM OBJECT.ASSIGN (ATRIBUIR)

const copiaComputador = Object.assign({//PODE ADICIONAR PROPRIEDADES NAS CHAVES VAZIAS, QUE SERAM ADICIONADAS NO CLONE DO OBJETO
    bateria: 50000

}, computador)//CHAVES VAZIAS(TARGET) - GERAR UM OBJETO NOVO. SEGUNDO PARÂMETRO É DE ONDE ELE VAI COPIAR ESSAS INFORMAÇÕES

console.log(copiaComputador)

//CLONANDO COM SPREAD(...)
const copiaComputador2 = {...computador};
console.log(copiaComputador2)