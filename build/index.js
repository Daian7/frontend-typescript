"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tiposDados_1 = require("./tiposDados");
const p = new tiposDados_1.Carrinho("Feijão", 456, 10.55);
console.log(p.gerarCodigoProduto());
