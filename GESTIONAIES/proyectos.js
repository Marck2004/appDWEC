   var listaProyectos = [];

    function crearProyectos(){
        $.getJSON("proyectos.json",function(datos){
            listaProyectos = datos;
            cargarTabla(listaProyectos);
            
        })
    }
    crearProyectos();

    function volver(){
        location.href = "aterrizaje.html";
    }

    function cargarTabla(lista){
        
        var central = document.getElementById('central');

    var contenido = "<table style='border:1px solid red'><tbody>";

    lista.forEach(element => {
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

    function ordenarTabla(){

       listaProyectos.sort((a,b)=>{
            if(a>b) {
            return 1 
        }else{ 
            return -1
        }
    });

    
    cargarTabla(listaProyectos);

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
                                    <p>
                                    <span>Nombre</span>
                                    <input type="text" id="Nombre">
                                    </p>
                                    <p>
                                    <span>descripcion</span>
                                    <input type="text" id="descripcion">
                                    </p>
                                    <p>
                                    <span>idCliente</span>
                                    <input type="text" id="idCliente">
                                    </p>
                                    <p>
                                    <input type="submit" value="enviar" onclick="crearProyecto()">
                                    </p>
                                    <p>
                                    <input type="reset" value="Cancelar">
                                    </p>
                                    </div>`;
        let nuevoCodigo = document.getElementById('codigo').value.trim();
        let nuevoNombre = document.getElementById('Nombre').value.trim();
        let nuevaDescripcion = document.getElementById('descripcion').value.trim();
        let nuevoIdCliente = document.getElementById('idCliente').value.trim();
    var crearNuevoProyecto = (new Proyecto(nuevoCodigo,nuevoNombre,nuevaDescripcion,nuevoIdCliente));
    listaProyectos.push(crearNuevoProyecto);
    }