
    var asientos = document.getElementById("asientos");


        var asientosTotales = 24; 

        var contenido = "<table><tbody>";
            
    for (let i = 1; i < asientosTotales; i++) {
            contenido += `<tr class=filaseleccionada>`;
                for (let j = 1; j < asientosTotales; j++) {
                    contenido += `<td class=asientoSeleccionado value=${j}><input type=checkbox value=${i}></td>`;
                }
                contenido += "</tr>";
    }
    contenido += "</tbody></table>";
    asientos.innerHTML = contenido;

    var filaSeleccionada = document.querySelector('.filaseleccionada');
        var asientoSeleccionado = document.querySelector('.asientoSeleccionado');

        filaSeleccionada.addEventListener('click',function(evento){
        console.log("Fila: "+evento.target.value);
    })
    asientoSeleccionado.addEventListener('click',function(asiento){
        console.log("asiento: "+asiento.target.value);
    })
    