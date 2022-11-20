
function espolindromo(){
    let cadena = $("#texto").val();
    let array = cadena.split("");
    let invertir = array.reverse();
    document.getElementById("palabra").innerHTML =cadena == invertir.join("")? "Si es polindromo y seria asi  "+ cadena.split('').reverse().join(''): "no es polindromo";
    // alert(cadena.split('').reverse().join(''));
}



// var valor1 = prompt("Ingrese un valor");

// valor1 = espolindromo(valor1)


