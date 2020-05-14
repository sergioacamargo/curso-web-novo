function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com nota: ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.7)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade .....   ' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2, 3])
seForVerdadeEuFalo({})