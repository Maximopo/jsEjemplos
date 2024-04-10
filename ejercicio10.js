function ejercicio10(){
    
    let text = prompt("Ingrese una cadena de texto");
    let resul = MayusMinus(text);

    console.log(resul);
}

function MayusMinus(cadena) {

    if (cadena == Mayusculas) { 
        return "Esta cadena de textos esta formada por mayusculas"
    }
    else if (cadena == minusculas ) {
        return "Esta cadena de textos esta formada por minusculas"
    }
     else {
        return "Esta cadena de textos esta formada por minusculas y Mayusculas"
    }
 }