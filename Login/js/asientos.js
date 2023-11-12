window.addEventListener('load',()=>{

    imprimirasientos();
    resumenCompra();
});
    var asientosSeleccionados = [];
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

    function numAsiento(y,x){

        if(document.getElementById(`F${y}-C${x}`).className == "posicionasiento" || document.getElementById(`F${y}-C${x}`).className == "asientosDeluxe"){

        asientosSeleccionados.push("Columna: "+(parseInt(x)+parseInt(1))+" fila: "+(parseInt(y)+parseInt(1)));

            document.getElementById(`F${y}-C${x}`).className = "asientoSeleccionado";

            document.getElementById("posicionAsiento").innerHTML = "";
            asientosSeleccionados.forEach((imprimir)=>{
                
                document.getElementById("posicionAsiento").innerHTML += `<h3 id='añadidos'>${imprimir}</h3>`;

            })
       // document.getElementById("posicionAsiento").innerHTML += "<h3 id='añadidos'>Columna: "+(parseInt(x)+parseInt(1))+" fila: "+(parseInt(y)+parseInt(1))+"</h3>";

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

    function resumenCompra(){
        localStorage.setItem("asientos",JSON.stringify(asientosSeleccionados));

        document.getElementById("carrito").addEventListener("click",()=>{
           
            let divCarrito = document.createElement("div");

                divCarrito.id ="divCarrito";

                document.body.append(divCarrito);

                if(document.getElementById("divCarrito").style.display == "block"){
                    console.log("aqui");
                    document.getElementById("divCarrito").style.display = "none";
                    document.getElementById("carrito").style.float = "left";
                }else{
                    console.log("entra");
                    document.getElementById("carrito").style.float = "left";
                    document.getElementById("divCarrito").style.display = "block";
                }
               // console.log(JSON.parse(localStorage.getItem("usuario")).email);
                document.getElementById("divCarrito").innerHTML += "<h1>Carrito</h1>";
        });
    }