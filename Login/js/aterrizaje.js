    window.addEventListener('load',()=>{
        mostrarPeliculas();  
    });
    cargarPeliculas('6');
    

    listaPeliculas = [];
    
    function cargarPeliculas(longuitudarray){
        $.getJSON("jsonExample/Peliculas.json",function(datos){
            listaPeliculas=datos;
            console.log(listaPeliculas);
            filtrarporNombre();
            
                contenido = "<table><tbody>";
                    
                var posicionarPeliculas = document.getElementById(`colocarPeliculas`);

            for (let i = 0; i < longuitudarray; i++) {
                contenido += `<tr>`
                
                contenido += `<td><img src=${listaPeliculas[i].imagen} onclick='aterrizarAsientos(listaPeliculas[${i}].imagen)'><h1 style=color:white;>${listaPeliculas[i].Nombre}</h1></td>`;
                i++;
                contenido += `<td><img src=${listaPeliculas[i].imagen} onclick='aterrizarAsientos(listaPeliculas[${i}].imagen)'><h1 style=color:white;>${listaPeliculas[i].Nombre}</h1></td>`;
                i++;
                contenido += `<td><img src=${listaPeliculas[i].imagen} onclick='aterrizarAsientos(listaPeliculas[${i}].imagen)'><h1 style=color:white;>${listaPeliculas[i].Nombre}</h1></td>`;
                
                `</tr>`; 
            }
            contenido += `</tbody></table>`;
            posicionarPeliculas.innerHTML = contenido;  
        })
    }

    function mostrarPeliculas(){
        let mostrarminPelis = document.getElementById('MostrarPeliculas');
        var seisPelis = true;
            
        mostrarminPelis.addEventListener('click',()=>{
        if(seisPelis){
            cargarPeliculas(listaPeliculas.length);
            seisPelis = false;
        }else if(seisPelis == false){
                cargarPeliculas('6');
                seisPelis=true;
        }
    });
    }
        
    
    function filtrarporNombre() {
        if(document.getElementById('Filtrar').value == "Nombre"){
        listaPeliculas.sort((a,b)=>{
            if (a.Nombre>b.Nombre) return 1
            else return -1;
        })
    }
        if(document.getElementById('Filtrar').value == "Tipo"){
            console.log("Entra al if");
            listaPeliculas.sort((a,b)=>{
                if (a.tipo>b.tipo) return 1
                else return -1;
            })
        /*
        var pelisFiltradas = [...listaPeliculas]
        var filtrarPeliculas = document.getElementById('colocarPeliculas');
        filtrarPeliculas.innerHTML = cargarPeliculas(listaPeliculas.length);
        console.log("ENTRA AL IF");
        console.log(listaPeliculas);
    */}
    
    }
    function aterrizarAsientos(imagen){
            
        let posicion = listaPeliculas.findIndex((pelicula) => pelicula.imagen == imagen);

        if(posicion !=-1){
            localStorage.setItem("Pelicula",JSON.stringify(listaPeliculas[posicion]));
            window.location.href = "sesiones.html";
        }
    }
