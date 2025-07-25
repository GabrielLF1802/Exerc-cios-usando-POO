class Produto {
    #preco= 0 
    #estoque= 0
    constructor(nome,preco, estoque){
        this.nome= nome
        this.#preco= preco
        this.#estoque= estoque
    }
    get preco(){
        return this.#preco
    }
    set preco(novopreco){
        if(novopreco>0){
            this.#preco= novopreco
            return this.#preco

        }else{
            console.log('Preço inválido')
        }
    }
    get estoque(){
        return this.#estoque
    }
    set estoque(novoestoque){
        if (novoestoque>0){
            this.#estoque= novoestoque
            return console.log(`Estoque atualizado para: ${this.estoque}`)
        }else{
            console.log('Quantidade inválida')
        }
    }
    adicionar(add){
        this.#estoque += add
        console.log(`Novo estoque de: ${this.#estoque}`)
    }
    vender(vdd){
        if(this.#estoque- vdd > 0 ){
            this.#estoque -= vdd
            console.log(`Estoque reduzido para: ${this.#estoque}`)
        }

    }
    aplicardesconto(porcentagem){
        this.#preco= this.#preco- (porcentagem/100)*this.#preco
        return console.log(`${this.#preco}`)
    }

}

const prod= new Produto('colher',25,2)
console.log(prod.preco)
prod.aplicardesconto(10)
prod.preco=60
prod.aplicardesconto(25)
console.log(prod.estoque)
prod.estoque= 10
prod.adicionar(10)
prod.vender(7)

