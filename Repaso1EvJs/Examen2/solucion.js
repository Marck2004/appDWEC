var preguntas = [
    "Tiene gafas", "Es un hombre", "Tiene bigote", "Tiene pelo en la cara", "Tiene pelo largo"
];
var errores = [];
function insertarSelect(){
    let select = document.getElementById("divPreguntas").getElementsByTagName("select")[1];
    preguntas.forEach((pregunta)=>{
        let option = document.createElement("option");
        option.value = pregunta;
        let texto = document.createElement("p");
        texto.innerHTML = pregunta;
        option.appendChild(texto);
        select.appendChild(option);
    })
    select.addEventListener("change",insertarError);
}
function imprimirPersonas(){
    listaPersonas.sort((a,b)=>{
        if (a.Nombre >b.Nombre){
            return 1
        }else{
            return -1;
        }
    });
    let tablero = document.getElementById("divTablero");
    let tds = [...tablero.querySelectorAll("td")];
    tds.forEach((Celda,Indice)=>{
        Celda.innerHTML = "";
        Celda.insertAdjacentHTML("beforeend",`<img style='width:75px;heigth:75px;' src='imagenes/${listaPersonas[Indice].Foto}' onclick='mostrarDatos(${Indice})'><br>
        <p>${listaPersonas[Indice].Nombre}</p>`);
    });
}
function mostrarDatos(pos){
    let divDatos = document.getElementById("divDatosPersona");

    if(divDatos.getElementsByTagName("input")[0].value == listaPersonas[pos].EsHombre){
        divDatos.getElementsByTagName("input")[0].checked = true;
    }else{
        divDatos.getElementsByTagName("input")[1].checked = true;
    }
    divDatos.getElementsByTagName("input")[2].value = listaPersonas[pos].Nombre;
    divDatos.getElementsByTagName("input")[3].value = listaPersonas[pos].FechaNacimiento;
    divDatos.getElementsByTagName("input")[4].value = listaPersonas[pos].ColorPelo;

    divDatos.getElementsByTagName("button")[0].addEventListener("click",comprobar(listaPersonas[pos].Codigo));
}
function insertarError(){
    let preguntaSelect = document.getElementById("divPreguntas").getElementsByTagName("select")[1].value;
    if(preguntaSelect){
        errores.push(preguntaSelect);
        localStorage.setItem("Error",JSON.stringify(errores));
        console.log(errores);
    }
}
function comprobar(id){
    if(id == codigoPersonaBuscada){
        window.location.href = "preguntasRealizadas.html";
    }else{
        errores.push(id);
        console.log(errores);
        localStorage.setItem("Error",JSON.stringify(errores));
    }
}
onload = ()=>{
    insertarSelect();
    imprimirPersonas();
}