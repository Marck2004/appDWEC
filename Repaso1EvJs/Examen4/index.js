var clicks = [];
function rellenarSelect(){
    let select = document.getElementById("divPersonas").getElementsByTagName("select")[1];
    listaPersonas.forEach((persona)=>{
        let option = document.createElement("option");
        option.textContent = persona.Nombre;
        option.value = `Celda1 ${persona.PosicionCelda1}-Celda2 ${persona.PosicionCelda2}`;
        select.appendChild(option);
    });
}
function rellenarTd(){
    let td = [...document.querySelectorAll("td")];

    td.forEach((celda)=>{
        celda.id = celda.textContent;
        let pos = listaPersonas.findIndex((persona)=>celda.textContent == persona.PosicionCelda1 ||celda.textContent == persona.PosicionCelda2);
        if(pos != -1){
            celda.insertAdjacentHTML("beforeend",`<div class='${listaPersonas[pos].Codigo}' style='display:none'><img src='imagenes/${listaPersonas[pos].Foto}'
             style='width:75px;heigth:'75px;'><br><p>${listaPersonas[pos].Nombre}</p></div>`);
        }else{
            celda.insertAdjacentHTML("beforeend",`<div style='display:none'><img src='imagenes/novale.png' style='width:75px;heigth:'75px;'><br><p>ERROR</p></div>`);
        }
        celda.addEventListener("click",()=>{
            captarClick(event);
        })
    })
}
var clicados = [];
function captarClick(event){
    console.log(event.target.id);
    event.target.children[0].style.display = "block";

    let pos = clicados.findIndex((clicado)=>clicado == event.target.children[0].className);
    clicados.push(event.target.children[0].className);

    document.getElementById("totalClicks").innerHTML = parseInt(document.getElementById("totalClicks").innerHTML)+1;
    let numClick = document.getElementById("totalClicks").innerHTML;

    let encontrado = "";
    let persona = "";
    if(pos == -1){
        if(event.target.children[0].className == ""){
            encontrado = "error";
        }else{
        encontrado = "posible";
        clicados.forEach((clickado)=>{
                let ubicacion = listaPersonas.findIndex((persona)=>persona.Codigo == clickado);
                persona = listaPersonas[ubicacion];
            })
        }
    }else{
            encontrado = "acierto"
            clicados.forEach((clickado)=>{
                let ubicacion = listaPersonas.findIndex((persona)=>persona.Codigo == clickado);
                persona = listaPersonas[ubicacion];
            })
            document.getElementById("totalAciertos").innerHTML=parseInt(document.getElementById("totalAciertos").innerHTML)+1;
    }
    console.log(persona);

    let click = {
        "NumeroClick":numClick,
        "NumeroCelda":event.target.id,
        "Resultado":encontrado,
        "Puntos":persona.Puntuacion,
        "Persona":persona
    }
    clicks.push(click);

    localStorage.setItem("clicks",JSON.stringify(clicks));
}
function cuentaAtras(){
    let td = [...document.querySelectorAll("td")];
    let contador = 0;

    let intervalo = setInterval(()=>{
        td[contador].children[0].style.display = "block";
        contador++;
        if(contador == td.length){
            clearInterval(intervalo);
        }
    },5000);
}
function mostrarPosiciones(){
    let select = document.getElementById("divPersonas").getElementsByTagName("select")[1];
    let divPersonas = document.getElementById("divPersonas").getElementsByTagName("input")[0];
    select.addEventListener("click",()=>{
        divPersonas.value = select.value;
    })
}
onload=()=>{
    rellenarSelect();
    rellenarTd();
    cuentaAtras();
    mostrarPosiciones();
}