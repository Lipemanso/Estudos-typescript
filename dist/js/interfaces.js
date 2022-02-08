"use strict";
const tlou = {
    title: "The last of us",
    description: "The best game in the world",
    genre: "Action",
    getSimilars: (title) => {
        console.log(`Similar games ${title}: Uncharted,A plague tale, Metro.`);
    }
};
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftBehind = {
    title: "The last of us - left behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    originalGame: tlou,
    newContent: ["3 hours story", "new Characters"]
};
//implementando uma classe com interfaces
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
let jogo = new CreateGame("Super Mario", "The best oldschool game!", "Aventura");
console.log(jogo);
const usuario = {
    id: 222,
    name: "Thiago",
    age: 22,
    profession: "Operator"
};
console.log(usuario);
class Funcionario {
    constructor(id, name, age, profession) {
        this.id = id,
            this.name = name,
            this.age = age,
            this.profession = profession;
    }
    trabalhar() {
        console.log(`O functionario ${this.name} está pintando uma parede`);
    }
    batendoPonto() {
        console.log(`O funcionário ${this.name} id: ${this.id} acabou de entrar na empresa.`);
    }
}
let operario1 = new Funcionario(254, "Fernando Silva", 34, "Operario");
operario1.trabalhar();
operario1.batendoPonto();
