class Pessoa {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    getDados(){
        console.log(`${this.nome} + ${this.idade}`)
    }
    static fala(){
        console.log('OLá tudo bem???')
    }
}




class Jose extends Pessoa {
    constructor(nome,idade){
        super(nome,idade)
    }
}

const pessoa = new Pessoa ('Gabriel',19)
const jose = new Jose ('Jose',60)
pessoa.getDados()
Pessoa.fala()

jose.getDados()

pessoa.getDados()
