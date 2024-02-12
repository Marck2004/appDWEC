import { consultarUsuarios } from "./Usuario.js";
import { usuario } from "./componente.js";
var usuariosRegistrados = [];
var erroresUsuarios = [];
async function validarClicks(){
    let usuario = document.getElementById("login").getElementsByTagName("input")[0].value;
    let clave = document.getElementById("login").getElementsByTagName("input")[1].value;

    let formData = new FormData();
    formData.append("usuario",usuario);
    formData.append("clave",clave);

    let response = await fetch("validar.php",{
        method:"POST",
        headers:{},
        body:formData
    });
    let data = await response.json();
    console.log(data);

    if(data.estado == "OK"){
        let persona ={
            nombre:usuario,
            perfil:data.perfil
        };
        usuariosRegistrados.push(persona);
        localStorage.setItem("usuarios",JSON.stringify(usuariosRegistrados));
        window.location.href = "consultaSO.html";
    }else{
        let error = {
            nombre:usuario,
            intento:1
        };
        
        let pos = erroresUsuarios.findIndex((error)=>error.nombre == usuario);
        if(pos != -1){
            erroresUsuarios[pos].intento++;
            if(erroresUsuarios[pos].intento == 3){
                [...document.getElementsByTagName("ies-usuario")].forEach((component)=>{
                    if(component.attributes.parrafo.value == erroresUsuarios[pos].nombre){
                        component.remove();
                    }
                })
            }
        }else{
            erroresUsuarios.push(error);
        }
        
    }
    console.log(erroresUsuarios);
}
onload = ()=>{
    let botonUsuario = document.getElementById("central").getElementsByTagName("button")[0];
    botonUsuario.addEventListener("click",()=>{
        consultarUsuarios();
    });
    let botonPassword = document.getElementById("login").getElementsByTagName("button")[0];
    botonPassword.addEventListener("click",validarClicks);
}