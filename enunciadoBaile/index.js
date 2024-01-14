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
    tabla.id = "tablaNueva";
    let tr = document.createElement("tr");
    tabla.innerHTML = "";
    
    listaCursos.forEach((curso,Indice)=>{
        
            var td = document.createElement("td");
            td.insertAdjacentHTML("beforeend",`<table>
            <tr>
            <td><img src=${curso.curso_imagen} style='width:70px;height:70px;'>
            </td>
            <td>Baile: ${curso.curso_descripcion}<br>Precio: ${curso.curso_precio}
            <br>Dia: ${curso.curso_dia}<br>Turno: ${curso.curso_horario}<br>
            <button onclick='marcarTabla("${curso.curso_dia}","${curso.curso_horario}","${curso.curso_id}")'>CONTRATAR</button>
            <button onclick='eliminarCompra("${curso.curso_id}")'>DESCONTRATAR</button></td>
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
    let copiaListaRadios = [...listaRadios];

    copiaListaRadios[0].addEventListener("click",pedirDatosTurno);
    copiaListaRadios.splice(0,1);

    copiaListaRadios.forEach((radio)=>{
        radio.addEventListener("click",pedirDatosEntrenador);
    })
}
async function pedirDatosTurno(){
    let valorSelect = document.getElementById("superior").getElementsByTagName("select")[0].value;

    let formData = new FormData();
    formData.append("TURNO",valorSelect);
    let url = `listaCursos.php?TURNO=${valorSelect}`;
    let response = await fetch(url,{
        method:"GET",
        headers:{
        "Content-type":"application/json"
    }
    })
    let datos = await response.json();
    console.log(datos);
    mostrarCursos(datos);
}
async function pedirDatosEntrenador(event){
    let formData = new FormData();
    formData.append("ENTRENADOR",event.target.value);
    let url = `listaCursos.php?ENTRENADOR=${event.target.value}`;
    let response = await fetch(url,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    let datos = await response.json();
    mostrarCursos(datos);
}
var guardarCompra = [];
function marcarTabla(dia,horario,id){

    let tabla = document.getElementById("horario").getElementsByTagName("table")[0];
    let thVertical = [...tabla.getElementsByTagName("th")];
    thVertical.splice(0,2);
    thVertical.splice(5,thVertical.length);
    let thHorizontal = [...tabla.getElementsByTagName("th")];
    thHorizontal.splice(0,7);

    let tr = [...tabla.getElementsByTagName("tr")];

    tr.splice(0,2);

    let posHorizontal = thHorizontal.findIndex((cabecera)=>cabecera.textContent == horario);
    let posVertical = thVertical.findIndex((cabecera)=>cabecera.textContent == dia.toUpperCase());
 
    tr[posHorizontal].children[posVertical+1].style.backgroundColor = "white";
    tr[posHorizontal].children[posVertical+1].innerHTML = "x";
    tr[posHorizontal].children[posVertical+1].id = id;

    guardarCompra.push(tr[posHorizontal].children[posVertical+1]);
}
function eliminarCompra(id){

        let pos = guardarCompra.findIndex((compra)=>compra.id == id);
        guardarCompra[pos].style.backgroundColor = "grey";
        guardarCompra[pos].innerHTML = "";
        guardarCompra.splice(pos,1);
}
function comprobarCompras(){
    let pos;
    let mostrarCompras = [];
    if(guardarCompra.length > 0){
        guardarCompra.forEach((compra)=>{
            pos = listaCursos.findIndex((curso)=>curso.curso_id == compra.id);
            mostrarCompras.push(listaCursos[pos])
        })
        localStorage.setItem("compra",JSON.stringify(mostrarCompras));
        window.location.href = "factura.html";
    }else{
        alert("No existe ningun baile comprado");
    }
}
onload = ()=>{
    solicitarCursos();
    document.getElementById("horario").getElementsByTagName("button")[0].
    addEventListener("click",comprobarCompras);
}