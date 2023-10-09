var listaUsuarios = [];
window.addEventListener('load',()=>{

});

function inicioSesion(){
    const formulario = document.getElementById("formulario");
    formulario.addEventListener(('submit'),function(event){

    event.preventDefault();
        
    var usuarios = document.getElementById("usuario").value;
    var contraseñas = document.getElementById("contraseña").value;

    var bordeusuario = document.getElementById("usuario");
    var bordecontraseña = document.getElementById("contraseña");

    if(usuarios==="root" && contraseñas==="1234"){

        window.location.href = "aterrizaje.html";
    }else{
        alert("Usuario y/o clave erronea");
        bordeusuario.style.border = "3px solid red";
        bordecontraseña.style.border = "3px solid red";
    }

})
}
    function recuperarContraseña(){
        window.location.href = "olvidocontraseña.html";
    }
    function formularioRegistro(){
        window.location.href = "registro.html";
    }

    