function funcionSinRetorno():void {
    console.log('soy una funcion sin retorno');
}

funcionSinRetorno();

function funcionConRetorno():number {
    const a:number = 10;
    const b:number = 30;
    return a*b;
}

let variableDeRetorno = funcionConRetorno();
console.log(variableDeRetorno);


function funcionConParametroObligatorios( numeroA:number, numeroB:number ):number {
    return numeroA*numeroB;
}

variableDeRetorno = funcionConParametroObligatorios( 50, 100 );
console.log(variableDeRetorno);

function funcionConParametroOpcionales( numeroA?:number ):number {
    if (numeroA) {
        return numeroA;
    }
    return 0;
}

variableDeRetorno = funcionConParametroOpcionales();
console.log(variableDeRetorno);

variableDeRetorno = funcionConParametroOpcionales(20);
console.log(variableDeRetorno);

function funcionConParametroPorDefecto( anio:number = 2020 ):number {
    return anio;
}

variableDeRetorno = funcionConParametroPorDefecto();
console.log(variableDeRetorno);

variableDeRetorno = funcionConParametroPorDefecto(2021);
console.log(variableDeRetorno);

let variableDeFuncion = function( anio:number = 2020 ):number {
    return anio;
}

console.log(variableDeFuncion());

// let funcionDeFecla = ( nombre:string ):string => `hola soy ${nombre}`;

let funcionDeFecla = ( nombre:string ):string => {
    return `hola soy ${nombre}`;
}

console.log(funcionDeFecla( 'jose' ));



// TArea

// devolver los datos de usuario segun un id e imprimirlo en un mensaje de bienvenida
// entrada id:3434534
// salida hola jose tienes 34 y tu cernet es 234242
// lo suban a un repositorio de github y envien el enlace a la clase
