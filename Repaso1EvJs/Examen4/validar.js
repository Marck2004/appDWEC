function comprobarPuntos(){
    let input = document.getElementById("ejercicio3").getElementsByTagName("input")[0];
    let storage = JSON.parse(localStorage.getItem("clicks"));
    console.log(storage);
    let suma = 0;
    storage.forEach((elemento) => {
        if(elemento.Puntos != undefined){
            suma += parseInt(elemento.Puntos);
        }
    });
    console.log(suma);
    input.value = suma;
}
function comprobarFecha(separador){
    let caja = document.getElementById("ejercicio3").getElementsByTagName("input")[1].value;

    let dia = caja.split(separador)[0];
    let mes = caja.split(separador)[1]-1;
    let año = caja.split(separador)[2];

    let fechaIntroducida = new Date(año,mes,dia);
    let fechaActual = new Date();

    fechaActual.setDate(fechaActual.getDate() +3);

    

    if(dia == fechaIntroducida.getDate() || mes == fechaIntroducida.getMonth() ||
        año == fechaIntroducida.getFullYear()){
            if(fechaIntroducida < fechaActual){
                alert("INCORRECTP");
            }
        }
}
function comprobarCiudad(){
    let caja = document.getElementById("ejercicio3").getElementsByTagName("input")[2].value;
    let ciudades = [
        "MOSTOLES", "ALCORCON", "GETAFE", "LEGANES", "ARANJUEZ", "PARLA","VILLALBA"
    ]
    let pos = ciudades.findIndex((ciudad)=>ciudad == caja);
    if(pos == -1){
        console.log("INCORRECTO");
    }
}
function comprobarCheckbox(){
    let checkboxChecked = [...document.getElementById("ejercicio3").querySelectorAll("input[type='checkbox']:checked")];
    let checkbox = [...document.getElementById("ejercicio3").querySelectorAll("input[type='checkbox']")];
    if(checkboxChecked.length < 2){
        checkbox.forEach((input)=>{
            input.style.appearance = "none";
            input.style.width = "20px";
            input.style.height = "20px";
            input.style.border = "2px solid red";
            input.style.backgroundColor = "white";
        })
    }
}
onload=()=>{
    document.getElementById("btnRecibir").addEventListener("click",()=>{
        comprobarPuntos();
        comprobarFecha("/");
        comprobarCheckbox();
    });
}