
function comprobarPuntos(){
    let puntos = 0;

    for (let i = 0; i < localStorage.length; i++) {
        if(JSON.parse(localStorage.getItem(`click${i}`)).resultado == "ACIERTO"){
            puntos += 1;
        }
        document.getElementById("ejercicio3").getElementsByTagName("input")[0].value = puntos;
    }
}
function comprobarCiudad(){

    let arrayCiudades = ["MOSTOLES","ALCORCON","GETAFE","LEGANES","ARANJUEZ","PARLA","VILLALBA"];

    let cajaCiudad = document.getElementById("ejercicio3").getElementsByTagName("input")[2];

        let pos = arrayCiudades.findIndex((ciudad)=>ciudad.toUpperCase() == cajaCiudad.value.toUpperCase());

            if(pos == -1){
                cajaCiudad.style.border = "2px solid red";
            }
        
}

function comprobarCheckbox(){
    let listaChecked = [...document.getElementById("ejercicio3").querySelectorAll("input[type='checkbox']")];
    let listaMarcados = [];
        listaChecked.forEach((checked) => {
            checked.style.border = "none";
            if(checked.checked){
                listaMarcados.push(checked);
            }
        });
        console.log(listaMarcados.length);
    if(listaMarcados.length < 2){
        listaChecked.forEach((input) => {
            
                input.style.border = "2px solid red !important";
            
        });
    }
}
function comprobarFecha(año,mes,dia){

    if(!año || !mes || !dia){
        document.getElementById("ejercicio3").getElementsByTagName("input")[1].style.border = "2px solid red";
        return;
    }
    let fechaActual = new Date();

    let fecha = new Date(año,mes-1,dia);

    fechaActual.setDate(fechaActual.getDate() +3);

    if(fechaActual > fecha){
            document.getElementById("ejercicio3").getElementsByTagName("input")[1].style.border = "2px solid red";
        }else{
            document.getElementById("ejercicio3").getElementsByTagName("input")[1].style.border = "2px solid black";
        }
}
onload = ()=>{
    document.getElementById("btnRecibir").addEventListener("click",()=>{
        comprobarPuntos();
        comprobarCiudad();
        comprobarCheckbox();
        let fecha = document.getElementById("ejercicio3").getElementsByTagName("input")[1].value;
        comprobarFecha(fecha.split("/")[0],fecha.split("/")[1],fecha.split("/")[2]);
    });
}

