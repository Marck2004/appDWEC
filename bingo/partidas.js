    import { generarCartonAleatorio } from "./funcionesAuxiliares.js";

    var listaPartidas = [];

    async function pintarPartidas(){
        const datos = await fetch("partidas.json");
        listaPartidas = await datos.json();

        pintarTabla(listaPartidas);
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
    window.comprarCarton = comprarCarton;
    function comprarCarton(id){
        let carrito = [];

        if(localStorage.getItem("carrito") > 0){
            carrito = JSON.parse(localStorage.getItem("carrito"));
        }
        let entrada = {
            "idPartida":id,
            "carton":generarCartonAleatorio()
        }
        carrito.push(entrada);
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }
    
    function generarTablaCarton(idPartida){
        let carrito = [];

        if(localStorage.getItem("carrito") > 0){
            carrito = JSON.parse(localStorage.getItem("carrito"));
        }
        let posicionCarton = carrito.findIndex((partida)=>partida.idPartida === idPartida);
        let tabla = document.getElementById("tablaCarton");

        if(posicionCarton!= -1){
            tabla.innerHTML = "<tr><td>NO TIENES CARTON</td></tr>";
        }else{
            
        }

        

    }
onload = ()=>{
    pintarPartidas();
    generarTablaCarton(1);
    generarNumerosActuales();
}