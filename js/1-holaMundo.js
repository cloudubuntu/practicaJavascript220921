//esto es un comentario

/*comentario de varias lineas*/

//mensaje en la consola
console.log ("Hola Mundo");
console.log ("esto es otro mensaje");

//mostrar un msj en el documento html
document.write("hola mundo documento");

//mostrar un msj en una ventana emergente
//alert("esto es una alerta");


// declaracion de variables (var, let, const)

var name="alan";

let surnanme="chibilisco";

let dni="33703015";

function imprimeConsola(){
    return console.log(name+" "+ surnanme + " dni n° "+ dni);
}


document.write("<br>Datos:"+name+" "+surnanme+" dni n° "+dni);

let alumno="Rodrigo";

document.write("<br>Nombre:"+alumno);

alumno="Mata";
let edad=33;

document.write("<br>Nombre:"+alumno);

//pedir a un usuario que ingrese un nombre de un alumno y almacenarlo en la variable correspondiente

alumno = prompt("Ingrese el nombre del alumno/a");//sirve para crear un input
edad = prompt("Ingrese la edad del alumno/a");//sirve para crear un input

document.write("<br>Nombre:"+alumno);
document.write("<br>Edad:"+edad);

const url="https://campus.rollingcodeschool.com/mod/forum/view.php?id=10310";

document.write("<br>url:"+url);

//url="prueba";

document.write("<br>uel:"+url);

let numero1=20;
let numero2=parseInt(prompt("ingrese un numero"));


document.write("<br>Resultado:"+(numero1+numero2 ));
