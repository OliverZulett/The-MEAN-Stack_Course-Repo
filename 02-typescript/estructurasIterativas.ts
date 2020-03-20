let arrayParaIterar: Array<number> = [10, 20, 30];
for (const valor of arrayParaIterar) {
    console.log(valor);
}

for (const indice in arrayParaIterar) {
    console.log(indice);
}

arrayParaIterar.forEach((valor, indice) => {
    console.log(valor);
    console.log(indice);
});