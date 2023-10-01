
    var listaProyectos = [];

    function crearProyectos(){
        listaProyectos.push('Medicina');
        listaProyectos.push('Restaurante');
        listaProyectos.push('Gasolinera');
        listaProyectos.push('Aeropueto');
        listaProyectos.push('Colchones');
        listaProyectos.push('Menaje');
        listaProyectos.push('Fabrica');
    }
crearProyectos();

    function volver(){
        location.href = "aterrizaje.html";
    }

    function cargarTabla(){

        var central = document.getElementById('central');

    var contenido = "<table style='border:1px solid red'><tbody>";

        listaProyectos.forEach(element => {
        contenido += `<tr style='border:1px solid red'>`;
            contenido += `<td style='border:1px solid red'>${element}</td>`;
            contenido += `</tr>`;
        });

    contenido += `</tbody></table>`;

    central.innerHTML = contenido;
    return contenido;
    }
onload = cargarTabla;

    function ordenarTabla(){

       listaProyectos.sort((a,b)=>{
            if(a>b) {
            return 1 
        }else{ 
            return -1
        }
    });

    
    cargarTabla();

    }
    function imprimirPantalla(){
        window.print();
    }