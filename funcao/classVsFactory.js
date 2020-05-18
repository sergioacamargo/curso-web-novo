class Pessoa {                                // classe Pessoa 
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João') //Estanciamento da classe Pessoa
p1.falar()

const criarPessoa = nome => {    //função Factory
    return {
        falar: () => console.log(`Meu nome é ${nome}`) // metodo falar

    }
}
const p2 = criarPessoa('João')
p2.falar()
