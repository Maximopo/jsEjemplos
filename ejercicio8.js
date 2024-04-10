function ejercicio8(){
<<<<<<< HEAD
    function esPalindromo(cadena) {
        const cadenaProcesada = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
=======
    
    function palindromo(cadena) {
>>>>>>> 8dbc5b8842e776c63f69e53008a71e062e3b7b16
        
        
        const cadenaInvertida = cadenaProcesada.split('').reverse().join('');
        
        
        return cadenaProcesada === cadenaInvertida;
    }
    
    const texto = prompt("Ingrese una cadena de texto para verificar si es un palíndromo:");
    const resultado = esPalindromo(texto);
    
<<<<<<< HEAD
    if (resultado) {
=======
    var texto = "La ruta nos aporto otro paso natural";
    if (palindromo(texto)) {
>>>>>>> 8dbc5b8842e776c63f69e53008a71e062e3b7b16
        console.log("La cadena es un palíndromo.");
    } else {
        console.log("La cadena no es un palíndromo.");
    }
<<<<<<< HEAD
    
}
=======
}
>>>>>>> 8dbc5b8842e776c63f69e53008a71e062e3b7b16
