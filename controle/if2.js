function teste1(num){
    if(num > 7)
    console.log(num)
    console.log('Final')
}
//teste1(6)
//teste1(8)

function teste2(num){
    if(num > 7)
        ;     //qualquer tipo de sentença que estiver no bloco if será executada 
              // cuidado com o ;   
        
        {
            console.log(num)
        }
}
teste2(6)
teste2(8)