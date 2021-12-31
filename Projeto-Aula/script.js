class Cliente {
    constructor(nome, endereco, cpf, telefone){
        this._nome = nome;
        this._endereco = endereco;
        this._cpf = cpf;
        this._telefone = telefone;
    }
}

var armazena = [];
var auxPosicao = '';

//função para adicionar o elemento no array/lista
function cadastrar(objeto, lista){
   lista.push(objeto);
}

//função que altera o cliente
function altera(objeto, lista, posicao){
    lista[posicao] = objeto;   
}

//função excluir
function excluir(lista, posicao){
    lista.splice(posicao, 1);
}

//função para montar a estrutura da tabela
function listarTabela(lista){
    let auxHtml = ' ';
    for (let  i=0;  i < lista.length; i++){
        auxHtml += '<tr>' + '<td>' + lista[i]._nome + '</td>' 
            + '<td>' + lista[i]._endereco + '</td>' 
            + '<td>' + lista[i]._cpf + '</td>' 
            + '<td>' + lista[i]._telefone + '</td>' 
            + '<td>' + 
            '<button class="btn btn-warning" rel="'+ i +'" >A</button>' + 
            '</td>' + '<td>' + 
            '<button class="btn btn-danger" rel="'+ i +'">D</button> ' + '</td>' + 
            '</tr>'; 
    }
    return auxHtml;
}

$(document).ready(() => {
    $("#btnSalvar").click(function(){
        
        let nome = $('#nome').val(); 
        let endereco = $("#endereco").val();
        let cpf = $("#cpf").val();
        let telefone = $("#telefone").val();

        if(nome != '' && endereco != '' && cpf != '' && telefone != ''){

            let adicionaCliente = new Cliente(nome, endereco, cpf, telefone);
            if(auxPosicao == ''){
                cadastrar(adicionaCliente, armazena);
            }else{
                altera(adicionaCliente, armazena, auxPosicao);
                auxPosicao = '';
            }
            $("#corpoTabela").html(listarTabela(armazena));
            $('input').val('');

        }else{
            alert("Todos os dados são necessários!")
        }
    })
    $("#corpoTabela").on("click", '.btn-warning', function (){
        let posicaoAtual = $(this).attr('rel');  
        auxPosicao = posicaoAtual
        $("#nome").val(armazena[auxPosicao ]._nome);
        $("#endereco").val(armazena[auxPosicao ]._endereco);
        $("#cpf").val(armazena[auxPosicao ]._cpf);
        $("#telefone").val(armazena[auxPosicao ]._telefone);
    })

    $("#corpoTabela").on("click", '.btn-danger', function(){

        let posicaoExcluir = $(this).attr('rel');
        if(confirm('Deseja excluir permanentemente?')){
            excluir(armazena, posicaoExcluir);
            $("#corpoTabela").html(listarTabela(armazena));
        }
    })


    //AJAX
    /*$("#btnAjax").click(()=>{
        $.ajax({
            url: "http://date.jsontest.com/", //endereço do servidor que vai comunicar no site: http://www.jsontest.com/
            //context: document.body
            method: 'GET'
        }).done(function(resposta) { //done - qnd estiver pronto
            $('#retornoAjax').html(resposta.time);
        
        });
    })*/

    //sem jQuery
    document.getElementById("btnAjax").onclick = () =>{
        var xhr =  new XMLHttpRequest();
        var resposta;

        xhr.responseType = "json"
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                resposta = xhr.response

                document.getElementById('retornoAjax').innerHTML = 'Data: ' + resposta.date + '<br> ' + 'Hora: ' + resposta.time;
                
            }
        }
        xhr.open("GET", 'http://date.jsontest.com/');
        xhr.send();
    }

    $("#btnJson").click(() =>{
        let jsonclientes = JSON.stringify(armazena);
        console.log(jsonclientes);
        alert("Lista de clientes exportadas!");

    })
})