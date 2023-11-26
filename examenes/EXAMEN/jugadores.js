var listaJugadores=[
  {
    "nombre":"Pedro",
    "apellidos":"Gomez Borrero",
    "nif":"12345678C",
    "correo":"pedro@gmail.com",
    "comentarios":"Timido"
  },{
    "nombre":"Pablo",
    "apellidos":"Gomez Borrero",
    "nif":"22345678C",
    "correo":"pablo@gmail.com",
    "comentarios":"Muy joven"
  },{
    "nombre":"Pilar",
    "apellidos":"Perez Borrero",
    "nif":"33345678C",
    "correo":"pilar@gmail.com",
    "comentarios":"hay que hablar con ella"
  },{
    "nombre":"Patricia",
    "apellidos":"Lopez Borrero",
    "nif":"44445678C",
    "correo":"patricia@gmail.com",
    "comentarios":""
  },{
    "nombre":"Paloma",
    "apellidos":"Lopez Borrero",
    "nif":"4444555C",
    "correo":"paloma@gmail.com",
    "comentarios":""
  },{
    "nombre":"Antonio",
    "apellidos":"Lopez Borrero",
    "nif":"45555678C",
    "correo":"antonio@gmail.com",
    "comentarios":""
  },{
    "nombre":"Jesus",
    "apellidos":"Perez Borrero",
    "nif":"94445678D",
    "correo":"jesus@gmail.com",
    "comentarios":""
  }
]
var arrObjetos = [];
var listaEquipos =[
  "ARCTIC GAMING","CREAM REAL BETIS","EMONKEYZ","MAD LIONS E.C.","MOVISTAR RIDERS","BCN SQUAD","S2V ESPORTS","TEAM HERETICS","TEAM QUESO","UCAM ESPORTS CLUB","VODAFONE GIANTS","WIZARDS CLUB","WYGERS","X6TENCE"
]
var logoEquipo = [
  "artic_logo.png","cream_sports.png","emonkeyz_logo.png","mad_lions.png","movistar_logo.png","bcn_squad_logo.png","s2v_digital_sports.png","heretics_logo.png","team_queso.png","ucam_penguins_logo.png","giants_logo.png","wizards.png","wygers.png","x6tence.png"
]

function pintarJugadores(){
  document.getElementById("central").innerHTML = "";
  listaJugadores.forEach((jugador)=>{
    
    document.getElementById("central").innerHTML +=
      `<p>${jugador.nombre +' '+jugador.apellidos} <input type='button' value='PULSAME' onclick='eliminar(event)' id='${jugador.nif}'></p>`;
  });
}
function eliminar(event){
    
    let pos = listaJugadores.findIndex((jugador)=> jugador.nif == event.target.id);

    listaJugadores.splice(pos,1);
  
      pintarJugadores();
}
function mostrarImagenes(){
  let contador = 0;
    setInterval(()=>{
      document.getElementById("anuncio").getElementsByTagName("img")[0].setAttribute("src",`imagenes/${logoEquipo[contador]}`);
      contador++;
      if(contador == logoEquipo.length){
        contador=0;
      }
    },300
      )
}
function mostrarJugadores(){
    document.getElementById("central").innerHTML = `<p>Jugador: <select id='desplegableJugadores' onchange='infoJugador(event)'><option value='0'>Escoge un jugador</option></select></p>`; 

    listaJugadores.forEach((jugador)=>{
      document.getElementById("desplegableJugadores").insertAdjacentHTML("beforeend",`<option value='${jugador.nif}'>${jugador.nombre+" "+jugador.apellidos}</option>`);
    });
}

