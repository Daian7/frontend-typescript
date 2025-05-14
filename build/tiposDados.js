"use strict";
//Tipos primitivos: Boolean, number, string
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = void 0;
let ligado = false;
let nome = "Daian";
let idade = 30;
//Tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//Tipos abrangentes: void, any
let retorno;
let retornoGenerico = false;
function executaSemRetorno() { }
function retornoInesperado() { }
let meuProduto = {
    nome: "Tenis",
    preco: 10.25
};
// Arrays, Vetor
let dados = ["daian", "mauro", "almeida"];
let dados2 = ["daian", "mauro", "almeida"];
let infos = ["daian", 25, 19, "Carol"];
// Tuplas - Array com mais de um tipo, porém exige a ordem definida.
let boleto = ["conta de agua", 199.99, 123456];
// Arrays Métodos
dados.push("mauro");
dados.length;
dados.pop();
//Datas
let aniversario = new Date("2025-05-13 18:53");
//Funções
function addNumber(x, y) {
    return x + y;
}
// Função com dois atributos de entrada
function CalltoPhrone(phone) {
    return phone;
}
// Funções assyncronas - com dois atributos de entrada e saida
function CalltoPhroneAsync(phone) {
    return __awaiter(this, void 0, void 0, function* () {
        return phone;
    });
}
const produto = {
    nome: "Vassoura",
    cod: 123,
    preco: 12.20,
    gerarCodigoProduto: function () {
        throw new Error("Function not implemented.");
    }
};
class Carrinho {
    constructor(nome, cod, preco) {
        this.nome = nome;
        this.cod = cod;
        this.preco = preco;
    }
    gerarCodigoProduto() {
        return `COD ${this.cod}`;
    }
}
exports.Carrinho = Carrinho;
