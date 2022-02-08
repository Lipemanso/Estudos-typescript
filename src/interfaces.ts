interface Game{
    title:string;
    description:string;
    genre:string;
    getSimilars?: (title:string) => void;
}

const tlou:Game = {
    title: "The last of us",
    description: "The best game in the world",
    genre: "Action",
    getSimilars:(title:string) =>{
        console.log(`Similar games ${title}: Uncharted,A plague tale, Metro.`)
    }
}


if(tlou.getSimilars){
    tlou.getSimilars(tlou.title)
}


//Modificadores
// readonly => o atributo não poderá ser modificado, sendo apenas para leitura.
// ? => transforma o atributo em opcional, não sendo obrigado ser passado nenhum valor para ele durante a invocação.


interface DLC extends Game{
    originalGame: Game;
    newContent: string[];
   
}

const leftBehind: DLC = {
    title: "The last of us - left behind",
    description:"You play as Ellie before the original game",
    genre: "Action",
    originalGame:tlou,
    newContent: ["3 hours story", "new Characters"]
}


//implementando uma classe com interfaces

class CreateGame implements Game {
    title: string;
    description:string;
    genre:string;

    constructor(t:string,d:string,g:string){
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}

let jogo = new CreateGame("Super Mario","The best oldschool game!","Aventura")

console.log(jogo)


interface Pessoa{
    id: number;
    name:string;
    age:number;
    profession:string;
}

const usuario: Pessoa = {
    id: 222,
    name: "Thiago",
    age:22,
    profession:"Operator"
}

console.log(usuario)


class Funcionario implements Pessoa {
    id: number;
    name: string;
    age: number;
    profession: string;
    constructor(id: number, name: string, age: number, profession: string){
        this.id = id,
        this.name = name,
        this.age = age,
        this.profession = profession
    }

    trabalhar(){
        console.log(`O functionario ${this.name} está pintando uma parede`);
    }

    batendoPonto(){
        console.log(`O funcionário ${this.name} id: ${this.id} acabou de entrar na empresa.`)
    }
}


let operario1 = new Funcionario(254,"Fernando Silva", 34, "Operario")

operario1.trabalhar()
operario1.batendoPonto()