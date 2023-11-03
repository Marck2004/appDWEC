window.addEventListener('load',()=>{

    imprimirasientos();
});

    function imprimirasientos(){
        var listaAsientosOcupados = [];
        
        let cantidadAsietos = 25;
            
        var contenido = "<table><tbody>";
        for (let i = 0; i <cantidadAsietos; i++) {
                contenido += `<tr>`;

            for (let j = 0; j < cantidadAsietos; j++) {
                contenido += `<td><input type=checkbox class='posicionasiento' id="F${i}-C${j}" onclick='numAsiento("${i}","${j}")'></td>`;
            }
             contenido += `</tr>`;
        }
        contenido += `</tbody></table>`;

        document.getElementById('asientos').innerHTML += contenido;

        generarAsientosOcupados(listaAsientosOcupados);
        ocultarColumnasEscalera();
        }

    function numAsiento(y,x){
        console.log("Asiento: "+x+" fila: "+y);
    }

    function generarAsientosOcupados(lista){
        
        for (let i = 0; i < Math.floor(10+(Math.random()*50)); i++) {
            let fila    = Math.floor((Math.random()*23));
            let columna = Math.floor((Math.random()*23));
            let id = `F${fila}-C${columna}`;

            document.getElementById(id).checked = true;
            lista.push(id);
        }
        console.log(lista);
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
            console.log(asientosOcupados);
    }
