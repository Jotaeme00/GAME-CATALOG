class Pedido {
    constructor(id, nome, valor, item) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.item = item;   
    }
}

class Item {    
    constructor(id, nome, quantidade){  
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
    }
}