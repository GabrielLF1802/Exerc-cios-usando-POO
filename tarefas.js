class Tarefa{
    constructor(nome,descricao,prioridade){
        this.nome= nome;
        this.descricao= descricao;
        this.prioridade=prioridade;
        this.concluida= false;
    }

    concluir(){
        this.concluida= true;
    }

    ExibirResumo(){
        console.log(`nome:${this.nome}, descrição:${this.descricao}, prioridade:${this.prioridade}`)
    }
}

class Gerenciar {
    constructor(){
        this.tarefas = []
    }
    adicionar(tarefa){
        this.tarefas.push(tarefa)
    }
    todas(){
        return this.tarefas.map(t=>t.ExibirResumo())
    }
    feitas(){
        return this.tarefas.filter(t=>t.concluida).map(t=>t.ExibirResumo())
    }
    filtrarprioridade(nivel){
        return this.tarefas.filter(t=>t.prioridade == nivel).map(t=>t.ExibirResumo())
    }
}

const tarefa1 = new Tarefa('Dever','Fazer tarefa','ALTA')
tarefa1.ExibirResumo()
tarefa1.concluir()
const geren = new Gerenciar()
geren.adicionar(tarefa1)
geren.todas()
geren.filtrarprioridade('ALTA')
geren.feitas()
