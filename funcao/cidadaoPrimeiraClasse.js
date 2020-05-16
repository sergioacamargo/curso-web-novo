// Função em JS é First Class Object
// Higher - order Funcition 

//criar de forma literal
function fun1() { }

//Armazenar uma função em variáveis 
const fun2 = function() { }

//Armazenar em um array
const array = [function(a, b) {return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em atributos de Object 
const obj = {}
    obj.falar = function() {return 'Opa!'}
    console.log(obj.falar())

//Como passar uma função como parametro 

function run(fun){
    fun()
}
run(function(){ console.log('Executando ....')})

//Uma função pode retornar/conter um função 
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }

}
soma(2, 3)(4)
const cincoMais =soma   
cincoMais(4)





