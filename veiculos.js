

class Veiculo {
    constructor(marca, modelo){
        this.marca= marca
        this.modelo= modelo
    }
    info (){
        console.log(`Este carro é um ${this.modelo} da ${this.marca}`)
    }
}

class Carro extends Veiculo{
    constructor(marca,modelo,portas){
        super(marca,modelo)
        this.portas= portas
    }
    info(){
        console.log(`Este carro é um ${this.modelo} da ${this.marca} e possui ${this.portas} portas`)
    }
}


const veiculo2= new Carro('fiat','palio',2)
veiculo2.info()