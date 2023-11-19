window.addEventListener('load',()=>{

    imprimirasientos();
});
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

    function generarAsientosOcupados(lista){
        
        for (let i = 0; i < Math.floor(75+(Math.random()*50)); i++) {
            let fila    = Math.floor((Math.random()*23));
            let columna = Math.floor((Math.random()*23));
            let id = `F${fila}-C${columna}`;

            document.getElementById(id).className = "asientoOcupado";
            
            lista.push(id);

            
        }
    }
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

               let precio = 0;
               objetosAsientos.forEach((precioEntrada)=>{
                precio += precioEntrada.precio;
               })
               //localStorage.setItem("resumenCompra",JSON.parse(localStorage.getItem("usuario")).nombre);
               console.log(JSON.parse(localStorage.getItem("usuario")).nombre);
                document.getElementById("divCarrito").innerHTML = "<h1 class='centrarTituloCarrito'>Carrito</h1>";

                asientosSeleccionados.forEach((asientos)=>{
                document.getElementById("divCarrito").innerHTML += 
                `<div class='divCarritoTexto'>
                <p class='textoCarrito'>Asientos: ${asientos}
                <img class='imgPelicula' src='${JSON.parse(localStorage.getItem("Pelicula")).imagen}'></p>
                </div><br>`;
            })
            document.getElementById("divCarrito").innerHTML += `<p class='textoCarrito'>Cantidad: ${asientosSeleccionados.length} Precio: ${Math.floor(precio)}</p>`;
        });
    }else{
        alert("Para añadir al carrito debes elegir almenos un asiento");
    }
    }
    