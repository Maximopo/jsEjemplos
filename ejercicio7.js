function ejercicio7(text){
    var  Mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'];
    var Minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];
    
    let cadena = [Mayusculas || Minusculas];

    let text = prompt("Ingrese una cadena de texto");
    let result = cadena(text);

    console.log(result);

    if (cadena == Mayusculas) { 
        cadena = prompt ("Esta cadena de textos esta formada por mayusculas");
    }
    else if (cadena == Minusculas ) {
        cadena = prompt ("Esta cadena de textos esta formada por minusculas")
    }
     else {
        cadena = prompt ("Esta cadena de textos esta formada por minusculas y Mayusculas");
    }
 }