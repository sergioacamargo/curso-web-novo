const imprimirResultado = function (nota){
    if(nota >= 7){
        console.log('Aprovador')
    } else{
        console.log('Reprovado')
    }
}
imprimirResultado(9.9)
imprimirResultado(6)
imprimirResultado('Opa') //cuidado !!!
