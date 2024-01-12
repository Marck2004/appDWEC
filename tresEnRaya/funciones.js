
export function imprimirTablero(){
    let tabla = document.createElement("table");

    let tablero = document.getElementById("tablero");
    
    tablero.appendChild(tabla);

    for (let i = 0; i < 3; i++) {

        let tr = document.createElement("tr");
        tabla.insertAdjacentElement("beforeend",tr);

        for (let j = 0; j < 3; j++) {

            let td = document.createElement("td");
            tr.insertAdjacentElement("beforeend",td);
            //td.addEventListener("click",clickCelda);
        }

    }
    let boton = document.createElement("button");
    boton.id = "botonEmpiece";
    tablero.insertAdjacentElement("afterend",boton);

    boton.innerHTML="EMPEZAR!!!";
}

export function empezarJuego(){
    let empezar = document.getElementById("botonEmpiece");

    empezar.addEventListener("click",()=>{

        empezar.disabled=true;

        let listaCeldas = document.querySelectorAll("td");

        listaCeldas.forEach((celda)=>{
            celda.addEventListener("click",()=>{
                clickCelda(event);
                comprobarGanador();
            });
        })
    });
}
function clickCelda(event){
    
    let listaTds = [...document.querySelectorAll("td")];

    console.log(listaTds[Math.floor(Math.random()*9)]);

            event.target.innerHTML="<p class='textoCelda'>X</p>";

            listaTds.forEach((td)=>{
                td.removeEventListener("click",clickCelda);
            })

            setTimeout(()=>{
                listaTds.forEach((td)=>{
                td.addEventListener("click",clickCelda);
            })

            let listaAux = listaTds.filter((celda)=>celda.innerHTML == "");
            let random = Math.floor(Math.random() * listaAux.length);

            if(listaAux.length > 0){
                listaAux[random].innerHTML = "<p class='textoCelda'>O</p>";
                listaAux[random].removeEventListener("click",clickCelda);
            }
            
        }
        ,1000);
      
}
function comprobarGanador(){
    let listaCeldas = [[...document.querySelectorAll("tr")],[...document.querySelectorAll("td")]];
    console.log(listaCeldas);
}
