
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
            checked.style.border = "";
            if(checked.checked){
                listaMarcados.push(checked);
            }
        });
        console.log(listaMarcados);
    if(listaMarcados.length < 2){
        listaChecked.forEach((input) => {
            input.style.border = "2px solid red";
        });
    }
}

onload = ()=>{
    document.getElementById("btnRecibir").addEventListener("click",()=>{
        comprobarPuntos();
        comprobarCiudad();
        comprobarCheckbox();
    });
}

