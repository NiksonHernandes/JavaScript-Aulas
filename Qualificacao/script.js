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
let armazena = [
    {
        nomeProduto: "Abacaxi",
        descProduto: "Fruta",
        valorProduto:  12

    },
    {
        nomeProduto: "Pão de alho",
        descProduto: "Pão feito com alho",
        valorProduto:  34

    },
    {
        nomeProduto: "Caixa de chocolate",
        descProduto: "Chocolate em uma caixa",
        valorProduto:  54

    },
    {
        nomeProduto: "Banana",
        descProduto: "Fruta",
        valorProduto:  4

    },

];

let valores = [1, 6, 2, 6, 7, 1, 3]

//adicionar Array
function adicionarObjNoArray(valor, lista){
    lista.push(valor);
}

//função lista
function renderLista(lista, valores){
    
    let listagem = '';
  
    //ordena valores
    lista.sort(function (a, b) { return a.valorProduto - b.valorProduto })

    lista.forEach(produtos => {
        listagem += 
        `
        <ul>
            <li>Nome: ${produtos.nomeProduto}  |  Valor: ${produtos.valorProduto}</li> <br>
        </ul> 
        `
    });

    return listagem;
}

let listaEscondida = document.getElementById("troca").hidden = true; 
let formEscondido = document.getElementById("formulario").hidden = false;

btnCadastrar.addEventListener("click", function(){
     
    if(listaEscondida){

        if(nomeProduto.value != '' && descProduto.value != '' && valorProduto.value != '' 
        && (vendaSim.checked == true ||vendaNao.checked == true)){
        
            listaEscondida = document.getElementById("troca").hidden = false
            formEscondido = document.getElementById("formulario").hidden = true

            let adicionarProduto = geraObjCadastro(nomeProduto.value, descProduto.value, valorProduto.value);
            adicionarObjNoArray(adicionarProduto, armazena);
            console.log(armazena);

            let trocaHTML = document.getElementById("troca");
            const listagem = renderLista(armazena, valores); 
            trocaHTML.innerHTML = listagem;   

        }else{
            alert("preencha todos os campos")
            nomeProduto.focus();
            
        }
        

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

