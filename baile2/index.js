var listaCursos = [];
async function pedirCursos(){
    const response = await fetch("listaCursos.php");
    const data = await await response.json();
    listaCursos=data;
    mostrarCursos(data);
}

function mostrarCursos(lista){
    let central = document.getElementById("central");
    central.innerHTML="";
    let tabla = document.createElement("table");
    let tr = document.createElement("tr");

    lista.forEach((dato,index) => {
        let td = document.createElement("td");
        td.insertAdjacentHTML("beforeend",`<table>
        <tr><td>
        <img src='${dato.curso_imagen}' style='width:75px;float:left;'>
        </td>
        <td><p>Baile: ${dato.curso_descripcion}</p><p>Precio: ${dato.curso_precio}</p><p>Dia: ${dato.curso_dia}</p><p>Turno: ${dato.curso_horario}</p>
        <p><button>Contratar</button></p><p><button>Descontratar</button></p></td>
        </tr></table>`);

        if(index % 4 == 0){
            tr = document.createElement("tr");
            tabla.appendChild(tr);
        }
        tr.appendChild(td);
    });
    central.appendChild(tabla);
}
function solicitarTurno(event){
    listaAux = [];
    listaCursos.forEach((curso)=>{
        if(curso.curso_horario == event.target.value){
            listaAux.push(curso);
        }
    })
    mostrarCursos(listaAux);
}
function solicitarEntrenador(){
    
}

onload=()=>{
    pedirCursos();
    document.getElementById("superior").getElementsByTagName("select")[0].addEventListener("change",solicitarTurno);
}