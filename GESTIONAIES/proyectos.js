   var listaProyectos = [];

    function crearProyectos(){
        listaProyectos.push(new Proyecto(1,'Medicina','Proyeco para Medicina',1234));
        listaProyectos.push(new Proyecto(2,'Hosteleria','Proyeco para Hosteleria',4321));
        listaProyectos.push(new Proyecto(3,'Motocross','Proyeco para Motocross',9999));
        listaProyectos.push(new Proyecto(4,'Arquitectura','Proyeco para Arquitectura',1111));
        listaProyectos.push(new Proyecto(5,'CNP','Proyeco para CNP',2222));
        listaProyectos.push(new Proyecto(6,'Autoservicio','Proyeco para Autoservicio',3333));
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
            contenido += `<td style='border:1px solid red'>${element.Nombre}</td>`;
            contenido += `<td style='border:1px solid red'>${element.descripcion}</td>`;
            contenido += `<td style='border:1px solid red'>${element.idCliente}</td>`;
            
            /*for(propiedades in Proyecto){
                contenido += `<td'>${Proyecto[propiedades]}</td>`;
            };*/
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
    function crearProyecto(){
        document.body.innerHTML += `<div id="NuevoProyecto" 
                                    class="divCentrado"><h1>NUEVO PROYECTO</h1>
                                    <p>
                                    <span>Codigo</span>
                                    <input type="text" id="codigo">
                                    </p>
                                    </div>`;
    }
