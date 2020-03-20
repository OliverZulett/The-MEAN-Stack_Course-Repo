var multiplos = 1;
var total = 0;
console.time('ejecucion');
while (multiplos < 1000) {
    if (multiplos % 3 == 0 || multiplos % 5 == 0) {
        total += multiplos;
    }
    multiplos++;
}
console.log(total);
console.timeEnd('ejecucion');
