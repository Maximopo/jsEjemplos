function ejercicio8(){
    function esPalindromo(cadena) {
        // Convertir la cadena a minúsculas y eliminar los espacios en blanco
        cadena = cadena.toLowerCase().replace(/\s/g, '');
        
        // Comparar la cadena original con su reverso
        return cadena === cadena.split('').reverse().join('');
    }
    
    // Ejemplo de uso:
    let texto = prompt("Ingresa una cadena de texto para verificar si es un palíndromo:");
    if (esPalindromo(texto)) {
        console.log("La cadena es un palíndromo.");
    } else {
        console.log("La cadena no es un palíndromo.");
    }
}
