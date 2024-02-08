class Produto{
    constructor(nome, qtdDisponivel, precoUnitario){
        this.nome = nome;
        this.qtdDisponivel = qtdDisponivel;
        this.precoUnitario = precoUnitario;
    }

    calcularValorTotal(){
        return this.qtdDisponivel * this.precoUnitario;
        

    }
}

class ProdutoPerecivel extends Produto{
    constructor(estoque){
        super(nome,qtdDisponivel,precoUnitario)
    }

    verificarValidade(){
        if(ProdutoPerecivel)
    }
}

class Estoque