import { pedirUsuarios } from "./funcionesModulo.js";
import { usuarios } from "./componenteUsuarios.js";
var erroresUsuarios = [];
async function comprobarUsuario(){
    var cajaNombre = login.getElementsByTagName("input")[0];
    var cajaClave = login.getElementsByTagName("input")[1];
    
    let formData = new FormData();
    formData.append("usuario",cajaNombre.value);
    formData.append("clave",cajaClave.value);

    let response = await fetch("validar.php",{
        method:"POST",
        headers:{},
        body:formData
    })
    let data = await response.json();
    console.log(data);
    if(data.estado == "OK"){
        let usuarioCorrecto = {
            nombre:cajaNombre.value,
            perfil:data.perfil
        }

        localStorage.setItem("usuario",JSON.stringify(usuarioCorrecto));
        window.location.href = "consultaSO.html";
    }else{
        let pos = erroresUsuarios.findIndex((usuario)=>usuario.nombre == cajaNombre.value);
        if(pos != -1){
            erroresUsuarios[pos].intentos++;
            if(erroresUsuarios[pos].intentos == 3){
                let modulos = [...document.getElementsByTagName("ies-usuario")];
                let pos = modulos.findIndex((usuario)=>usuario.attributes.parrafo.value
                 == cajaNombre.value);
                if(pos!=-1){
                    modulos[pos].remove();
                }
            }
        }else{
            let usuarioIncorrecto = {
                nombre:cajaNombre.value,
                intentos:1
            }
            erroresUsuarios.push(usuarioIncorrecto);
            console.log(erroresUsuarios);
        }
        
    }
}
onload = ()=>{
    let botonConsultar = document.getElementById("central").getElementsByTagName("button")[0];
    botonConsultar.addEventListener("click",pedirUsuarios);
    let botonValidar = document.getElementById("login").getElementsByTagName("button")[0];
    botonValidar.addEventListener("click",comprobarUsuario);
}