function infoJugador(event){

        let pos = listaJugadores.findIndex((jugador)=> jugador.nif == event.target.value);

    document.getElementById("central").insertAdjacentHTML("beforeend",
    `<p>Nombre: <input type='text' value='${listaJugadores[pos].nombre}' id='nombreModif'><br>
    apellidos <input type='text' value='${listaJugadores[pos].apellidos}' id='apellidoModif'><br>
    nif <input type='text' value='${listaJugadores[pos].nif}' id='nifModif' disabled><br>
    correo <input type='text' value='${listaJugadores[pos].correo}' id='correoModif'><br>
    comentarios <input type='text' value='${listaJugadores[pos].comentarios}' id='comentarioModif'><br>
    <input type='submit' id='guardarDatos'><input type='reset' value='Borrar' id='borrarJugador'></p>`);

    document.getElementById("guardarDatos").addEventListener("click",()=>{
        listaJugadores[pos].nombre = document.getElementById("nombreModif").value;
        listaJugadores[pos].apellidos = document.getElementById("apellidoModif").value;
        listaJugadores[pos].nif = document.getElementById("nifModif").value;
        listaJugadores[pos].correo = document.getElementById("correoModif").value;
        listaJugadores[pos].comentarios = document.getElementById("comentarioModif").value;
        console.log(listaJugadores);
    });
    document.getElementById("borrarJugador").addEventListener("click",()=>{
      listaJugadores.splice(pos,1);
      console.log(listaJugadores);
    });
}

  function nuevoContrato(){

    document.getElementById("nuevoContrato").getElementsByTagName("select")[0].insertAdjacentHTML("beforeend",`<option value=0>Escoge un jugador</option>`);
    document.getElementById("nuevoContrato").getElementsByTagName("select")[1].insertAdjacentHTML("beforeend",`<option value=1>Escoge un equipo</option>`);

        listaJugadores.forEach((jugador)=>{
          document.getElementById("nuevoContrato").getElementsByTagName("select")[0].insertAdjacentHTML("beforeend",`<option value='${jugador.nif}'>${jugador.nombre+" "+jugador.apellidos}</option>`);
        });
        listaEquipos.forEach((equipo)=>{
          document.getElementById("nuevoContrato").getElementsByTagName("select")[1].insertAdjacentHTML("beforeend",`<option>${equipo}</option>`);
        });

          document.getElementById("guardar").addEventListener("click",()=>{

              if(document.getElementById("nuevoContrato").getElementsByTagName("select")[0].value != 0 && 
              document.getElementById("nuevoContrato").getElementsByTagName("select")[1].value != 1 &&
              document.getElementById("nuevoContrato").getElementsByTagName("input")[0].value.split("/")[2] < document.getElementById("nuevoContrato").getElementsByTagName("input")[1].value.split("/")[2]){

                  let pos = listaJugadores.findIndex((jugador)=> jugador.nif == document.getElementById("nuevoContrato").getElementsByTagName("select")[0].value);

                    

                    arrObjetos.push(JSON.stringify({"NombreEquipo": document.getElementById("nuevoContrato").getElementsByTagName("select")[1].value,
                    "nombreJugador":listaJugadores[pos].nombre+" "+listaJugadores[pos].apellidos,
                    "FechaInicio":document.getElementById("nuevoContrato").getElementsByTagName("input")[0].value,
                    "FechaFin":document.getElementById("nuevoContrato").getElementsByTagName("input")[1].value,
                    "importeAnual":document.getElementById("nuevoContrato").getElementsByTagName("input")[2].value,
                    "porcentaje":document.getElementById("nuevoContrato").getElementsByTagName("input")[3].value}));
                
                    for (let i = 0; i < arrObjetos.length; i++) {
                      localStorage.setItem(`info${i}`,arrObjetos[i]);
                    }

                }else{
                  alert("TIENES ALGUN CAMPO VACIO")
                }
              }
                );
                document.getElementById("central").innerHTML = "";
                document.getElementById("nuevoContrato").style.display = "block";
              }


       

  


onload = ()=>{
  //pintarJugadores();
  mostrarImagenes();
  document.getElementsByTagName("ul")[0].getElementsByTagName("li")[1].addEventListener("click",mostrarJugadores);

   document.getElementsByTagName("ul")[0].getElementsByTagName("li")[2].addEventListener("click",nuevoContrato);
}