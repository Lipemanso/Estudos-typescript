// let produtos  = new Map<number,string>(); //cria um novo objeto Map.

// produtos.set(1,"Carro"); // set - adiciona um novo elemento chave:valor ao objeto Map.
// produtos.set(2,"Moto");
// produtos.set(3,"Avião");

// // produtos.set(1,"Morango").set(2,"Abacaxi").set(3,"Limão"); // podemos também usa o set encadeado

// console.log(produtos)
// console.log(produtos.size) // retorna o tamanho do objeto Map.

// let objeto = produtos.get(1) // get - retorna o elemento solicitado no objeto Map.
// console.log(objeto)

// //Map inicializado

// let produto2 = new Map<number,string>([
//     [1,"Cebola"],
//     [2,"Tomate"],
//     [3,"Cenoura"],
//     [4, "Alho"]
// ]);



// // produto2.clear()  //apaga todos os elementos do objeto Map
// produto2.delete(1) //apaga apenas um elemento do objeto Map
// console.log(produto2)


let animesEpisodes = new Map<string,number>([
    ["FullMetal", 64], ["Yu Yu Hakusho", 112],["DBZ",300]
])
// for(let key of animesEpisodes.keys()){
//     console.log(key)
// }


// for(let value of animesEpisodes.values()){
//     console.log(value)
// }

for(let entry of animesEpisodes.entries()){ //Entries() itera no formato de array.
    console.log(` Anime: ${entry[0]} Episódios: ${entry[1]}`)
}