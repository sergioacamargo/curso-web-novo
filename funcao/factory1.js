const prod1 = {
    nome: 'Ana',
    preco: 45
}

const prod2 = {
    nome: 'Jao',
    preco: 1234
}

//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Souza'
    }
}
console.log(criarPessoa())

