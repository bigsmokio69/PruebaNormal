var arreglo=[];


function ducha() {
    const litrosXmin=10;
    let minutos=parseFloat(document.getElementById("pregunta1").value);
    let total1=(litrosXmin*minutos);
    console.log(`Litros gastados en la ducha: ${total1}`);
    return arreglo.push(total1)
}
function CicloDeLavado() {
    const litrosLavadora=55;
    let veces=parseInt(document.getElementById("pregunta2").value);
    let total2=(litrosLavadora*veces);
    console.log(`Litros gastados lavando ropa: ${total2}`);
    return arreglo.push(total2)
}
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
}

