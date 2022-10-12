//METODOS DE STRING

const mensagem = "  Minha primeira mensagem";
console.log(typeof mensagem);//retor na: 'string'
console.log(mensagem.length);//tamanho da mensagem
console.log(mensagem[5]);//retorna a letra no indice 5
console.log(mensagem.includes('primeira'));//procura a paavra e retorna true ou false
console.log(mensagem.indexOf('Minha'));//procura a palavra e retorna o índice da primeira ocorrencia dela, caso não encontre retorna -1 
console.log(mensagem.replace('Minha', "Nossa"));//substitui uma palavra pro outra
console.log(mensagem.trim());//remove todos os espaços do início e do final da frase
console.log(mensagem.startsWith(" "));//inicia com espaço? true ou false
console.log(mensagem.endsWith("mensagem"));//termina com 'mensagem'? true ou false

const mensagem2 = "Estou com saúde"
console.log(mensagem2.split(" "))//quebra a frase e gera um array de onde houver o espaço vazio


