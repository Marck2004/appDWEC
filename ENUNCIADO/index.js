var arrCiudades = ["MOSTOLES","ALCORCON","GETAFE","LEGANES","ARANJUEZ","PARLA","VILLALBA"];
function validarInfo(fecha){
    let numFallos = 0;

    let posicion = arrCiudades.findIndex((ciudad)=>ciudad == document.getElementById("ejercicio3").getElementsByTagName("input")[2].value);

    if(posicion == -1){
        document.getElementById("ejercicio3").getElementsByTagName("input")[2].style ="border:2px solid red";
        numFallos++;
    }else{
        document.getElementById("ejercicio3").getElementsByTagName("input")[2].style ="border:2px solid white";
    }


    let arrCheckbox = [...document.getElementById("ejercicio3").querySelectorAll("input ")];

    arrCheckbox.splice(0,3);
    let checkeado = 0;
        arrCheckbox.forEach((comprobar)=>{
            if(comprobar.checked){
                checkeado++;
            }
        })
        console.log(checkeado);
        if(checkeado >= 2){
            arrCheckbox.forEach((input)=>{
                input.style = "border:2px solid red";
                numFallos++;
            })
        }

        /*let dia = fecha.split("/")[0];
        let mes = fecha.split("/")[1]-1;
        let año = fecha.split("/")[2];

       let fechaValidada = new Date(año,mes,dia);

       fechaValidada.setDate(fecha.getDate()+3);

        if(dia == fechaValidada.getDate() && mes==fechaValidada.getMonth()
            && año==fechaValidada.getFullYear()){
                return console.log("fecha validada");
        }else{
            return console.log("fecha incorrecta");
        }*/
}

onload=()=>{
    document.getElementById("btnRecibir").addEventListener("click",validarInfo);
}