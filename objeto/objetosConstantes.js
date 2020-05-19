//pessoa -> 123
const pessoa = {nome: 'Joao'}
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante.nome)
