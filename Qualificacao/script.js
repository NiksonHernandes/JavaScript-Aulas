let nomeProduto = document.getElementById("nomeProduto");
const descProduto = document.getElementById("descProduto");
const valorProduto = document.getElementById("valorProduto");
const vendaSim = document.getElementById("vendaSim");
const vendaNao = document.getElementById("vendaNao");

const btnCadastrar = document.getElementById("btnCadastrar");

//factory function
function geraObjCadastro(nomeProduto, descProduto, valorProduto){
    return{
        nomeProduto,
        descProduto,
        valorProduto,
        valoresAtribuidos(){
            console.log(this.nomeProduto + this.descProduto + this.valorProduto)
        }
    };
}

//array que armazena o obj
let armazena = [];


//adicionar Array
function adicionarObjNoArray(valor, lista){
    lista.push(valor);
}

//função lista
function listar(lista){
    auxHTML = '';


    for(let indice in lista){
        auxHTML += '<tr>' + '<td>' + lista[indice].nomeProduto + '</td>' + 
                + '<td>' + lista[indice].descProduto + '</td>' +
                + '<td>' + lista[indice].valorProduto+ '</td>' +
                '</tr>';
    }

    return auxHTML;
}


btnCadastrar.addEventListener("click", function(){
    
    let adicionarProduto = geraObjCadastro(nomeProduto.value, descProduto.value, valorProduto.value);
    adicionarObjNoArray(adicionarProduto, armazena);
    
    console.log(armazena);

    let lista = listar(armazena)

    let troca = document.getElementById("troca");
    troca.innerHTML = lista;
    
    
    

})