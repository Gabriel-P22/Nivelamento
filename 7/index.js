class Carro {

    constructor(cor, modelo, ano, velocidade = 0) {
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;

        if(cor === "vermelho") {
            return this.velocidade = 10;
        }

        if(ano === 1990) {
            return this.velocidade = 0;
        }
    }

    getAcelerar = () => {
        this.velocidade++;
        console.log("acelerei");
        console.log(this.velocidade);
    }
}

let uno = new Carro("azul", "fiat", 2010, 2);
let celta = new Carro("preta", "chevrolet", 2021, 2);
let fiesta = new Carro("vermelho", "ford", 2015);
let unoComEscada = new Carro("preto", "ford", 1970);

console.log(unoComEscada.velocidade);