    import { generarCartonAleatorio } from "./funcionesAuxiliares.js";

    var listaPartidas = [];
    let intervalo;
    async function pintarPartidas(){
        const datos = await fetch("consultaPartidaActual.php");
        listaPartidas = await datos.json();
        console.log(listaPartidas);
        if (listaPartidas.IdPartida != 0){
        generarTablaNumerosActuales();
        
        }
        }
        let partidasFuturas=[];
        async function cargarPartidasFuturas(){
            let respuesta = await fetch("partidas.json");
            partidasFuturas = await respuesta.json();
            pintarTabla(partidasFuturas);
        }

    function pintarTabla(lista){
        let tbody = document.getElementById("tablapartidasFuturas").getElementsByTagName("tbody")[0]; 
        
        lista.forEach((partida)=>{
            let tr = document.createElement("tr");
            tbody.appendChild(tr);
            tr.insertAdjacentHTML("beforeend",`<td>${partida.Fecha}</td>`);
            tr.insertAdjacentHTML("beforeend",`<td>${partida.Hora}</td>`);
            tr.insertAdjacentHTML("beforeend",`<td>${partida.NumCartones}</td>`);
            tr.insertAdjacentHTML("beforeend",`<td>${partida.Premio}</td>`);
            tr.insertAdjacentHTML("beforeend",`<td><button onclick='comprarCarton(${partida.idPartida})'>COMPRAR</button></td>`);
        });
    }

    async function generarTablaNumerosActuales(){

        let contenido="";

        for(let i=0;i<10;i++){
            contenido+="<tr>";
            for(let j=0;j<10;j++){
                let valor = (i*10)+j+1;        

                    contenido+=`<td>${valor}</td>`;
                
            }
            contenido+="</tr>";
        }
        $("#tablaNumerosActuales").html(contenido);
    }

    window.comprarCarton = comprarCarton;
    async function comprarCarton(id){
        
        let pos = partidasFuturas.findIndex((partida) => partida.idPartida == id);
        document.getElementById("premio").innerHTML = partidasFuturas[pos].Premio;
        document.getElementById("numero").innerHTML = partidasFuturas[pos].NumCartones;

        let carrito = [];

        if(localStorage.getItem("carrito") > 0){
            carrito = JSON.parse(localStorage.getItem("carrito"));
        }
        let entrada = {
            "idPartida":id,
            "carton":await generarCartonAleatorio()
        }
        console.log(entrada);
        carrito.push(entrada);
        localStorage.setItem("carrito",JSON.stringify(carrito));

        generarTablaCarton(id);
    }
    var carrito = [];

    async function generarTablaCarton(idPartida){
        
        if(localStorage.getItem("carrito")){
            carrito = JSON.parse(localStorage.getItem("carrito"));       
        }

        let posicionCarton = carrito.findIndex((partida)=>partida.idPartida == idPartida);
        let tabla = document.getElementById("tablaCarton");

        if(posicionCarton== -1){
            tabla.innerHTML = "<tr><td>NO TIENES CARTON</td></tr>";
        }else{
            let carton = [];
            let listaPremio = [];
            for (let i = 0; i < 91; i++) {
                listaPremio.push("");
                listaPremio.splice(Math.floor(Math.random() * listaPremio.length),0,carrito[posicionCarton].carton[i]);
            }

            carton.push(carrito[posicionCarton].carton);
            let i = 0;
            tabla.innerHTML = "";
            let insertarTr = document.createElement("tr");

            tabla.insertAdjacentElement("beforeend",insertarTr);
            let intervaloNumeros = setInterval(()=>{
                
                if(carton[0].length > i){
                insertarTr.insertAdjacentHTML("beforeend",`<td>${carton[posicionCarton][i]}</td>`);
            }
                let numerosActuales = [...document.getElementById("tablaNumerosActuales").querySelectorAll("td")];
                let random = Math.floor(Math.random()* 100);
                    let pos = numerosActuales.findIndex((numeroActual)=>numeroActual.innerHTML == listaPremio[i]);

                    if(pos == -1){
                        if(numerosActuales[random].className != "numeroPremiado"){
                            numerosActuales[random].className = "numeroNoPremiado";
                        }
                        
                    }else{
                        numerosActuales[pos].className = "numeroPremiado";
                    }
                    i = i + 1;

                if(i == 100){
                    console.log("Ha finalizado");
                    clearInterval(intervaloNumeros);
                }
        },1000);
        console.log(carton);
        }

    }
onload = ()=>{
    document.getElementById("tablaCarton").innerHTML = "<tr><td>NO TIENES CARTON</td></tr>";

    pintarPartidas();
    cargarPartidasFuturas();
}