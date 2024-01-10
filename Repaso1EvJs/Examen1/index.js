var listaLogo = [
    "artic_logo.png","cream_sports.png","emonkeyz_logo.png","mad_lions.png","movistar_logo.png","bcn_squad_logo.png","s2v_digital_sports.png","heretics_logo.png","team_queso.png","ucam_penguins_logo.png","giants_logo.png","wizards.png","wygers.png","x6tence.png"
]
var equipos = [
    "ARCTIC GAMING","CREAM REAL BETIS","EMONKEYZ","MAD LIONS E.C.","MOVISTAR RIDERS","BCN SQUAD","S2V ESPORTS","TEAM HERETICS","TEAM QUESO","UCAM ESPORTS CLUB","VODAFONE GIANTS","WIZARDS CLUB","WYGERS","X6TENCE"
]
function cargarLogoEquipo(){
    
    let divImagenes = document.getElementById("anuncio").getElementsByTagName("img")[0];
    let contador = 0;
    setInterval(()=>{
        divImagenes.src = `imagenes/${listaLogo[contador]}`;
        contador++;

        if(contador == listaLogo.length){
            contador = 0;
        }
    },300);
}
function cargarNombreJugadores(){
    let botonJugadores = document.getElementsByTagName("nav")[0].getElementsByTagName("a")[1];

    botonJugadores.addEventListener("click",mostrarSelect);
}
function mostrarSelect(){
    let divCentral = document.getElementById("central");
    let select = document.createElement("select");
    let parrafo = document.createElement("p");
    parrafo.textContent = "Jugador:";
    select.insertAdjacentHTML("afterbegin",`<option value='0'>Escoge un jugador</option>`);
    select.addEventListener("change",mostrarInformacion);
    parrafo.appendChild(select);
    divCentral.appendChild(parrafo);

    listaJugadores.forEach((jugador)=>{
        let option = document.createElement("option");
        option.value = `${jugador.nif}`;
        option.textContent = `${jugador.nombre} ${jugador.apellidos}`;
        select.appendChild(option);
    });
    
}
function mostrarInformacion(event){
    let pos = listaJugadores.findIndex((jugador)=>jugador.nif == event.target.value);
    if(pos != -1){
        document.getElementById("central").insertAdjacentHTML("beforeend",`
            <p>nombre<input type='text' value='${listaJugadores[pos].nombre}' class='nuevo'></p>
            <p>apellidos<input type='text' value='${listaJugadores[pos].apellidos}' class='nuevo'></p>
            <p>nif<input type='text' value='${listaJugadores[pos].nif}' disabled=true></p>
            <p>correo<input type='text' value='${listaJugadores[pos].correo}' class='nuevo'></p>
            <p>comentarios<input type='text' value='${listaJugadores[pos].comentarios}' class='nuevo'></p>
            <p><button onclick='cambiarInformacion(${pos})'>Enviar</button><button>Cancelar</button></p>
        `);
    }
}
function cambiarInformacion(posicion){
    let listaNuevosValores = document.getElementById("central").getElementsByClassName("nuevo");
    
    listaJugadores[posicion].nombre = listaNuevosValores[0].value;
    listaJugadores[posicion].apellidos = listaNuevosValores[1].value;
    listaJugadores[posicion].correo = listaNuevosValores[2].value;
    listaJugadores[posicion].comentarios = listaNuevosValores[3].value;
}
function nuevoContrato(){
    let enlaceContrato = document.getElementsByTagName("nav")[0].getElementsByTagName("a")[2];

    enlaceContrato.addEventListener("click",()=>{

        document.getElementById("nuevoContrato").className = "visible";
        rellenarInformacionContrato();
    });
}
function rellenarInformacionContrato(){
    let selectJugadores = document.getElementById("nuevoContrato").getElementsByTagName("select")[0];
    selectJugadores.insertAdjacentHTML("beforeEnd",`<option value='0'>Escoge un jugador</option>`);

    let selectEquipos = document.getElementById("nuevoContrato").getElementsByTagName("select")[1];
    selectEquipos.insertAdjacentHTML("beforeend","<option value='0'>Escoge un equipo</option>");

    equipos.forEach((equipo)=>{
        selectEquipos.insertAdjacentHTML("beforeend",`<option>${equipo}</option>`);
    });

    listaJugadores.forEach((jugador)=>{
        selectJugadores.insertAdjacentHTML("beforeEnd",`<option value='${jugador.nif}'>${jugador.nombre} ${jugador.apellidos}</option>`);
    });
    document.getElementById("guardar").addEventListener("click",()=>{
        validarFormularioContrato();
        validarFechas("/");
    });
}
function validarFormularioContrato(){
    let contador = localStorage.length;
    let listaEstadisticas = [];
    let selectJugadores = document.getElementById("nuevoContrato").getElementsByTagName("select")[0];
    let selectEquipos = document.getElementById("nuevoContrato").getElementsByTagName("select")[1];
    let porcentaje = document.getElementById("nuevoContrato").getElementsByTagName("input")[3];
    let importeAnual = document.getElementById("nuevoContrato").getElementsByTagName("input")[2];

    if(selectJugadores.value == 0){
        selectJugadores.style.border = "2px solid red";
    }else{
        let pos = listaJugadores.findIndex((jugador)=>jugador.nif == selectJugadores.value);
        listaEstadisticas.push(`${listaJugadores[pos].nombre} ${listaJugadores[pos].apellidos}`);
    }
    if(selectEquipos.value == 0){
        selectEquipos.style.border = "2px solid red";
    }else{
        listaEstadisticas.push(selectEquipos.value);
    }
    if(porcentaje.value < 1 || porcentaje.value > 10 || porcentaje.value == ""){
        porcentaje.style.border = "2px solid red";
    }else{
        listaEstadisticas.push(porcentaje.value);
    }
    if(importeAnual.value == ""){
        importeAnual.style.border = "2px solid red";
    }else{
        listaEstadisticas.push(importeAnual.value);
    }
    if(listaEstadisticas.length == 4){
        console.log(listaEstadisticas);
        localStorage.setItem("contrato"+contador,JSON.stringify(listaEstadisticas));
    }
}
function validarFechas(separador){
    let fechaPrincipal = document.getElementById("nuevoContrato").getElementsByTagName("input")[0];
    let fechaSecundaria = document.getElementById("nuevoContrato").getElementsByTagName("input")[1];

    let fechaDesde = new Date(fechaPrincipal.value.split(separador)[0],fechaPrincipal.value.split(separador)[1]-1,fechaPrincipal.value.split(separador)[2]);
    let fechaHasta = new Date(fechaSecundaria.value.split(separador)[0],fechaSecundaria.value.split(separador)[1]-1,fechaSecundaria.value.split(separador)[2]);

    if(fechaDesde.getDate() != fechaPrincipal.value.split(separador)[0] ||
    fechaDesde.getMonth() != fechaPrincipal.value.split(separador)[1]-1 ||
    fechaDesde.getFullYear() != fechaPrincipal.value.split(separador)[2]){

        if(fechaHasta.getDate() != fechaSecundaria.value.split(separador)[0] ||
        fechaHasta.getMonth() != fechaSecundaria.value.split(separador)[1]-1 ||
        fechaHasta.getFullYear() != fechaSecundaria.value.split(separador)[2]){

            if(fechaDesde > fechaHasta){
                fechaPrincipal.style.border = "2px solid red";
                fechaSecundaria.style.border = "2px solid red";
            }
        }
    }
}
onload = ()=>{
    cargarLogoEquipo();
    cargarNombreJugadores();
    nuevoContrato();
}