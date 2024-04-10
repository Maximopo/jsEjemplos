function ejercicio8(){
    
    function palindromo(cadena) {
        
        cadena = cadena.toLowerCase().replace(/ /g, '');
    
        
        return cadena === cadena.split('').reverse().join('');
    }
    
    
    var texto = "La ruta nos aporto otro paso natural";
    if (palindromo(texto)) {
        console.log("La cadena es un palíndromo.");
    } else {
        console.log("La cadena no es un palíndromo.");
    }
}