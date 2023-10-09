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

    function formularioRegistro(){
        window.location.href = "registro.html";
    }
    

    function validarRegistroUsuario(){
        var registraremail = document.getElementById('emailRegistro').value.trim();
        var registrartlf = document.getElementById('tlfRegistro').value.trim();
        var registrarUsuario = document.getElementById('usuarioRegistro').value.trim();
        var registrarContraseña = document.getElementById('contraseñaRegistro').value.trim();

        var nuevoUsuario = new Usuario(registraremail,registrartlf,registrarUsuario,registrarContraseña);
        
        if(nuevoUsuario.comprobarEmail(registraremail)){

        }else if(nuevoUsuario.comprobarContraseña(registrarContraseña)){

        }else if(nuevoUsuario.comprobartlf(registrartlf)){
            
        }else{
            listaUsuarios.push(nuevoUsuario);
            console.log(" email "+registraremail+" tlf "+registrartlf+" Usuario "+registrarUsuario+" contraseña "+registrarContraseña+
            " Añadido con exito");
            console.log(listaUsuarios);
        }

       
        
    }
    