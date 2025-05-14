//Tipos primitivos: Boolean, number, string

let ligado: boolean = false;
let nome: string = "Daian";
let idade: number = 30;

//Tipos especiais: null, undefined

let nulo: null = null
let indefinido: undefined = undefined;

//Tipos abrangentes: void, any

let retorno: void;
let retornoGenerico: any = false;

function executaSemRetorno(): void{}

function retornoInesperado(): any{}



//Objeto sem tipagem, imprevisivel

type Produto = {
    nome: "Daian",
    idade: 25
}

// Objeto tipado - com previsibilidade

type ProdutoLoja = {
    nome: string;
    preco: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 10.25
};

// Arrays, Vetor

let dados: string[] = ["daian", "mauro", "almeida"];
let dados2: Array<string> = ["daian", "mauro", "almeida"];

let infos: (string | number)[] = ["daian", 25, 19, "Carol"];

// Tuplas - Array com mais de um tipo, porém exige a ordem definida.
let boleto: [string, number, number] = ["conta de agua", 199.99, 123456];

// Arrays Métodos
dados.push("mauro");
dados.length;
dados.pop();

//Datas

let aniversario: Date = new Date("2025-05-13 18:53");

//Funções

function addNumber (x: number, y: number): number {
    return x + y;
}

// Função com dois atributos de entrada
function CalltoPhrone (phone: number | string): number | string {
    return phone;
}

// Funções assyncronas - com dois atributos de entrada e saida
async function CalltoPhroneAsync(phone: number | string): Promise<number | string> {
    return phone;
}

//interfaces - semelhante ao Type, porém mais comum o uso em classes para definir contratos

interface produtoLoja2 {
    nome: string;
    readonly cod: string | number; //readonly, o atributo não pode ser alterado após definido
    preco: number;

    gerarCodigoProduto(): string;
}

const produto: produtoLoja2 = {
    nome: "Vassoura",
    cod: 123,
    preco: 12.20,

    gerarCodigoProduto: function (): string {
        throw new Error("Function not implemented.");
    }
}

export class Carrinho implements produtoLoja2{
    nome: string;
    cod: string | number;
    preco: number;

    constructor(nome: string, cod: string | number, preco: number){
        this.nome = nome;
        this.cod = cod;
        this.preco = preco;
    }
    gerarCodigoProduto(): string {
        return `COD ${this.cod}`;
    }
    
}

