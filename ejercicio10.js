function ejercicio10(){

    function tiroDeDados() {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;
    
    
        let suma = dado1 + dado2;
        return suma;
    }

    function apariciones() {
        let resultados = Array(11).fill(0);

    
        for (let i = 0; i < 36000; i++) {
            let suma = tiroDeDados();
            resultados[suma - 2]++; 
        }

        return resultados;
    }

    let resultados = apariciones();

    console.log("Número de apariciones de cada suma de los dados:");
    for (let i = 0; i < resultados.length; i++) {
    console.log(`Suma ${i + 2}: ${resultados[i]} apariciones`);
}
}