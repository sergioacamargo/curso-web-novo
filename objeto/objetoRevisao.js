// coleção dinâmica de pares cahve/valor
const produto = new Object
produto.nome = 'notebook'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'Audi',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 44,
        endereco: {
            logradouro: 'Rua 10',
            numero: 123

        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }, { calculaValorSeguro: function(){}}]
    
}
carro.proprietario.endereco.numero = 1000
console.log(carro)
//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro
console.log(carro.condutores.length)
