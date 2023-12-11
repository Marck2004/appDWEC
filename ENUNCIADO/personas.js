var listaPersonas=[
{
"Codigo":"1",
"Nombre":"Rocio",
"Puntuacion":20,
"Foto":"Sample1.png",
"PosicionCelda1":1,
"PosicionCelda2":100},
{"Codigo":"2",
"Nombre":"Hector",
"Puntuacion":15,
"Foto":"Sample2.png",
"PosicionCelda1":2,
"PosicionCelda2":99},
{"Codigo":"3",
"Nombre":"Lucia",
"Puntuacion":23,
"Foto":"Sample3.png",
"PosicionCelda1":3,
"PosicionCelda2":98},
{"Codigo":"4",
"Nombre":"Cristina",
"Puntuacion":30,
"Foto":"Sample4.png",
"PosicionCelda1":4,
"PosicionCelda2":97},
{"Codigo":"5",
"Nombre":"Juan",
"Puntuacion":2,
"Foto":"Sample5.png",
"PosicionCelda1":5,
"PosicionCelda2":96},
{"Codigo":"6",
"Nombre":"Luis",
"Puntuacion":80,
"Foto":"Sample6.png",
"PosicionCelda1":6,
"PosicionCelda2":95},
{"Codigo":"7",
"Nombre":"Elisa",
"Puntuacion":20,
"Foto":"Sample7.png",
"PosicionCelda1":7,
"PosicionCelda2":94},
{"Codigo":"8",
"Nombre":"Carlos",
"Puntuacion":20,
"Foto":"Sample8.png",
"PosicionCelda1":8,
"PosicionCelda2":93},
{"Codigo":"9",
"Nombre":"Carmen",
"Puntuacion":50,
"Foto":"Sample9.png",
"PosicionCelda1":9,
"PosicionCelda2":92},
{"Codigo":"10",
"Nombre":"Ivan",
"Puntuacion":20,
"Foto":"Sample10.png",
"PosicionCelda1":10,
"PosicionCelda2":91},
{"Codigo":"11",
"Nombre":"Irene",
"Puntuacion":20,
"Foto":"Sample11.png",
"PosicionCelda1":11,
"PosicionCelda2":90},
{"Codigo":"12",
"Nombre":"Jorge",
"Puntuacion":20,
"Foto":"Sample12.png",
"PosicionCelda1":12,
"PosicionCelda2":51},
{"Codigo":"13",
"Nombre":"Pablo",
"Puntuacion":20,
"Foto":"Sample13.png",
"PosicionCelda1":13,
"PosicionCelda2":52},
{"Codigo":"14",
"Nombre":"Antonio",
"Puntuacion":20,
"Foto":"Sample14.png",
"PosicionCelda1":14,
"PosicionCelda2":53},
{"Codigo":"15",
"Nombre":"Elena",
"Puntuacion":20,
"Foto":"Sample15.png",
"PosicionCelda1":15,
"PosicionCelda2":54},
{"Codigo":"16",
"Nombre":"Lucas",
"Puntuacion":20,
"Foto":"Sample16.png",
"PosicionCelda1":16,
"PosicionCelda2":55},
{"Codigo":"17",
"Nombre":"Marina",
"Puntuacion":20,
"Foto":"Sample17.png",
"PosicionCelda1":17,
"PosicionCelda2":56},
{"Codigo":"18",
"Nombre":"Alba",
"Puntuacion":20,
"Foto":"Sample18.png",
"PosicionCelda1":18,
"PosicionCelda2":57},
{"Codigo":"19",
"Nombre":"Daniel",
"Puntuacion":20,
"FechaNacimiento": "16/11/1990",
"PosicionCelda1":19,
"PosicionCelda2":58},
{"Codigo":"20",
"Nombre":"Julia",
"Puntuacion":20,
"Foto":"Sample20.png",
"PosicionCelda1":20,
"PosicionCelda2":59},
{"Codigo":"21",
"Nombre":"Miguel",
"Puntuacion":20,
"PosicionCelda1":21,
"PosicionCelda2":60},
{"Codigo":"22",
"Nombre":"Oscar",
"Puntuacion":20,
"Foto":"Sample22.png",
"PosicionCelda1":22,
"PosicionCelda2":61},
{"Codigo":"23",
"Nombre":"Beatriz",
"Puntuacion":20,
"Foto":"Sample23.png",
"PosicionCelda1":23,
"PosicionCelda2":62},
{"Codigo":"24",
"Nombre":"Clara",
"Puntuacion":20,
"Foto":"Sample24.png",
"PosicionCelda1":24,
"PosicionCelda2":63},
]

function despelgarPersonas(){
    let clicks = document.getElementById("totalClicks").innerHTML;
    let arrTd = [...document.getElementById("divTablero").querySelectorAll("td")];
    var contador = 0;
    let arrInfoPersona = [];  
    arrTd.forEach((celda)=>{
        
    listaPersonas.forEach((persona)=>{

     arrInfoPersona.push(`<div class='oculto'><img src='${'./imagenes/'+persona.Foto}' style='width:75px;height:75px;'></img><p>${persona.Nombre}</p></div>`);

        document.getElementById("divPersonas").getElementsByTagName("select")[1].insertAdjacentHTML("beforeend",`<option value='${persona.Codigo}'>${persona.Nombre}</option>`)

        

        if(persona.PosicionCelda1 == arrTd[contador].innerHTML ){
        arrTd[contador].insertAdjacentHTML("beforeend",arrInfoPersona[contador]);
    }

    if(persona.PosicionCelda2 == arrTd[contador].innerHTML){
        arrTd[contador].insertAdjacentHTML("beforeend",arrInfoPersona[contador]);
        }

    })

    contador++;
    
    celda.addEventListener("click",()=>{
        clicks++;
        document.getElementById("totalClicks").innerHTML= clicks;
        celda.children[0].className = "visible";
        localStorage.setItem("clicks",clicks);
    });
});
    let i = 0;
    let arrOculto = [...document.querySelectorAll(".oculto")];

        setInterval(() => {
            arrOculto[i].className="visible";
            i++;
        }, 5000);
};

function infoInput(event){

    let posicion ;

            posicion = listaPersonas.findIndex((codigo)=>codigo.Codigo == event.target.value);
        
        console.log(posicion);
        document.getElementById("divPersonas").getElementsByTagName("input")[0].value = `Celda 1 ${listaPersonas[posicion].PosicionCelda1} - Celda2 ${listaPersonas[posicion].PosicionCelda2}`;
}


onload=()=>{

    despelgarPersonas();

    document.getElementById("divPersonas").getElementsByTagName("select")[1].addEventListener("change",infoInput);


}