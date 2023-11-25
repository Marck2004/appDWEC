var listaUsuarios = [];

function VolverInicioSesion(){
    window.location.href = "login.html";
}

async function mostrarUsarios(){
    const recibirDatos = await fetch("./jsonExample/ObjetosInicializados.json");
    const usuarios = await recibirDatos.json();
      listaUsuarios = usuarios;
      console.log(listaUsuarios);
  }

function validarRegistroUsuario(e){
        e.preventDefault();

    var registraremail = document.getElementById('emailRegistro').value.trim();
    var registrartlf = document.getElementById('tlfRegistro').value.trim();
    var registrarUsuario = document.getElementById('usuarioRegistro').value.trim();
    var registrarContraseña = document.getElementById('contraseñaRegistro').value.trim();
    
    

    var nuevoUsuario = new Usuario(registraremail,registrartlf,registrarUsuario,registrarContraseña);

    if (nuevoUsuario.comprobarContraseña(registrarContraseña) &&
        nuevoUsuario.comprobarEmail(registraremail) &&
        nuevoUsuario.comprobartlf(registrartlf)) {
        // Todas las validaciones son exitosas, enviar el formulario
        document.getElementById('formulario').submit();
    }else{
    //RECORREMOS USUARIOS PARA VER SI HAY ALGUN EMAIL QUE COINCIDE


        let posicion = listaUsuarios.findIndex((user)=> user.email == registraremail);
        console.log(posicion);
        if(listaUsuarios[posicion].email == registraremail){
            alert("Ese email esta en uso pruebe con otro");
            return false;
        }else{
            nuevoUsuario.comprobarEmail(registraremail);
            nuevoUsuario.comprobarContraseña(registrarContraseña);
            nuevoUsuario.comprobartlf(registrartlf);

        listaUsuarios.push(nuevoUsuario);

        console.log(listaUsuarios);
        }
    }
   
}
function verPeliculas(){
    window.location.href = "aterrizaje.html";
}
    
onload = ()=>{
    mostrarUsarios();
}



