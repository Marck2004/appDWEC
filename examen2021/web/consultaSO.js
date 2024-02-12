function comprobarPerfil(){
    let persona = JSON.parse(localStorage.getItem("usuarios"));
    let select = document.getElementById("central").getElementsByTagName("select")[0].value;
    let fecha = document.getElementById("fecha").value;
    if(persona[0].perfil == "admin"){
        if(select != "Escoge una consulta" && fecha == '18-02-2022'){
            pedirDatos(fecha,select);
        }
    }else{
        console.log("mal");
    }
}

async function pedirDatos(fecha,select){
    let response = await fetch(`consultaSO.php?usuario=chapuza&&fecha=${fecha}&&consulta=${select}`);
    let data = await response.text();
    console.log(data);
    let tabla = document.getElementById("central").getElementsByTagName("table")[0];
    let tr = data.split(";");
    tr.splice(tr.length-1,1);

    let filas = data.split(";");

        filas.forEach((fila) => {
            let celdas = fila.split(":");
            let crearFila = document.createElement("tr");

            celdas.forEach((celda) => {
                let crearTd = document.createElement("td");
                crearTd.textContent = celda;
                crearFila.appendChild(crearTd);
            });

            tabla.appendChild(crearFila);
        });
}
onload=()=>{
    let botonConsulta = document.getElementById("consultar");
    botonConsulta.addEventListener("click",comprobarPerfil);
}