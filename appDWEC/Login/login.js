
var listaPersonas = [];


function inicioSesion(){
    const formulario = document.getElementById("formulario");
    formulario.addEventListener(('submit'),function(event){

    event.preventDefault();
        
    var usuarios = document.getElementById("usuario").value;
    var contraseñas = document.getElementById("contraseña").value;

    var bordeusuario = document.getElementById("usuario");
    var bordecontraseña = document.getElementById("contraseña");

    const usuarioEncontrado = listaPersonas.some((usuario) => usuario.nombre === usuarios && usuario.contraseña === contraseñas);

    if(usuarioEncontrado){
        window.location.href = "aterrizaje.html";
    }else{
        alert("Usuario y/o clave erronea");
        bordeusuario.style.border = "3px solid red";
        bordecontraseña.style.border = "3px solid red";
        console.log("este si carga");
    }

})
}
    function recuperarContraseña(){
        window.location.href = "olvidocontraseña.html";
    }
    function formularioRegistro(){
        window.location.href = "registro.html";
    }
    function cargarUsuarios(){
        $.getJSON('jsonExample/ObjetosInicializados.json',function(datos){
    listaPersonas = datos;
    console.log(listaPersonas);
});
}
onload = function() {
cargarUsuarios();
}


/*
function mostrarPersonas(lista){
var divCentral = document.getElementById("linkRegistrarse");
        divCentral.innerHTML = "<h1>PERSONAS</h1><table><tbody></tbody></table>";
        var tbody = divCentral.getElementsByTagName("tbody")[0];
        lista.forEach((persona) => {
            tbody.innerHTML += `<tr>
                          <td>${persona.nombre}</td>
                          <td>${persona.contraseña}</td>
                        </tr>`;
    });
}*/


    