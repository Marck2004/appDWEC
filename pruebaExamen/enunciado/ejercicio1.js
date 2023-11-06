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

    function eliminarCeldas(){
        setInterval(()=>{
            let tabla = document.getElementById("ruta");
            let filas = tabla.getElementsByTagName("tr");
            let columnas = tabla.getElementsByTagName("td");
           
            if (filas.length>2 && columnas.length > 2)
            filas[filas.length-1].remove();
            filas.children[columnas.length].remove();
        },3000);

    }

    
        onload = () =>{
            console.log(document.querySelectorAll("td"));
            document.querySelectorAll("td").forEach((nombre) => {
                nombre.addEventListener("click",()=>{
                    pintarTabla(nombre);
                })
            })
            eliminarCeldas();
        }
    