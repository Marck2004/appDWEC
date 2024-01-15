function validarUnaFecha(separador){
    let caja = document.getElementById("fechaValida");
    let dia = caja.value.split(separador)[0];
    let mes = caja.value.split(separador)[1]-1;
    let año = caja.value.split(separador)[2];
    let fecha = new Date(año,mes,dia);

    let fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate()+3);

    if(dia!=fecha.getDate() ||
        mes != fecha.getMonth() ||
        año != fecha.getFullYear()){
            console.log("FECHA NO VALIDA");
        }else{
            if(fecha > fechaActual){
                console.log("LA FECHA INTRODUCIDA ES MAYOR A HOY POR 3 DIAS");
            }
        }
}
onload=()=>{
    document.getElementById("boton1").addEventListener("click",()=>{
        validarUnaFecha("/");
    })
}