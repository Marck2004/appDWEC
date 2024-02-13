async function comprobarUsuario(){
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let select = document.getElementById("central").getElementsByTagName("select")[0];
    let fecha = document.getElementById("fecha").value;

    if(usuario.perfil == "admin"){
        if(select.value != "Escoge una consulta" && fecha == "18-02-2022"){

        let response = await fetch(`consultaSO.php?consulta=${select.value}&&usuario=chapuza&&fecha=${fecha}`);
            let data = await response.text();
            pintarTabla(data);
        }else{
            console.log("falla aqui");
        }
    }
}
function pintarTabla(texto){
    let tabla = document.getElementById("central").getElementsByTagName("table")[0];

    let tr = texto.split(";");
    tr.forEach(fila => {
        let crearFila = document.createElement("tr");
        let td = fila.split(":");
        td.forEach(celda => {
            let crearColumna = document.createElement("td");
            crearColumna.innerHTML = celda;
            crearFila.appendChild(crearColumna);
        });
        tabla.appendChild(crearFila);
    });
}

onload = ()=>{
    let botonConsultar = document.getElementById("consultar");
    botonConsultar.addEventListener("click",comprobarUsuario);
}