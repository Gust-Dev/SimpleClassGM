//criando a classe heroi
const psHeroi = ["Mago", "Guerreiro", "Monge", "Ninja"];
const psArmas = ["Magia", "Espada", "Artes Marciais", "Shuriken"];

class Heroi{

    constructor(letNome,letIdade,letTipo){

        this.nome  = letNome;
        this.idade = letIdade;
        this.tipo  = letTipo;

    }

    atacar(){

        let atk = "";

        if (this.tipo == psHeroi[0]) {
            atk = psArmas[0]
            console.log(`O ${this.tipo} ${this.nome} atacou usando ${atk}`)
        } else if (this.tipo == psHeroi[1]){
            atk = psArmas[1]
            console.log(`O ${this.tipo} ${this.nome} atacou usando ${atk}`)
        } else if (this.tipo == psHeroi[2]){
            atk = psArmas[2]
            console.log(`O ${this.tipo} ${this.nome}  atacou usando ${atk}`)
        }else if  (this.tipo == psHeroi[3]){
            atk = psArmas[3]
            console.log(`O ${this.tipo} ${this.nome}  atacou usando ${atk}`)
        }else {
            console.log(`O Heroi ${this.Nome}: ${this.nome}  fugiu`)
        }
    }
}

const personagem1 = new Heroi ("Apolo", 24, "Mago");

personagem1.atacar()

