var preguntas = [
    "Tiene gafas", "Es un hombre", "Tiene bigote", "Tiene pelo en la cara", "Tiene pelo largo"
];
var listaPreguntas = [];
var errores = [];
function insertarSelect(){
    let listaValores = ["TieneGafas","EsHombre","TieneBigote","TienePeloCara","TienePeloLargo"];
    /*let listaValores = Object.keys(listaPersonas[codigoPersonaBuscada]);
    listaValores.splice(0,5);
    listaValores.splice(1,1);
    listaValores.splice(0,1,"TieneGafas");
    listaValores.splice(1,1,"EsHombre");
    listaValores.splice(3,1,"TienePeloCara");
    listaValores.splice(4,1,"TienePeloLargo");*/

    let select = document.getElementById("divPreguntas").getElementsByTagName("select")[1];
    preguntas.forEach((pregunta,Indice)=>{
        let option = document.createElement("option");
        option.value = listaValores[Indice];
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

    document.getElementById("btnIntentar").addEventListener("click",()=>{
        comprobar(listaPersonas[pos].Codigo);
    });
}
function insertarError(){
    let preguntaSelect = document.getElementById("divPreguntas").
    getElementsByTagName("select")[1].value;

    if(preguntaSelect){
        errores.push(preguntaSelect);
        localStorage.setItem("Error",JSON.stringify(errores));

        for (const Indice in listaPersonas[codigoPersonaBuscada]) {
            if(preguntaSelect == Indice){
                console.log(listaPersonas[codigoPersonaBuscada][Indice]);
                if(listaPersonas[codigoPersonaBuscada][Indice] == "y"){
                    alert("YES");
                }else{
                    alert("NO");
                }
            }
        }
        let descartes = [];
        let puntos = 0;
        listaPersonas.forEach((persona)=>{
            for (const Indice in persona) {
                if(preguntaSelect == Indice){
                    if(persona[Indice] == "n"){
                        persona.Foto="novale.png";
                        
                        if(persona.Foto == "novale.png"){
                                descartes.push(persona.Nombre);
                                puntos += persona.Puntuacion;
                        }
                        
                    }
                }
            }

        });
        imprimirPersonas();

        var informacion = {
            "pregunta":preguntaSelect,
            "respuesta":"NO",
            "personas":descartes,
            "puntos":puntos
        }
        listaPreguntas.push(informacion);
        localStorage.setItem("descartes",JSON.stringify(listaPreguntas));
    }
    agrandarImagen();
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
function comprobarFechas(separador){
    let botonComprobarFecha = document.getElementById("btnPreguntarFecha");
    botonComprobarFecha.addEventListener("click",()=>{
        let fechaNacidosAntes = document.getElementById("divPreguntas").getElementsByTagName("input")[0];

        let fechaNac = document.getElementById("txtFechaNacimiento").value;
        let fechaNacidosAntesValidada = new Date(fechaNacidosAntes.value.split(separador)[0],
        fechaNacidosAntes.value.split(separador)[1],fechaNacidosAntes.value.split(separador)[2]);

        if(fechaNacidosAntesValidada < fechaNac){
            let pos = listaPersonas.findIndex((persona)=>persona.FechaNacimiento > fechaNacidosAntesValidada);

            if(pos == -1){
                persona.Foto = "novale.png";
            }
            imprimirPersonas();
        }
    });
    
}
function agrandarImagen(){
        
    let contador = 0;
    let tds = [...document.querySelectorAll("td")];

    let intervalo = setInterval(()=>{
    
        if(tds[contador].firstChild.src != "imagenes/novale.png"){
            
            tds[contador].firstChild.style.width = "100px";
            tds[contador].firstChild.style.height = "100px";
        }
        contador++;
        if(contador == tds.length){
            clearInterval(intervalo);
        }
    },500);
}
onload = ()=>{
    imprimirPersonas();
    agrandarImagen();
    comprobarFechas();
    insertarSelect();
   
}