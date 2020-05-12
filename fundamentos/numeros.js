const peso1 =1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log (media.toFixed(2)) //convertendo para 2 casa decimais 
console.log(media.toString())  // convertendo para número string
console.log(media.toString(2)) // convertendo para binário 
console.log(typeof media)      // tipo de variável 
console.log(typeof Number)     // Number é uma função 
console.log(total)

/*
o tipo de dado tem funções que podem ser envocadas a partir o operador ponto(.)
*/


