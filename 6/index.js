class Carro {
    getAcelerar = () => {
        console.log("acelerei");
    }

    constructor(cor, modelo, ano) {
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano;
    }
}

let uno = new Carro("azul", "fiat", 2010);
let celta = new Carro("preta", "chevrolet", 2021);
let fiesta = new Carro("vermelho", "ford", 2015);

uno.getAcelerar();