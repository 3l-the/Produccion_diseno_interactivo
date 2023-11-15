//Funcion saludo

function saludo(){
    console.log("Bienvenido a la tienda de helados!!");
    console.log("");
}

saludo();

//Funcion precio

function precio(cantidadHelados){
    let precioIndividual = 10;
    console.log("Cada helado cuesta: " + precioIndividual + " pesos");
    var precioTotal = cantidadHelados * precioIndividual;
    console.log("Por " + cantidadHelados + " tendria que pagar: " + precioTotal + " pesos");
    console.log("");
}
var cantidadHelados = 6;
precio(cantidadHelados);

//Funcion descuento

function descuento(precio){
    console.log("Su compra aplica para un descuento!!")
    let precioParaRestar = precio * 0.10;
    precio = precio - precioParaRestar;
    console.log("Se han descontado " + precioParaRestar + " pesos a su orden");
    console.log("El nuevo total es " + precio + " pesos");
}

if (cantidadHelados >= 5){
    descuento(60);
}