"use strict";
class UserAccount {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    logDetail() {
        console.log(`The player ${this.nome} is ${this.idade} years old.`);
    }
    showfavoritesGames() {
        let gameList = ["Super Mario", "Metroid", "Uncharted", "God of war 3"];
        console.log(`Jogos favoritos do ${this.nome}\n`);
        gameList.forEach((jogo, index) => {
            console.log(index + " : " + jogo + "\n");
        });
    }
}
class ProUser extends UserAccount {
    constructor(id, level, nome, idade) {
        super(nome, idade);
        this.id = id;
        this.level = level;
    }
    get getLevel() {
        return this.level;
    }
    set setId(id) {
        this.id = id;
    }
}
let will = new ProUser(1234, 80, "William", 34);
will.logDetail();
will.showfavoritesGames();
console.log(will.getLevel);
will.setId = 4567;
console.log(will.id);
