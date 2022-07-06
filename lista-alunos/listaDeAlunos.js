let listaDeAlunos = ["Jorge", "Ana","Bruno","Clodoalda","Dionísário","Elenilda"]

//Contagem e classificação par, ímpar com (for).
console.log("Contagem e classificação par, ímpar com (for), usando o concatenador de strings (+).");
for (let contador = 0; contador < listaDeAlunos.length; contador++) {
    if (contador ==0) {
        console.log("Aluno(a) " + listaDeAlunos[contador] + " está na posição [" + contador + "] da lista, índice par.");
    } else if (contador % 2 == 0) {
        console.log("Aluno(a) " + listaDeAlunos[contador] + " está na posição [" + contador + "] da lista, índice par.");
    } else {
        console.log("Aluno(a) " + listaDeAlunos[contador] + " está na posição [" + contador + "] da lista, índice ímpar.");
    }
}

//Contagem e classificação par, ímpar com (while).
console.log("Contagem e classificação par, ímpar com (while), usando o concatenador template string (` ${} `) .");
let contador = 0;
while (contador < listaDeAlunos.length) {
    if (contador ==0) {
        console.log(`Aluno(a) ${listaDeAlunos[contador]} está na posição [${contador}] da lista, índice par.`);
    } else if (contador % 2 == 0) {
        console.log(`Aluno(a) ${listaDeAlunos[contador]} está na posição [${contador}] da lista, índice par.`);
    } else {
        console.log(`Aluno(a) ${listaDeAlunos[contador]} está na posição [${contador}] da lista, índice ímpar.`);
    }
    contador++;
}

//Listagem com (forof).
console.log("Listagem com (forof), usando o concatenador de strings (+).");
for (const nome of listaDeAlunos) {
    console.log("O nome é: " + nome + " na lista de alunos.");
}

console.log("Listagem com (forof), usando o concatenador template string (` ${} `) .");
for (const nome of listaDeAlunos) {
    console.log(`O nome é: ${nome} na lista de alunos.`);
}