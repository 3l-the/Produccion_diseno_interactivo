let libro1 = {
    titulo: "Dune",
    autor: "Frank Herbert",
    anio: 1965,
    genero: "Ciencia ficcion"
}

let libro2 = {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    anio: 2007,
    genero: "Fantasia epica"
}

let libro3 = {
    titulo: "Maze Runner",
    autor: "James Dashner",
    anio: 2009,
    genero: "Ciencia Ficcion",
    resumen: function(){
        console.log("Libro: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Publicado en: " + this.anio);
        console.log("Genero: " + this.genero);
        console.log("");
    }
}

let libro4 = {
    titulo: "Ready Player One",
    autor: "Ernest Cline",
    anio: 2011,
    genero: "Ciencia ficcion"
}

let biblioteca = [libro1, libro2, libro3, libro4];

console.log("   LISTADO DE LIBROS");

biblioteca.forEach(libro => {
    console.log(libro);
});
console.log("");

console.log("   LIBROS DE PATRICK ROTHFUSS");
console.log("");

let librosFB = biblioteca.filter(libro => libro.autor == "Patrick Rothfuss");
console.log(librosFB);
console.log("");

console.log("   LIBRO MAS ANTIGUO");
console.log("");

let libroMasAntiguo = biblioteca.filter(libro => libro.anio == 1965);
console.log(libroMasAntiguo);
console.log("");

console.log("   RESUMEN DE UN LIBRO");
console.log("");

libro3.resumen();
console.log("");

console.log("   OBJECT.KEYS Y OBJECT.VALUES");
console.log("");

function objectKeys_objectValues(libro){
    console.log("Los campos de cada registro de un libro son los siguientes: " + Object.keys(libro));
    console.log("");
    console.log("Un ejemplo de como se llenan estos campos es: " + Object.values(libro));
}

objectKeys_objectValues(libro4);
console.log("");
