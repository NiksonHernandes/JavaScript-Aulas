//Nullish Coalescing Operator -> é um operador pra lidar com valores nulos

const idade = 0;

//console.log(`A sua idade é: ${idade || "Não informado"}`); -> retorna: Não informado

console.log(`A idade é: ${idade ?? "Não informado"}`);

//?? -> considera FALSY todos os outros valores, menos o zero. 