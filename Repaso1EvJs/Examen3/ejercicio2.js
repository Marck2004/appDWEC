var Vinilos = [
    '25996_1.jpg','25996_2.jpg','25997_1.jpg','25997_3.jpg','26650_3.jpg','26704_3.jpg','26868_1.jpg','26868_2.jpg','26869_1.jpg','26869_2.jpg','26873_1.jpg'
]
var Laminas = [
    '26873_2.jpg','27095_3.jpg','27356_3.jpg','27429_1.jpg','27429_2.jpg','27773_3.jpg','28155_1.jpg','28155_2.jpg','28192_3.jpg','28192_4.jpg','29776_3.jpg'
]
var Otros = [
    '30390_3.jpg','30473_1.jpg','31386_1.jpg','31386_2.jpg','31469_3.jpg'
]
var listaCuadros = Vinilos.concat(Laminas.concat(Otros));

function mostrarCuadros(lista){
    let divExposicion = document.getElementById("exposicion");
    divExposicion.innerHTML = "";
    let tabla = document.createElement("table");
    let tr = document.createElement("tr");
    lista.forEach((cuadro,index) => {
        let td = document.createElement("td");
        td.insertAdjacentHTML("beforeend",`
        <img src='pagina2_files/${cuadro}' style='width:50px;heigth=50px;'><br>
        <button onclick='ejecutarCompra("${cuadro}",event)'>CONTRATAR</button><br>
        <button onclick='ejecutarAlquiler("${cuadro}",event)'>ALQUILAR</button><br>
        CANTIDAD: <input type='text'><br>
        DURACION: <select class='selectDuracion'><option value=0>Escoge</option></select>`);

        if(index % 4 == 0){
            tr = document.createElement("tr");
            tabla.appendChild(tr);
        }
        tr.appendChild(td);
    });
    divExposicion.appendChild(tabla);
    rellenarSelect();
}
function rellenarSelect(){
    let select = [...document.getElementsByClassName("selectDuracion")];

    for (let i = 0; i < select.length; i++) {
        for (let j = 1; j <= 20; j++) {
            let option = document.createElement("option");
            option.value = i;
            let texto = document.createTextNode(j);
            option.appendChild(texto);
            select[i].appendChild(option);
        }

    }
}
function mostrarSeleccion(){
    let selectCuadros = document.getElementById("central").getElementsByTagName("select")[0];
    selectCuadros.addEventListener("change",()=>{

        switch (selectCuadros.value) {
            case "Vinilos":
                mostrarCuadros(Vinilos)
                break;
            case "Laminas":
                mostrarCuadros(Laminas)
                break;
            case "Otros":
                mostrarCuadros(Otros)
                break;
            default:
                break;
        }
    });
}
function animarPublicidad(){

    $(`<img src='pagina2_files/${listaCuadros[0]}' id='imgAnimate'>`).
    css({"width":"100px","position":"absolute","opacity":0}).
    appendTo($("#publicidad")).
    animate({"opacity":1},3000);
    //no le pongo 100  mas porque me lo tapa
    $("#imgAnimate").animate({"width":150,"left":100},5000);
}
function ejecutarCompra(foto,event){
    let compras = [];
    let cajaCantidad = event.target.parentNode.getElementsByTagName("input")[0];
    let compra = {
        "foto":foto,
        "accion":event.target.textContent,
        "cantidad":cajaCantidad.value
    }
    if(cajaCantidad.value != 0){
        cajaCantidad.style.display = "none";
        event.target.disabled = true;
        compras.push(compra);
        localStorage.setItem("compras",JSON.stringify(compras));
    }else{
        alert("La caja cantidad debe tener un valor");
    }
}
function ejecutarAlquiler(foto,event){
    let alquileres = [];
    let cajaCantidad = event.target.parentNode.getElementsByTagName("input")[0];
    let desplegableDuracion = event.target.parentNode.getElementsByTagName("select")[0];
     let alquiler = {
        "foto":foto,
        "cantidad":cajaCantidad.value,
        "duracion":desplegableDuracion.value,
        "operacion":event.target.textContent
     }
    if(cajaCantidad.value != 0 && desplegableDuracion.value != 0){
        alquileres.push(alquiler);

        event.target.parentNode.getElementsByTagName("input")[0].remove();
        event.target.parentNode.getElementsByTagName("img")[0].remove();
        event.target.parentNode.getElementsByTagName("button")[0].remove();
        event.target.parentNode.getElementsByTagName("select")[0].remove();
        event.target.remove();
        localStorage.setItem("alquileres",JSON.stringify(alquileres));
    }else{
        alert("DEBES PONER VALORES");
    }
}
function mostrarStorage(){
    document.getElementById("derecha").getElementsByTagName("a")[0].href = "imprimirDatos.html";
    document.getElementById("derecha").getElementsByTagName("a")[1].href = "imprimirDatos.html";
    document.getElementById("derecha").getElementsByTagName("a")[2].href = "imprimirDatos.html";
}
onload=()=>{
    mostrarCuadros(listaCuadros);
    mostrarSeleccion();
    animarPublicidad();
    mostrarStorage();


}