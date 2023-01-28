const totales = [1,2,3,4]

let suma = 0;
for (let index = 0; index < totales.length; index++) {
    const element = totales[index];
    suma = suma + element
    
}
console.log(suma);
const respuesta = totales.reduce((suma, element) => suma +element, 0)
console.log(respuesta);