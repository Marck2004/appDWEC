
var clicks=[];


function rellenarDesplegable(){
    listaPersonas.forEach((persona)=>{
        document.getElementById("divPersonas").getElementsByTagName("select")[1]
    .insertAdjacentHTML("beforeend",`<option value='${persona.Codigo}'>${persona.Nombre}</option>`)

    });
    }

    function rellenarInput(){

        let posicion = listaPersonas.findIndex((persona) => persona.Codigo == document.getElementById("divPersonas").getElementsByTagName("select")[1].value);
        document.getElementById("divPersonas").getElementsByTagName("input")[0].value=
        `Celda 1 ${listaPersonas[posicion].PosicionCelda1} - Celda2 ${listaPersonas[posicion].PosicionCelda2}`;
    }

    function rellenarTabla(){
        var TDS = [...document.getElementById("divTablero").querySelectorAll("td")];

        TDS.forEach((celda) => {
            let posicion = listaPersonas.findIndex((persona)=> persona.PosicionCelda1 == celda.textContent
                || persona.PosicionCelda2 == celda.textContent);
                if(posicion == -1){
                    celda.insertAdjacentHTML("beforeend",`<div class='oculto'><img src='imagenes/novale.png' style='width:75px;heigth:75px'><p>ERROR</p></div>`) ;
                }else{
                    celda.insertAdjacentHTML("beforeend",`<div class='oculto'><img src='imagenes/${listaPersonas[posicion].Foto}' style='width:75px;heigth:75px'><p>${listaPersonas[posicion].Nombre}</p></div>`);
                }
                celda.addEventListener("click",()=>{
                    mostrarCelda(event);
                    document.getElementById("totalClicks").textContent = parseInt(document.getElementById("totalClicks").textContent)+parseInt(1);
                });
        });
    }
    function mostrarCelda(event){

       var TDS = [...document.getElementById("divTablero").querySelectorAll("div [class='visible'] > p")];
        console.log(TDS);
               
       let objetivo =  event.target.getElementsByTagName("div")[0];
       objetivo.className = "visible";

       let posicion = TDS.findIndex((celda) => celda.textContent == objetivo.textContent);

       if(objetivo.getElementsByTagName("p")[0].innerHTML == "ERROR"){
        let click = {
            "NumClick":parseInt(document.getElementById("totalClicks").textContent)+parseInt(1),
            "NumCelda":event.target.textContent.slice(0,2),
            "Resultado":"ERROR",
            "Persona":"Codigo = -1"
        }
        console.log(click);
        clicks.push(click)
       }else if(posicion == -1){
        let click = {
            "NumClick":parseInt(document.getElementById("totalClicks").textContent)+parseInt(1),
            "NumCelda":event.target.textContent.slice(0,2),
            "Resultado":"POSIBLE",
            "Persona":objetivo.textContent
        }
        console.log(click);
        clicks.push(click)
       }else{
        let click = {
            "NumClick":parseInt(document.getElementById("totalClicks").textContent)+parseInt(1),
            "NumCelda":event.target.textContent.slice(0,2),
            "Resultado":"ACIERTO",
            "Persona":objetivo.textContent
        }
        document.getElementById("totalAciertos").innerHTML = parseInt(document.getElementById("totalAciertos").innerHTML) + parseInt(1); 
        console.log(click);
        clicks.push(click)
       }
       

       clicks.forEach((click,Indice) => {
        console.log(click.NumClick);
        localStorage.setItem(`click${Indice}`,JSON.stringify({
            "NumClick":click.NumClick,
            "NumCelda":click.NumCelda,
            "resultado":click.Resultado,
            "persona":click.Persona
        }));
       });
    }
    function mostrarCincoSegundos(){
        var TDS = [...document.getElementById("divTablero").querySelectorAll("td")];
        let mostrar = 0;
        
        const intervalId = setInterval(()=>{
            if(mostrar >= TDS.length){
                clearInterval(intervalId);
                window.location.href = "resultados.html";
            }else if(TDS[mostrar]){
                TDS[mostrar].getElementsByTagName("div")[0].className = "visible";
                mostrar++
            }else{
                clearInterval(intervalId);
                window.location.href = "resultados.html";
            }
        },5000);
        
    }


onload = ()=>{
    rellenarDesplegable();
    rellenarTabla();
    document.getElementById("divPersonas").getElementsByTagName("select")[1]
    .addEventListener("change",rellenarInput);
    
    mostrarCincoSegundos();
}
