const soma = function(x, y) {
    return x + y        
}

const imprimirResultado = function(a, b, operacao = soma) { //funcao dentro de funcao anonima
    console.log(operacao(a, b))
}
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y){ //funcao dentro de funccao anonima
   return x - y

})
imprimirResultado(3, 4, (x, y) => x * y) //arrow function anonima 

const pessoa = {
    falar: function() {
        console.log('Ola')
    }
}
pessoa.falar()