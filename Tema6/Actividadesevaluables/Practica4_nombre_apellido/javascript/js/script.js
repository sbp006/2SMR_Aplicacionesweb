// =========================================================
//  Práctica 4 — JavaScript
//  Nombre y apellidos: Sergio Blanca Pancorbo
//  Recuerda: cada bloque con un comentario escrito por ti
// =========================================================


// ===== A1. Mi tarjeta (se ejecuta al cargar la página, sin función) =====
    var elem = document.getElementById("saludo"); //Esto busca el elemento con el id "saludo" y lo guarda en el la variable llamada "elem"
    elem.innerHTML = "Hola, me llamo Sergio y estudio 2º SMR";//Aqui cojemos la variable "elem" y lo que hacemos es modificar el texto
    
    document.getElementById("tarjeta").style.backgroundColor = "#98d9f7"//Aqui cambiamos el color de fondo del div con el id tarjeta
    document.getElementById("tarjeta").style.color = "black"; //Aqui cambiamos el color de la letra del div con id tarjeta



// ===== A2. Lista de la compra: function anadir() =====
function anadir() {
    var entrada = document.getElementById("producto").value; //Aqui leemos el texto escrito en la caja llamada "producto"
    var lista = document.getElementById("lista"); //Aqui buscamos la lista y la guardamos en la variable lista
    var nuevoli = document.createElement("li"); //Aqui creamos un nuevo elemento llamado "li" dentro de la variable "nuevoli"
    var texto = document.createTextNode(entrada); //Aqui creamos un texto con el producto
    nuevoli.appendChild(texto); //Aqui metemos el texto dentro del li
    lista.appendChild(nuevoli); //Aqui añadimos el li alfinal de la lista
    document.getElementById("producto").value = ""; //Aqui vaciamos la caja de texto
}


// ===== A3. Modo noche y modo día: function modoNoche() y function modoDia() =====

function modoNoche(){
        document.body.style.backgroundColor = "#060303"//Aqui cambiamos el color de fondo de la pagina a negro
        document.body.style.color= "white"//Aqui cambiamos el color de las letras de la pagina a blanco
        document.getElementById("modo").innerHTML = "Modo noche activado"//Aqui cambiamos el mensaje del parrafo con el id modo
    }

        function modoDia(){
        document.body.style.backgroundColor = "white"//Aqui cambiamos el color de fondo de la pagina a blanco
        document.body.style.color= "#000000"//Aqui cambiamos el color de las letras de la pagina a negro
        document.getElementById("modo").innerHTML = "Modo día activado";//Aqui cambiamos el mensaje del parrafo con el id modo
    }

// ===== A4. Colores de la tarjeta: function colorTarjeta(color) =====

function colorTarjeta() {
    document.getElementById("tarjeta").style.backgroundColor = "green"; //Aqui cambiamos el fondo de la tarjeta a verde
}

function colorTarjetaAzul() {
    document.getElementById("tarjeta").style.backgroundColor = "blue"; //Aqui cambiamos el fondo de la tarjeta a azul
}

function colorTarjetaRoja() {
    document.getElementById("tarjeta").style.backgroundColor = "red"; //Aqui cambiamos el fondo de la tarjeta a rojo
}



// ===== A5. Botón que saluda: 
function saludar() {
    alert("Hola, soy Sergio"); //Aqui mostramos una alerta con el saludo en pantalla
    document.getElementById("botonSaludo").style.backgroundColor = "red"; //Aqui canbiamos el color de fondo del boton
}

