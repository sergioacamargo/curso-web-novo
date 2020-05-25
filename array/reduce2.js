const alunos = [
    {nome: 'João', nota: 7.3, boslsista: false},
    {nome: 'Maria ', nota: 9.2, boslsista: true},
    {nome: 'Pedro', nota: 9.8, boslsista: true},
    {nome: 'Ana', nota: 8.7, boslsista: true}
]

//Desafio 1: Todos os alunis são bolsista?


const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.boslsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.boslsista).reduce(algumBolsista))
