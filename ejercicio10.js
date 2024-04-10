function ejercicio10(){
    
    let numeros = prompt("Ingrese una cadena de texto");
    let resul = MayusMinus(text);

    console.log(resul);
}
function simularLanzamiento() {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    
    
    let suma = dado1 + dado2;
    return suma;
}

function contarApariciones() {
    let resultados = Array(11).fill(0);

    
    for (let i = 0; i < 36000; i++) {
        let suma = simularLanzamiento();
        resultados[suma - 2]++; 
    }

    return resultados;
}

let resultados = contarApariciones();

console.log("Número de apariciones de cada suma de los dados:");
for (let i = 0; i < resultados.length; i++) {
    console.log(`Suma ${i + 2}: ${resultados[i]} apariciones`);
}