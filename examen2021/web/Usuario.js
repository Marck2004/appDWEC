
export async function consultarUsuarios(){
    let valorCaja = document.getElementById("central").getElementsByTagName("input")[0].value;
    if(valorCaja == "AWS" || valorCaja == "AZURE" || valorCaja == "GOOGLE"){
    let response = await fetch(`consultaUsuarios.php?servidor=${valorCaja}`);
    let data = await response.json();
    console.log(data);
    pintarUsuarios(data);
    }else{
        let divUsuarios = document.getElementById("usuarios");
        divUsuarios.innerHTML = "";
        divUsuarios.innerHTML = "ERROR: FALTAN PARAMETROS";
    }
}
function pintarUsuarios(lista){

    let divUsuarios = document.getElementById("usuarios");
    divUsuarios.innerHTML = "";
        lista.forEach((usuario) => {
            let iesUsuario = document.createElement("ies-usuario");
            iesUsuario.setAttribute("imagen",usuario.foto);
            iesUsuario.setAttribute("parrafo",usuario.nombre);
            divUsuarios.appendChild(iesUsuario);
        });
    
}
