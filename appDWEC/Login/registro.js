
function VolverInicioSesion(){
    window.location.href = "login.html";
}
function validarRegistroUsuario(){
    var registraremail = document.getElementById('emailRegistro').value.trim();
    var registrartlf = document.getElementById('tlfRegistro').value.trim();
    var registrarUsuario = document.getElementById('usuarioRegistro').value.trim();
    var registrarContraseña = document.getElementById('contraseñaRegistro').value.trim();

    var nuevoUsuario = new Usuario(registraremail,registrartlf,registrarUsuario,registrarContraseña);
    
   if(nuevoUsuario.comprobarEmail(registraremail)){
        console.log(registraremail);
    }
    if(nuevoUsuario.comprobarContraseña(registrarContraseña)){
        console.log(registrarContraseña);
    }
    if(nuevoUsuario.comprobartlf(registrartlf)){
        console.log(registrartlf);
    }else{
        listaUsuarios.push(nuevoUsuario);
        console.log(" email "+registraremail+" tlf "+registrartlf+" Usuario "+registrarUsuario+" contraseña "+registrarContraseña+
        " Añadido con exito");
        console.log(listaUsuarios);
    }
}
