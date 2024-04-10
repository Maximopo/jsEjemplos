function ejercicio8(){

    let texto = prompt("Ingrese una cadena de texto");
    let resul = palindromo(texto);

    console.log(resul);

}

function palindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    return cadena === cadena.split('').reverse().join('');
}

if (palindromo(oracion)) {
    console.log("La cadena es un palíndromo.");
} else {
    console.log("La cadena no es un palíndromo.");
}