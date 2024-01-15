var nombreCiudades = [
    "Avila","Barcelona","Burgos","Madrid","Toledo","Sevilla","Huelva","Valencia","Zaragoza"
];
function cogerCeldas(){
    let td = [...document.getElementById("ruta").querySelectorAll("td")];
    let tr = [...document.getElementById("ruta").querySelectorAll("tr")];
    let arrayPulsadosVertical = [];
    tr.splice(0,1);
    nombreCiudades.forEach((ciudad)=>{
        let pos = td.findIndex((celda)=>celda.innerHTML == ciudad);
        arrayPulsadosVertical.push(td[pos]);
    })

    let arrayPulsadosHorizontal = [];

    tr.forEach((fila)=>{
        arrayPulsadosHorizontal.push(fila.children[0]);
    })
    pintarTabla(arrayPulsadosHorizontal,arrayPulsadosVertical)
}
function pintarTabla(horizontal,vertical){
    horizontal.forEach((celda)=>{
        celda.addEventListener("click",()=>{
            celda.parentNode.style.backgroundColor = "red";
        })
    })
    vertical.forEach((celda)=>{
        celda.addEventListener("click",()=>{
            pintarVertical(celda);
        })
    })
}
function pintarVertical(celda){
    for (let i = 0; i < 9; i++) {
        celda.parentNode.nextElementSibling.children[celda.cellIndex].style.backgroundColor = "red";
    }
    
}
onload = ()=>{
cogerCeldas();
}