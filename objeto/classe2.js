class Avo {
    constructor (sobremone){
        this.sobremone = sobremone
    }
}

class Pai extends Avo {
    constructor(sobremone, profissao = 'Professor'){

    super(sobremone)
        this.profissao = profissao
    }    

}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho()
console.log(filho)
