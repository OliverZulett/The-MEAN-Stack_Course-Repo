let multiplos:number = 1;
let total:number = 0;

console.time('ejecucion');

while (multiplos < 1000) {
    if(multiplos % 3 == 0 || multiplos % 5 == 0) {
        total += multiplos;
    }
    multiplos++;
}

console.log(total);

console.timeEnd('ejecucion');

Tarea:
realizar los primeros tres ejericios de project euler
https://projecteuler.net/archives