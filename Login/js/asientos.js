window.addEventListener('load',()=>{

    imprimirasientos();
});
    var precio = 0;
    var asientosSeleccionados = [];
    var objetosAsientos = [];
    var carrito = [];

    function imprimirasientos(){
        var listaAsientosOcupados = [];
        
        let cantidadAsietos = 25;
            
        var contenido = "<table><tbody>";
        for (let i = 0; i <cantidadAsietos; i++) {
                contenido += `<tr>`;

            for (let j = 0; j < cantidadAsietos; j++) {
                contenido += `<td><div class='posicionasiento' id="F${i}-C${j}" onclick='numAsiento("${i}","${j}")'></div>`;
            }
             contenido += `</tr>`;
        }
        contenido += `</tbody></table>`;

        document.getElementById('asientos').innerHTML += contenido;

        asientosDeluxe();
        generarAsientosOcupados(listaAsientosOcupados);
        ocultarColumnasEscalera();
        }
// Crear asientos rojos que tendran mas coste
        function asientosDeluxe(){
            for (let i = 0; i < 25; i++) {
                let fila = i;
                for (let j = 0; j < 4; j++) {
                    let columna = j;
                    let id = `F${fila}-C${columna}`;
                    document.getElementById(id).className = 'asientosDeluxe';
                }
                
                for (let i = 0; i < 25; i++) {
                    let filaFinal = i;
                    for (let j = 20; j < 25; j++) {
                        let columnaFinal = j;
                        let idFinal = `F${filaFinal}-C${columnaFinal}`;
                        document.getElementById(idFinal).classList.remove("posicionasiento");
                        document.getElementById(idFinal).className = 'asientosDeluxe';
                    }
            }
        }
        }
        //Generamos los asientos que son escogidos y los añadimos al localstorage
    function numAsiento(y,x){

        if(document.getElementById(`F${y}-C${x}`).className == "posicionasiento" || document.getElementById(`F${y}-C${x}`).className == "asientosDeluxe"){

        asientosSeleccionados.push("Columna: "+(parseInt(x)+parseInt(1))+" fila: "+(parseInt(y)+parseInt(1)));

        
        
        let contador = 0;
        let nuevoAsiento = new Entrada(contador++,
            localStorage.getItem("asientos"),
            JSON.parse(localStorage.getItem("usuario")).email,
            document.getElementById(`F${y}-C${x}`).className,
            document.getElementById(`F${y}-C${x}`).className
            );
            objetosAsientos.push(nuevoAsiento);
            console.log(objetosAsientos);

            document.getElementById(`F${y}-C${x}`).className = "asientoSeleccionado";

            document.getElementById("posicionAsiento").innerHTML = "";
            asientosSeleccionados.forEach((imprimir)=>{
                
                document.getElementById("posicionAsiento").innerHTML += `<h3 id='añadidos'>${imprimir}</h3>`;


            })

    }else{
        document.getElementById(`F${y}-C${x}`).className = "posicionasiento";
            let posicion = asientosSeleccionados.findIndex((asiento)=>asiento == document.getElementById(`añadidos`).innerHTML);

        asientosSeleccionados.splice(posicion,1);

        document.getElementById("posicionAsiento").innerHTML = "";
            asientosSeleccionados.forEach((imprimir)=>{
                
                document.getElementById("posicionAsiento").innerHTML += `<h3 id='añadidos'>${imprimir}</h3>`;

            })
        }
        
    }
        //GENERAMOS ASIENTOS OSCUROS PARA QUE NO PUEDAN SER UTILIZADOS
    function generarAsientosOcupados(lista){
        
        for (let i = 0; i < Math.floor(75+(Math.random()*50)); i++) {
            let fila    = Math.floor((Math.random()*23));
            let columna = Math.floor((Math.random()*23));
            let id = `F${fila}-C${columna}`;

            document.getElementById(id).className = "asientoOcupado";
            
            lista.push(id);

            document.getElementById(id).onclick = null;

        }
    }

    //ocultamos asientos para que la sala tenga una forma simetrica
    function ocultarColumnasEscalera(){
        var asientosOcupados = [];
        var ocultarColumna = [4,5,6,18,19,20]
        for (let i of ocultarColumna) {
                for (let j = 0; j < 25; j++) {
                    
                    asientosOcupados.push(`F${j}-C${i}`);
                }
            }
            asientosOcupados.forEach(asiento => {
                document.getElementById(asiento).className = 'asientosOcultos';
            });
    }
    
    
    function calcularPrecio(){
        objetosAsientos.forEach((precioEntrada)=>{
            console.log(precioEntrada.precio);
           precio += precioEntrada.precio;
           console.log(precio);

           })
           return Math.floor(precio);
    }
    function restarPrecio(){
        contador = 0;
           precio -= objetosAsientos[contador].precio;
            contador++;
            asientosSeleccionados.length == 0 ? precio = 0
            : precio = precio;
            
           return precio;
    }


    //Añadir y mostrar Carrito
    function resumenCompra(){
        localStorage.setItem("asientos",JSON.stringify(asientosSeleccionados));
        
        if(JSON.parse(localStorage.getItem("asientos")).length >= 1){
            alert("Articulo añadido al carrito con exito");
        document.getElementById("carrito").addEventListener("click",()=>{

            let divCarrito = document.createElement("div");

                divCarrito.id ="divCarrito";

                document.body.append(divCarrito);

                if(document.getElementById("divCarrito").className == "divCarrito"){

                    document.getElementById("divCarrito").className = "divCarritoDesaparecer";

                }else{

                    document.getElementById("carrito").style.float = "left";
                    document.getElementById("divCarrito").className = "divCarrito";
                }
               //ESCRIBIMOS EN EL CARRITO LA INFORMACION DE PELICULAS QUE QUEREMOS OBTENER

               
               //localStorage.setItem("resumenCompra",JSON.parse(localStorage.getItem("usuario")).nombre);
               
                document.getElementById("divCarrito").innerHTML = "<h1 class='centrarTituloCarrito'>Carrito</h1>";

                asientosSeleccionados.forEach((asientos)=>{
                document.getElementById("divCarrito").innerHTML += 
                `<div class='divCarritoTexto'>
                <p class='textoCarrito' ><img src='imagenPapelera.png' id='${asientos}' onclick='eliminarProducto(event)'>  Asientos: ${asientos}
                <img class='imgPelicula' src='${JSON.parse(localStorage.getItem("Pelicula")).imagen}'></p>
                </div><br>`;

            })
            document.getElementById("divCarrito").innerHTML += `<p class='textoCarrito' id="compra">Cantidad: ${asientosSeleccionados.length} Precio: ${calcularPrecio('+')}</p>`;
        });
    }else{
        alert("Para añadir al carrito debes elegir almenos un asiento");
    }
    }

    function eliminarProducto(event){
        let pos = asientosSeleccionados.findIndex((asiento)=> asiento == event.target.id);

        asientosSeleccionados.splice(pos,1);
        console.log(asientosSeleccionados);

        event.target.parentNode.parentNode.innerHTML = "";

        document.getElementById("compra").innerHTML = `<p>Cantidad: ${asientosSeleccionados.length} Precio: ${restarPrecio()}</p>`;
    }
    