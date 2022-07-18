export const PI = Math.PI;
export let usuario = "Ivan";
// Separar las lineas de declaracion y exportacion por defecto para las variables
const password = "qwerty";
//export password;

export default function saludar(){
    console.log("Hola Modulos +ES6");
}

export class Saludar{
    constructor(){
        console.log("Hola Clases +ES6");
    }
}