var listaDePecas = ["Repimboca da parafuseta","Amortecedor", "Motor", "Correia dentada", "Filtro de ar", "Pneu 14"];
let peca = "Farol";
let peso = 100;

console.log(`A peça que está na posição [3] da lista é: ${listaDePecas[3]}.`);
console.log(`Aquantidade de peças na lista é: ${listaDePecas.length}.`);
console.log(`A listagem atual de peças é: [${listaDePecas}]`);

if (listaDePecas.length > 6) {
    console.log("Não é possível cadastrar por excesso de peças.");
} else {
    console.log("Limite permitido!");
    if (peso >= 100) {
        console.log("Peso perrmitido!");
        if (peca.length < 3) {
            console.log("Nome muito pequeno.");
        } else {
            console.log("Nome da peça é válido!");
            listaDePecas.push(peca);
            console.log("A peça (" + peca + ") foi cadastrada na lista de peças com sucesso!");
            console.log("A listagem atual de peças é: [" + listaDePecas + "]");
        }
    } else {
    console.log("O peso está abaixo do normal.");
    }
}