import { Carrinho } from "./tiposDados";

const p = new Carrinho("Feijão", 456, 10.55);
console.log(p.gerarCodigoProduto());