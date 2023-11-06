var ciudades = ['Avila','Barcelona','Burgos','Madrid','Toledo','Sevilla','Huelva','Valencia','Zaragoza'];
    var tabla = document.getElementById("ruta");
    var td = document.querySelectorAll("td");

    function pintarTabla(nombreCelda){
        console.log(nombreCelda);
    ciudades.forEach((nombreArr) => {

        if(nombreCelda.innerHTML == nombreArr){

            if(nombreCelda.parentNode == document.getElementsByTagName("tr")[0]){
            document.getElementsByTagName("tr")[0].addEventListener("click",()=>{
                for (let i = 0; i < ciudades.length; i++) {
                    document.getElementsByTagName("td")[nombreCelda.cellIndex].style.backgroundColor = "red";
                    document.getElementsByTagName("tr")[i].nextElementSibling.children[nombreCelda.cellIndex].style.backgroundColor = "red";
                }
                
            });
        }else{    
            let padre = nombreCelda.parentNode;
            if(nombreCelda.parentNode){
            padre.style.backgroundColor = "red";
        }
        }
        }
    });
    }

    /*function eliminarCeldas(){
        setInterval(()=>{
            let tabla = document.getElementById("ruta");
            let filas = tabla.getElementsByTagName("tr");
            let columnas = tabla.getElementsByTagName("td");
           
            if (filas.length>2 && columnas.length > 2)
            filas[filas.length-1].remove();
            filas.children[columnas.length].remove();
        },3000);

    }*/

    function elegirDestino(nombre){
        
        let tablaDestino = document.getElementById("destinos");

           let trDestino = tablaDestino.getElementsByTagName("tr")[1];
        
            trDestino.style.display = "none";

        let arrTd = [...document.getElementById("ruta").querySelectorAll("td")];
        
            let posTd = arrTd.findIndex((td) => td.style.backgroundColor === nombre.style.backgroundColor && td.parentNode.style.backgroundColor === td.style.backgroundColor);

        
        let crearTr = document.createElement("tr");

            let crearTd = document.createElement("td");
            let crearTd2 = document.createElement("td");
            let crearTd3 = document.createElement("td");

            let texto = document.createTextNode(nombre.innerHTML);
            let texto2 = document.createTextNode(nombre.innerHTML);
            let texto3 = document.createTextNode(arrTd[posTd].innerHTML);

           tablaDestino.appendChild(crearTr);

            crearTd.appendChild(texto2);
            
            crearTd2.appendChild(texto);

            

            crearTd3.appendChild(texto3);
            
            crearTr.appendChild(crearTd);
            crearTr.appendChild(crearTd2);
            crearTr.appendChild(crearTd3);

        
        /*contenido += `<td>${nombre.innerHTML}</td><td>${nombre.innerHTML}</td><td>${arrTd[posTd].innerHTML}</td>`;    
        trDestino.innerHTML = contenido;
*/
    }
    
        onload = () =>{
            
            document.querySelectorAll("td").forEach((nombre) => {
               
                nombre.addEventListener("click",()=>{
                    console.log(nombre);
                    pintarTabla(nombre);
                    document.querySelector("button[type=button]").addEventListener("click",()=>{
                        elegirDestino(nombre);
                    });
                })
            
            })
            //eliminarCeldas();
            
        }
    