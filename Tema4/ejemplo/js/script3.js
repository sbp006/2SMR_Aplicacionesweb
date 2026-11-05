
var nuevoP = document.createElement("p"); //Creamos una variable para un parrafo llamada Texto
var texto = document.createTextNode("Hola, soy el Alumno Sergio"); //Generamos un texto
nuevoP.appendChild(texto); // Aqui lo que hacemos meter la variable texto debajo del parrafo

var contenido = document.getElementsByClassName("contenedor")[0];
contenido.appendChild(nuevoP);