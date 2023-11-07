var listaCiudades = [];
var ciudad0= new Array("MADRID","34ESPA&Ntilde;A",756,890,"CAPITAL DEL PAIS CON UNA GRAN CANTIDAD DE MUSEOS","madrid.gif");
var ciudad1= new Array("BARCELONA","34ESPA&Ntilde;A",236,1190,"CIUDAD COSTERA DEL MEDITERRANEO.","barcelona.gif");
var ciudad2= new Array("VALENCIA","34ESPA&Ntilde;A",324,650,"CAPITAL COSTERA. CIUDAD DE LAS ARTES Y LAS CIENCIAS","valencia.gif");
var ciudad3= new Array("LISBOA","33PORTUGAL",756,890,"CAPITAL DEL PAIS. CIUDAD COSTERA ATLANTICO","lisboa.gif");
var ciudad4= new Array("PARIS","31FRANCIA",1556,2890,"CAPITAL DEL PAIS CON UNA GRAN CANTIDAD DE MUSEOS","paris.gif");
var ciudad5= new Array("LONDRES","3OREINO UNIDO",2256,3890,"CAPITAL DEL PAIS. MUSEOS. BIG BEN","londres.gif");
var ciudad6= new Array("BERLIN","35ALEMANIA",1234,4890,"CAPITAL DEL PAIS. ZOO.AVENIDAS","berlin.gif");
var ciudad7= new Array("BERNA","36SUIZA",6345,990,"CAPITAL DEL PAIS.MUSEOS, RESTAURANTES, PARQUES","berna.gif");
var ciudad8= new Array("ROMA","37ITALIA",956,1190,"CAPITAL DEL PAIS. HISTORIA. MUSEOS. IGLESIAS","roma.gif");
var ciudad9= new Array("AMSTERDAM","38HOLANDA",2756,1190,"CAPITAL DEL PAIS. ","amsterdam.gif");
var ciudad10= new Array("VIENA","39AUSTRIA",1756,1290,"CAPITAL DEL PAIS. OPERA. MUSEOS.","viena.gif");
var ciudad11= new Array("BRUSELAS","40BELGICA",1056,5890,"CAPITAL DEL PAIS. PUERTO.","bruselas.gif");
var ciudad12= new Array("COPENAGUE","41DINAMARCA",1556,6890,"CAPITAL DEL PAIS CON UNA GRAN CANTIDAD DE MUSEOS","copenague.gif");
var ciudad13= new Array("OSLO","42NORUEGA",856,880,"CAPITAL DEL PAIS. PAISAJES.","oslo.gif");
listaCiudades[0]=ciudad0;
listaCiudades.push(ciudad1);
listaCiudades.push(ciudad2);
listaCiudades.push(ciudad3);
listaCiudades.push(ciudad4);
listaCiudades.push(ciudad5);
listaCiudades.push(ciudad6);
listaCiudades.push(ciudad7);
listaCiudades.push(ciudad8);
listaCiudades.push(ciudad9);
listaCiudades.push(ciudad10);
listaCiudades.push(ciudad11);
listaCiudades.push(ciudad12);
listaCiudades.push(ciudad13);

    function mostrarTabla(listaCiudades){
        let tabla = document.getElementById("tablaCiudades");
        
            let contenido = "<table style='border:2px solid black;'><th></th><th>Ciudad</th><th>Pais</th><th>Distancia</th><th>Precio</th><th>Breve Descripcion</th>";
            listaCiudades.forEach((ciudades)=>{
       
            let letras = [...ciudades[1]];
            letras.reverse();
            letras = letras.splice(0,letras.length-2);
            letras = letras.reverse();

          contenido += "<tr>";
            contenido += `<td><input type='number' style='width:40px;height:40px;border:2px solid black;margin:0px auto'></input></td>`;
            contenido += `<td style='border:2px solid black;'>${ciudades[0]}</td>`;
            contenido += `<td style='border:2px solid black;'>${letras.join('')}</td>`;
            contenido += `<td style='border:2px solid black;'>${ciudades[2]}</td>`;
            contenido += `<td style='border:2px solid black;'>${ciudades[3]}</td>`;
            contenido += `<td style='border:2px solid black;'>${ciudades[4]}</td>`;
            
        contenido += "</tr>";
        
        
        })
        contenido += "</table>";
        tabla.innerHTML = contenido; 

        for (let i = 0; i < listaCiudades.length; i++) {
            i % 2 != 0 
            ? document.getElementsByTagName("tr")[i].style.backgroundColor = "blue"
            : document.getElementsByTagName("tr")[i].style.backgroundColor = "white";
            
        }
        
    }

    function ordenarPorNombre(){
        listaCiudades.sort();
        mostrarTabla(listaCiudades);
    }
    function ordenarPorPrecioAsc(){
        listaCiudades.sort((a,b) =>{
            if(a[3]>b[3]) return -1;
            else{
                return 1;
            }
        })
        mostrarTabla(listaCiudades);
    }
    function ordenarPorPrecioDesc(){
        listaCiudades.sort((a,b) =>{
            if(a[3]>b[3]) return 1;
            else{
                return -1;
            }
        })
        mostrarTabla(listaCiudades);
    }
    function filtrar(idSelect){
        var arrayFiltrado = listaCiudades;
        if(idSelect == "precio"){
            if(document.getElementById("precio").value == 1){
                arrayFiltrado = listaCiudades.filter((filtro)=> filtro[3] < 1000);
                mostrarTabla(arrayFiltrado);
                
        }else if(document.getElementById("precio").value == 2){
            arrayFiltrado = listaCiudades.filter((filtro)=> filtro[3] > 1000 && filtro[3] < 2000);
        mostrarTabla(arrayFiltrado);
        
        }else if(document.getElementById("precio").value == 3){
            arrayFiltrado = listaCiudades.filter((filtro)=> filtro[3] > 2000);
            mostrarTabla(arrayFiltrado);
            
        }
    }
        
    }

    function filtrarDist(parametro){
        let filtrarDisc = listaCiudades;
        let radios = document.querySelectorAll("input[type='radio']");
        let valorRadio;
        radios.forEach((radio)=>{
            if(radio.checked){
                valorRadio=radio.value;
            }
        });
        if(parametro == "distancia"){
            if(valorRadio == 1){
                filtrarDisc = listaCiudades.filter((distancia) => distancia[2] < 1000);
                console.log("entra");
                mostrarTabla(filtrarDisc);
            }else if(valorRadio == 2){
                filtrarDisc = listaCiudades.filter((distancia) => distancia[2] > 1000 && distancia[2] < 2000);
                mostrarTabla(filtrarDisc);
            }else if(valorRadio == 3){
                filtrarDisc = listaCiudades.filter((distancia) => distancia[2] > 2000);
                mostrarTabla(filtrarDisc);
            }
        }
    }
    function filtarPais(parametro){
        
        let paisFiltrado = listaCiudades.filter((ciudades) => ciudades[1].slice(2) == document.getElementById(parametro).value.toUpperCase());
        console.log(paisFiltrado);
        mostrarTabla(paisFiltrado);
    }
    function mostrarRuta(){
        let div = document.getElementById("rutaCiudades");

        let input = document.querySelectorAll("input[type='number']");
        let listaIndice = []; 

            input.forEach((numero,Indice)=>{
                if(numero.value >= 1){
                    listaIndice.push([numero.value,listaCiudades[Indice][0]]);  
                    //listaIndice.push(listaCiudades[Indice][0]);
                }
                
            })
            listaIndice.sort((a,b)=>
                a[0]-b[0]
            );
            listaIndice.forEach((valor,Indice)=>{
                valor[0] = Indice+1;
            })

            console.log(listaIndice);
            listaIndice.forEach((numeros)=>{
            div.innerHTML += numeros+"\n";
        })
    }
    function comprobarFechas(){
        
    }
    onload = () =>{
        mostrarTabla(listaCiudades);
    }