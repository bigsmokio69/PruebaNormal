var arreglo=[]; //arreglo para posteriormente usarlo para sumar el total de los litros de agua


function ducha() {
    const litrosXmin=10;
    let minutos=parseFloat(document.getElementById("pregunta1").value);
    let total1=(litrosXmin*minutos);
    console.log(`Litros gastados en la ducha: ${total1}`);
    return arreglo.push(total1)
}//fin de la funcion para las duchas

function CicloDeLavado() {
    const litrosLavadora=55;
    let veces=parseInt(document.getElementById("pregunta2").value);
    let total2=(litrosLavadora*veces);
    console.log(`Litros gastados lavando ropa: ${total2}`);
    return arreglo.push(total2)
}//fin de la funcion para el ciclo de lavado
function DescargaSanitario() {
    const litrosSanitario=8;
    let veces=parseInt(document.getElementById("pregunta3").value);
    let total3=litrosSanitario*veces;
    console.log(`Litros gastados en el sanitario: ${total3}`);
    arreglo.push(total3);

    /*var sumaTotal = arreglo.reduce(function(total, elemento) {
        return total + elemento;
    }, 0);
    
    console.log("La suma total es: " + sumaTotal); */

}//fin de la funcion para el sanitario El codigo comentado es para la suma total de los litros de agua con el metodo reduce

