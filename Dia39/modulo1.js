import { etiquetaMiMenu } from "./mi-menu.js";
import { etiquetaMiLateral } from "./mi-lateral.js";

setTimeout(cambiarColor,3000);

function cambiarColor(){
    console.log(document.getElementsByTagName("mi-menu")[0]);
    document.getElementsByTagName("mi-menu")[0].setAttribute("colorFondo","red");
}