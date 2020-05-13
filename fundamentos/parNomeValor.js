// par nome/valor
const saudacao = 'Opa'  //  contexto léxico 1

function exec(){

    const saudacao = 'Falaaa'  //  contexto léxico 2
    return saudacao
}

// Obejetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso:  90,
    endereco: {
        logradouro: 'Rua James Watt ',
        numero: 123,
        quadra: 18,
        lote: 13

    } 
}
console.log(saudacao)
console.log(exec())
console.log(cliente)