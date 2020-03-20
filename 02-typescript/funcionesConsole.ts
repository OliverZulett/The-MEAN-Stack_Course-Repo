let dato1: string  = 'soy un mensaje'
let dato2: string  = 'soy un error'
let dato3: string  = 'soy una advertencia'

console.log( dato1 );
console.error( dato2 );
console.warn( dato3 );
console.clear();
console.log( dato1 );
console.error( dato2 );
console.warn( dato3 );

console.time('tiempoDeForOf');
let arrayParaIterar: Array<number> = [10, 20, 30];
for (const valor of arrayParaIterar) {
    console.log(valor);
}
console.timeEnd('tiempoDeForOf');

console.table(arrayParaIterar);

let suma:number = 0;

for (let index = 0; index < 7; index++) {
    suma ++;
    console.count(`${suma}`);
}

console.group('grupo');
console.log( dato1 );
console.error( dato2 );
console.warn( dato2 );
console.groupEnd();