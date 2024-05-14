//const pessoas = ["Caio", "Da", "Bumbum"]
/*
//adciona um elemento em ultimo no array
pessoas.push("Caio")
//remove o ultimo elemento no array
pessoas.pop()
//adciona um elemento no começo do array
pessoas.unshift("Caio")
//remove o primeio elemento do array
pessoas.shift("Caio")
//atualizar o valor de um array
pessoas[1] = "Caio"
console.log(pessoas)*/


/*for(i=0;i<=10;i++){
    console.log(pessoas[i])
}*/

// pessoas.forEach(
//     function rodarArray(pessoa){
//         console.log(pessoa)
//     }
// )

/* pessoas.forEach(pessoa => console.log(pessoa))

const pessoasModificado = pessoas.map(pessoa => console.log(pessoas + "!"))

function mudarPessoas(){
    return pessoas.map(pessoa => console.log(pessoas + "!"))
}*/

/*const numero = [1,2,3]

function dobrarNumeros(numero){
    return numero.map(numero => console.log(numero*2))
}

dobrarNumeros(numero)*/

// const nomes = ["Lucas", "Fernando", "Caio"]

// function transformarCaps(nomes){
//         nomes.map(nomes => console.log(nomes.toUpperCase()))
//     }
// transformarCaps(nomes)

 function transformarCaps(nomes){
    return nomes.map(nomes => nomes.toUpperCase())
}


let mostrarNomes = transformarCaps(["Lucas", "Fernando", "Caio"])
console.log(mostrarNomes)