var listaCursos = [];
async function solicitarCursos(){
    let datos = await fetch("listaCursos.php");
    listaCursos = await datos.json();
    mostrarCursos(listaCursos);
    turnos(listaCursos);
}
function mostrarCursos(listaCursos){
    console.log(listaCursos);
    let divCentral = document.getElementById("central");
    let tabla = document.createElement("table");
    let tr = document.createElement("tr");
    tabla.innerHTML = "";
    
    listaCursos.forEach((curso,Indice)=>{
        
            var td = document.createElement("td");
            td.insertAdjacentHTML("beforeend",`<table>
            <tr>
            <td><img src=${curso.curso_imagen} style='width:70px;height:70px;'>
            </td>
            <td>Baile: ${curso.curso_descripcion}<br>Precio: ${curso.curso_precio}
            <br>Dia: ${curso.curso_dia}<br>Turno: ${curso.curso_horario}<br><button>CONTRATAR</button>
            <button>DESCONTRATAR</button></td>
            </tr>
            </table>`);
            
            if (Indice % 4 === 0) {
                tr = document.createElement("tr");
                tabla.appendChild(tr);
            }

            tr.appendChild(td);
        
    });

    divCentral.appendChild(tabla);
}
function turnos(lista){
    let div = document.getElementById("superior").getElementsByTagName("p")[0];
    let span = document.createElement("span");
    let select = document.getElementById("superior").getElementsByTagName("select")[0];
    select.addEventListener("change",()=>{
        let listaFiltrada = lista.filter((filtro)=>filtro.curso_horario == select.value);
        document.getElementById("central").innerHTML = "";
        mostrarCursos(listaFiltrada);
        entrenadores(select.value);
        span.innerHTML = "";
        span.innerHTML = `Todos <input type='radio'>`;
        div.appendChild(span);
    })  
}

async function entrenadores(valorSelect){
    let enviado = {"TURNO":valorSelect};
    const response = await fetch("listaEntrenadores.php",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(enviado)
    })

    let listaEntrenadores = await response.text();
    console.log(listaEntrenadores);
}
onload = ()=>{
    solicitarCursos();

}