
    var listaProyectos = [];

    function añadirProyecto(){

        listaProyectos.push('Cepsa 1');
        listaProyectos.push('Bp');
        listaProyectos.push('Diseño');
        listaProyectos.push('Arquitectura');
        listaProyectos.push('Medicina');
        listaProyectos.push('Coches');
        listaProyectos.push('Cine');

    }
añadirProyecto();
function volver(){
    location.href = "aterrizaje.html";
}

function crearTabla(){

    let central = document.getElementById('central');

    var contenido = `<table><tbody>`;

        for (let i = 0; i < listaProyectos.length; i++) {
            contenido += `<tr>`;

                contenido += `<td>${listaProyectos[i]}</td>`;

            contenido += `</tr>`;
        }
        contenido += `</tbody></table>`;

    central.innerHTML = contenido;

}
onload = crearTabla;