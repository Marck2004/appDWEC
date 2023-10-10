var listaUsuarios = [];

function VolverInicioSesion(){
    window.location.href = "login.html";
}
function validarRegistroUsuario(){
    
    var registraremail = document.getElementById('emailRegistro').value.trim();
    var registrartlf = document.getElementById('tlfRegistro').value.trim();
    var registrarUsuario = document.getElementById('usuarioRegistro').value.trim();
    var registrarContraseña = document.getElementById('contraseñaRegistro').value.trim();

    var nuevoUsuario = new Usuario(registraremail,registrartlf,registrarUsuario,registrarContraseña);

   nuevoUsuario.comprobarEmail(registraremail);
    nuevoUsuario.comprobarContraseña(registrarContraseña);
    nuevoUsuario.comprobartlf(registrartlf);

    listaUsuarios.push(nuevoUsuario);
        console.log(nuevoUsuario);
        console.log(listaUsuarios);
}


