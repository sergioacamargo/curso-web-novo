let valor //não inicializada
console.log(valor)

valor = null

console.log(valor) //ausência de valor
//console.log(valor.toString()) erro
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined //evite declara undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)