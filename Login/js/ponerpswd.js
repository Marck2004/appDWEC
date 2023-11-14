
var listaUsuarios = [];

    async function mostrarContraseña(){
      const recibirDatos = await fetch("./jsonExample/ObjetosInicializados.json");
      const usuarios = await recibirDatos.json();
        listaUsuarios = usuarios;
        console.log(listaUsuarios);
        listaUsuarios.forEach((usuario) => {
          if(usuario.email == document.getElementById("email").value){
            document.getElementById("contraseñaOculta").style.display = "block";
            document.getElementById("contraseñaOculta").value = "Su contraseña es: "+usuario.contraseña;
          }
        });
    }
