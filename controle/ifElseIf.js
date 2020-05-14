Number.prototype.entra = function(inicio, fim){
    return this >= inicio && this <= fim
}


const imprimirResultado = function(nota){
    if(nota.entra(9, 10)){
        console.log('Quadro e honra!')
    }else if(nota.entra(7, 9.99)){
        console.log('Aprovado!')
    }else if(nota.entra(4, 6.99)){
        console.log('Recuperação!')
    }else if(nota.entra(0, 3.99)){
        console.log('Aluno Reprovado!')
    }else{   //último else é opcional 
        console.log('Nota Invalida')
    }
    console.log('Fim!')
} 
imprimirResultado(9)  