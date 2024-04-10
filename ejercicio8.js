function ejercicio8(){
    
    function esPalindromo(cadena) {
        
        cadena = cadena.toLowerCase().replace(/ /g, '');
    
        
        return cadena === cadena.split('').reverse().join('');
    }
    
    
    var texto = "La ruta nos aporto otro paso natural";
    if (esPalindromo(texto)) {
        console.log("La cadena es un palíndromo.");
    } else {
        console.log("La cadena no es un palíndromo.");
    }
}

