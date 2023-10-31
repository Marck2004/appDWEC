
var arrComidas = [];
var carrito = [];
$.getJSON("comidas.json",((datos)=>{
    arrComidas = datos;
    console.log(arrComidas);
    pintarTablaComidas(arrComidas);
}));

onload = ()=>{
    leerCarritoDeCookie();
    document.querySelector(".imagenPequena").addEventListener("click",()=>{
        arrComidas.forEach((comida)=>{
            mostrarCarrito(comida.idComida);
        });
        
    });

}

function leerCarritoDeCookie(){
    let datosCookie = document.cookie.split(";");
        datosCookie.forEach( (cookie) => {
            let nombre = cookie.split("=")[0];
            let valor = cookie.split("=")[1]; 
            if (nombre == "carrito"){
                carrito = JSON.parse(valor);  
            }
        });
        document.getElementById("contadorCarrito").innerHTML = carrito.length;
}

function pintarTablaComidas(listaComidas){
    let central = document.getElementById("central");
        let contenido = "<table><tbody>";
        /*boton = document.createElement("button");
        texto = document.createTextNode("PULSAME");
        boton.appendChild(texto);*/

    listaComidas.forEach((comida) => {
        contenido += `<tr>`;
        for(propiedad in comida){
           contenido +=`<td>${comida[propiedad]}</td>`;
        }
        contenido += `<td>`;
        contenido += `<button type=button onclick='comprar1(${comida.idComida})'>PULSAME</button>`;
        contenido += `</td>`;
        contenido += `<td>`;
        contenido += `<button type=button onclick='comprar2(${comida.idComida})'>ELIMINAR</button>`;
        contenido += `</td>`;
        `</tr>`;
    });
    contenido += `</tbody></table>`;
    central.innerHTML = contenido;
}

    function comprar1(idComida){

        posicion = carrito.findIndex((compra) => compra.idComida == idComida);
        if(posicion != -1){
            carrito[posicion].cantidad++;
        }else{
            let compra = {
                "idComida":idComida,
                "cantidad":1
        }
        
        carrito.push(compra);
    }
        document.cookie = "carrito="+JSON.stringify(carrito);
        document.getElementById("contadorCarrito").innerHTML = carrito.length;
    }
    function comprar2(idComida){

        var posEliminar = carrito.findIndex((eliminado) => eliminado.idComida == idComida);
        
        if(posEliminar != -1){
        if(carrito[posEliminar].cantidad > 1){
            carrito[posEliminar].cantidad--;
        }else{
            carrito.splice(posEliminar,1);
        }
            document.getElementById("contadorCarrito").innerHTML = carrito.length;

            document.cookie = "carrito="+JSON.stringify(carrito);
        }
    }

    function mostrarCarrito(idComida){
        let carritoMostrar = document.getElementById("carrito");

        var contenido2 = `<table style='border:2px solid black;'><tbody>`;
            carrito.forEach((comida) =>{
                var posicionBuscar = arrComidas.findIndex((comidas) => comidas.idComida == comida.idComida);

                contenido2 += `<tr style='border:2px solid black;'>`;
                
                    contenido2 += `<td style='border:2px solid black;'>${arrComidas[posicionBuscar].idComida}</td>`;
                    contenido2 += `<td style='border:2px solid black;'>${arrComidas[posicionBuscar].descripcion}</td>`;
                    contenido2 += `<td style='border:2px solid black;'>${comida.cantidad}</td>`;

                contenido2 += `</tr>`;
            });
            contenido2 += `</tbody></table>`;

            var buscarPrecio = carrito.findIndex((eliminado) => eliminado.idComida == idComida);
            var sumaCant = 0;
            var precios = 0;
            carrito.forEach((cantidadTotal) =>{
                sumaCant += cantidadTotal.cantidad;
            });
            precios = arrComidas[buscarPrecio].precio;
            console.log(buscarPrecio);
            console.log(arrComidas[buscarPrecio].precio);
                
            contenido2 += `Cantidad: ${sumaCant} Precio: ${precios}`;
        //contenido2 += `Cantidad: ${sumaCant}`;
        carritoMostrar.innerHTML = contenido2;
            
    }
    