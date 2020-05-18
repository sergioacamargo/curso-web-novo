console.log(soma(3, 4)) //pode ser executada antes da declaração da função
console.log(sbu(3, 4)) //pode ser executada antes da declaração da função

// function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sbu = function(x, y) {
    return x, y
    
}

// named function expression 
const mult = function mult(x, y) {
    return x * y
}