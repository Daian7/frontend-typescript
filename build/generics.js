"use strict";
/*
    Generics - Torna as inforamações mais genericas, deixando as entradas e/ou saidas mais dinamicas

    o <T> representa isso, permitindo que vc utilize a função tipando o parametro de entrada na hora da execução.
*/
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [6]);
const stgArray = concatArray(["Daian", "Mauro"], ["Almeida"]);
const anyArray = concatArray(["Daian", "Mauro"], ["Almeida"]);
numArray.push([10]); //só posso passar Array de inteiros
stgArray.push(["Brilhante"]); // Só posso passar Array de String
anyArray.push(["Brilhante"]); // Caso eu não defina o tipo de objeto, ele vai definir baseado no padrão, no caso apenas String
console.log(numArray);
console.log(stgArray);
