{
    let x=1;
    const y=2;
    var z=3;

    console.log("DENTRO DE UN BLOQUE");
    console.log("El valor de x con let es: " + x);
    console.log("El valor de x con const es: " + y);
    console.log("El valor de x con var es: " + z);
}

let x=4;
const y=5;

console.log("FUERA DEL BLOQUE");
console.log("El valor de x con let es: " + x);
console.log("El valor de x con const es: " + y);
console.log("El valor de x con var es: " + z);