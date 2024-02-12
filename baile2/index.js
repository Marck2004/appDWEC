import { clases } from "./Componente.js";

var listaCursos = [];
async function pedirCursos(){
    const response = await fetch("listaCursos.php");
    const data = await await response.json();
    listaCursos=data;
    mostrarCursos(data);
    console.log(data);
}
function mostrarCursos(lista){
    let central = document.getElementById("central");
    central.innerHTML = "";
    let tabla = document.createElement("table");
    let tr;

    lista.forEach((dato,index) => {
        if(index % 4 == 0){
            tr = document.createElement("tr");
            tabla.appendChild(tr);
        }
        
        let td = document.createElement("td");
        let appClases = document.createElement("app-clases");

        appClases.setAttribute("imagen",dato.curso_imagen);
        appClases.setAttribute("parrafo",`<p>Baile: ${dato.curso_descripcion}</p><p>Precio: ${dato.curso_precio}</p><p>Dia: ${dato.curso_dia}</p><p>Turno: ${dato.curso_horario}</p>
        <p><button>Contratar</button></p><p><button>Descontratar</button></p>`);
        td.appendChild(appClases);
        tr.appendChild(td);

    });
    central.appendChild(tabla);
}
/*function mostrarCursos(lista){
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
}*/
async function solicitarTurno(event){
    console.log(event.target.value);

        let response = await fetch(`listaCursos.php?TURNO=${event.target.value}`);
        let data = await response.json();
        listaCursos = data;
        console.log(listaCursos);
        mostrarCursos(listaCursos);

}
async function solicitarEntrenador(event){

    if(event.target.value == "Todos"){
        mostrarCursos(listaCursos);
    }else{
        
        listaCursos = listaCursos.filter((profesor)=>{
            profesor.curso_cod_entrenador == event.target.value
            return listaCursos;
        })
        console.log(listaCursos);

        //mostrarCursos(data);
        
    }
}
function asignarEvento(){
    let radios = [...document.getElementsByName("profesores")];
    radios.forEach((radio)=>{
        radio.addEventListener("click",solicitarEntrenador);
    });
}
onload=()=>{
    pedirCursos();
    document.getElementById("superior").getElementsByTagName("select")[0].addEventListener("change",solicitarTurno);
    document.getElementById("superior").getElementsByTagName("p")[0]
    .insertAdjacentHTML("beforeend",`Todos <input type='radio' name='profesores' value='Todos'>Pedro Picapiedra<input type='radio' value='1' name='profesores'>
    Angel Garo<input type='radio' value='3' name='profesores'>Jose Ramon<input type='radio' value='2' name='profesores'>`);
    asignarEvento();
}