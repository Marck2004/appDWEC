var ciudades =
[
    "Avila",
    "Barcelona",
    "Burgos",
    "Madrid",
    "Toledo",
    "Sevilla",
    "Huelva",
    "Valencia",
    "Zaragoza"
];

function pintarTabla(event){

        event.target.style.backgroundColor = "red";

        if(event.target.cellIndex == 0){
            for (let i = 0; i < ciudades.length; i++) {
                event.target.parentNode.style.backgroundColor = "red";
            }
        }else if(event.target.cellIndex>0){

            var filas = document.getElementById("ruta").querySelectorAll("tr");

            // Crear un array de arrays para almacenar las celdas
            var filasColumnas = [];

            // Iterar sobre cada fila y obtener las celdas de esa fila
            filas.forEach(function(fila) {
                var celdas = [...fila.querySelectorAll("td")];
                filasColumnas.push(celdas);
                    });

            for (let i = 0; i <= ciudades.length; i++) {

                filasColumnas[i][event.target.cellIndex].style.backgroundColor = "red";
            }
        }
        document.getElementById("parte1").getElementsByTagName("button")[0].addEventListener("click",()=>{

            let inputColoreado = document.querySelectorAll("td[style*='background-color: red']"); 

            console.log(inputColoreado[0]);
            console.log(inputColoreado[event.target.cellIndex].innerHTML);
            if(inputColoreado[0].innerHTML != inputColoreado[1].innerHTML){
                document.getElementById("destinos").insertAdjacentHTML("beforeend",`<tr><td>${inputColoreado[0].innerHTML}</td><td>${inputColoreado[1].innerHTML}</td><td>${inputColoreado[event.target.cellIndex].innerHTML}</td></tr>`)
            }
        })
}



onload=()=>{

    var td = [...document.getElementById("ruta").querySelectorAll("td")];

        td.forEach((celda)=>{
            for (let i = 0; i < ciudades.length; i++) {
                if(celda.innerHTML == ciudades[i]){
                    celda.addEventListener("click",pintarTabla);
                }
            }
            
        })
}