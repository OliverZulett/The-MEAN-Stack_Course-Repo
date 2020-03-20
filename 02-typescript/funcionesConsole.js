var dato1 = 'soy un mensaje';
var dato2 = 'soy un error';
var dato3 = 'soy una advertencia';
console.log(dato1);
console.error(dato2);
console.warn(dato2);
console.clear();
console.time('tiempoDeForOf');
var arrayParaIterar = [10, 20, 30];
for (var _i = 0, arrayParaIterar_1 = arrayParaIterar; _i < arrayParaIterar_1.length; _i++) {
    var valor = arrayParaIterar_1[_i];
    console.log(valor);
}
console.timeEnd('tiempoDeForOf');
console.table({ 'a': 23, 'b': 13 });
for (var index = 0; index < 7; index++) {
    console.count("" + index);
}
console.group('grupo');
console.log(dato1);
console.error(dato2);
console.warn(dato2);
console.groupEnd();
