/*até aqui ok*/
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
    constructor(nome,qtdDisponivel,precoUnitario,dataValidade){
        super(nome,qtdDisponivel,precoUnitario);
        this.dataValidade = dataValidade;
    }
/* date peguei no google para teste*/
    verificarValidade(){
        let data = '20/03/2023'.split("/").reverse();
        data[1]--;
        let dataValidade = new Date(...data);
        let data_atual = new Date();

        if(ProdutoPerecivel > this.dataValidade ){
            document.write('Expirado');
          } else {
            document.write('Válido');
          }
    }
}


/*Classe Estoque:
Descrição: Representa o estoque de produtos, contendo funcionalidades para adicionar, remover, verificar disponibilidade e calcular o valor total do estoque.
Métodos:*/
class Estoque{
    constructor(){
        this.produtos = [];
    }
}

/*Constructor: Inicializa o estoque com uma lista vazia de produtos.
adicionarProduto(produto): Adiciona um produto à lista de produtos no estoque.
removerProduto(nome): Remove um produto da lista pelo nome.
verificarEstoqueDisponivel(nome): Verifica e exibe a quantidade disponível de um produto pelo nome.
calcularValorTotalEstoque(): Calcula e exibe o valor total do estoque somando o valor total de cada produto.
*/