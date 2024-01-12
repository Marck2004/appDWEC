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
    divCentral.innerHTML = "";
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
    span.id = "nombreEntrenadores";
    let select = document.getElementById("superior").getElementsByTagName("select")[0];
    select.addEventListener("change",()=>{
        let listaFiltrada = lista.filter((filtro)=>filtro.curso_horario == select.value);
        document.getElementById("central").innerHTML = "";
        mostrarCursos(listaFiltrada);
        entrenadores(select.value);
        span.innerHTML = "";
        span.innerHTML = `Todos <input type='radio' name='radioButton'>`;
        div.appendChild(span);
    })  
}

async function entrenadores(valorSelect){
    //let enviado = {"TURNO":valorSelect};
    let turnoValor = valorSelect;
    var formData = new FormData();
    formData.append("TURNO",turnoValor);
    
    const response = await fetch("listaEntrenadores.php",{
        method:"POST",
        body:formData
    })

    let entrenadores = await response.text();
    let listaEntrenadores = entrenadores.split(";");

    listaEntrenadores.splice(listaEntrenadores.length-1,1);
    console.log(listaEntrenadores);

    let span = document.getElementById("nombreEntrenadores");
    listaEntrenadores.forEach((entrenador)=>{
        span.innerHTML += `${entrenador.split("/")[1]}<input type='radio' name='radioButton' value=${entrenador.split("/")[0]}>`;
    })
    filtros(document.getElementsByName("radioButton"));
}
function filtros(listaRadios){
    
    [...listaRadios].forEach((radio)=>{
        radio.addEventListener("click",pedirDatos);
    })
}
async function pedirDatos(event){
    let formData = new FormData();
    formData.append("ENTRENADOR",event.target.value);
    let url = `listaCursos.php?ENTRENADOR=${event.target.value}`;
    let response = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Typoe":"application/json"
        }
    })
    let datos = await response.json();
    mostrarCursos(datos)
}
onload = ()=>{
    solicitarCursos();
}