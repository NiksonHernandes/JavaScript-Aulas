const nomeProduto = document.getElementById("nomeProduto");
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
function renderLista(lista){
    let listagem = '';
  
    lista.forEach(produtos => {
        listagem += 
        `
        <ul>
            <li>Nome: ${produtos.nomeProduto} | Valor: ${produtos.valorProduto}</li> <br>
        </ul> 
        `
    });
    
    return listagem;
}

let listaEscondida = document.getElementById("troca").hidden = true; 
let formEscondido = document.getElementById("formulario").hidden = false;

btnCadastrar.addEventListener("click", function(){
     
    if(listaEscondida){
        listaEscondida = document.getElementById("troca").hidden = false
        formEscondido = document.getElementById("formulario").hidden = true     
        
        let adicionarProduto = geraObjCadastro(nomeProduto.value, descProduto.value, valorProduto.value);
        adicionarObjNoArray(adicionarProduto, armazena);
        console.log(armazena);

        let trocaHTML = document.getElementById("troca");
        const listagem = renderLista(armazena); 
        trocaHTML.innerHTML = listagem;   


    }else if(listaEscondida === false){
        listaEscondida = document.getElementById("troca").hidden = true
        formEscondido = document.getElementById("formulario").hidden = false
       
        nomeProduto.value = '';
        nomeProduto.focus();
        descProduto.value = '';
        valorProduto.value = '';
        vendaSim.checked = false; 
        vendaNao.checked = false     
    }
    
})

