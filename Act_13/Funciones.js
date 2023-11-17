//VARIABLES

var numHelados = 6;
var precioInicial, precioFinal;

//FUNCIONES

function saludarCliente(){
    console.log("Bienvenido a la tienda de helados!!");
    console.log("");
}

function personalizarHelado(sabor, cantidadHelados){
    console.log("Preparando una orden de " + cantidadHelados + " helados de " + sabor + "... ");
    console.log("");
}

function calcularPrecio(cantidadHelados){
    let precioIndividual = 10;
    console.log("Cada helado cuesta: " + precioIndividual + " pesos");
    precioInicial = cantidadHelados * precioIndividual;
    console.log("Por " + cantidadHelados + " tendria que pagar: " + precioInicial + " pesos");
    console.log("");
}

function aplicarDescuento(precio){
    let precioParaRestar = precio * 0.10;
    precioTotal = precio - precioParaRestar;
    console.log("Se han descontado " + precioParaRestar + " pesos a su orden");
    console.log("El nuevo total es " + precioTotal + " pesos");
}

function precioFinal(precio){
    console.log("El total de su compra fue: " + precio + "pesos");
    console.log("Que tenga buen dia!");
}


//MAIN

saludarCliente();
calcularPrecio(numHelados);
personalizarHelado("Chocolate", numHelados);
if(numHelados > 5){
    console.log("Su compra aplica para un descuento!!");
    console.log("");
    aplicarDescuento(precioInicial);
    console.log("");
}
precioFinal(precioTotal);
