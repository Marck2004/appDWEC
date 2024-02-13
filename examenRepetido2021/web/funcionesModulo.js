export async function pedirUsuarios(){
    let cajaUsuarios = document.getElementById("central").getElementsByTagName("input")[0];
    if(cajaUsuarios.value == "AWS" || cajaUsuarios.value == "GOOGLE" || cajaUsuarios.value == "AZURE"){
        let response = await fetch(`consultaUsuarios.php?servidor=${cajaUsuarios.value}`);
        let data = await response.json();
        pintarUsuarios(data);
    }else{
        document.getElementById("usuarios").innerHTML = "NO HAY USUARIOS PARA ESE SERVIDOR";
    }
}
function pintarUsuarios(lista){
    let divUsuarios = document.getElementById("usuarios");
    lista.forEach((usuario) => {
        let iesUsuario = document.createElement("ies-usuario");
        iesUsuario.setAttribute("imagen",usuario.foto);
        iesUsuario.setAttribute("parrafo",usuario.nombre);
        divUsuarios.appendChild(iesUsuario);
    });
    asignarEventos();
}
function asignarEventos(){
    let componentes = [...document.getElementsByTagName("ies-usuario")];
    componentes.forEach(usuario => {
        usuario.addEventListener("click",mostrarOculto);
    });
}
function mostrarOculto(event){
    let usuario = event.target.parentNode;
    let login = document.getElementById("login");
    login.style.display = "block";
    var cajaNombre = login.getElementsByTagName("input")[0];
    cajaNombre.value = usuario.getAttribute("parrafo");
    var cajaClave = login.getElementsByTagName("input")[1];
    cajaClave.disabled = false;
}
