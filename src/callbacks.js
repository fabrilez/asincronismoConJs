//ejemplos de callbacks
function saludo(nombre){
    console.log(`Hola ${nombre}`);
}
// setTimeout(saludo, 3000, "Fabrizio");

function procesarEntradaDeUsuario(callback){
    let nombre = prompt('Introduce tu nombre');
    callback(nombre);
}
procesarEntradaDeUsuario(saludo);
//
function sum(num1, num2){
    return num1 + num2
}
function calcular(num1, num2, callback){
    return callback(num1, num2);
}
calcular(2, 5, sum);
//
function conEspacios(palabra) {
    return `      ${palabra}`;
}
function sinEspacios(palabra, callback){
    let oracion = palabra;
    let oracionConEspacio = callback(oracion);
    return oracionConEspacio.trimStart();
    
}
sinEspacios("Fabrizio Lezcano", conEspacios);
//
setTimeout( () => {
    console.log('Hola mundo')
}, 2000);
