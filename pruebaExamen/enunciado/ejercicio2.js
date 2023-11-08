var Vinilos = ['25996_1.jpg','25996_2.jpg','25997_1.jpg','25997_3.jpg','26650_3.jpg','26704_3.jpg','26868_1.jpg','26868_2.jpg','26869_1.jpg','26869_2.jpg','26873_1.jpg'];

var Laminas = ['26873_2.jpg','27095_3.jpg','27356_3.jpg','27429_1.jpg','27429_2.jpg','27773_3.jpg','28155_1.jpg','28155_2.jpg','28192_3.jpg','28192_4.jpg','29776_3.jpg'];

var Otro = ['30390_3.jpg','30473_1.jpg','31386_1.jpg','31386_2.jpg','31469_3.jpg'];

var arrGlobal = Vinilos.concat(Laminas.concat(Otro));

    function mostrarCuadros(lista){
        
        let div = document.getElementById("exposicion");

            let contenido = `<table id='tabla'><tbody>`;
            let contador = 0;
                lista.forEach((cuadros,Indice) => {
                    
                    contenido+= `<tr>`;
                        for (let i = 0; i < 4; i++) {
                            if(contador == lista.length){
                                break;
                            }
                            contenido += `<td style='border:2px solid black;'><img src='pagina2_files/${lista[contador]}' id='Img${contador}' style='width:100px;height:100px;' >
                            <button type='button' onclick='comprarCuadro(${contador})' id='boton${contador}'>CONTRATAR</button><br>
                            <button type='button' onclick='alquilarCuadro(${contador})' id='alquilar${contador}'>ALQUILAR</button>
                            <br><p id='cant${contador}'>Cantidad: <input type='number' style='width:100px;' id='${contador}'></input></p>
                            <p id='parrafo${contador}'>Duracion:<select id='seleccionarCant${contador}'><option>Escoge</option></select> </p>
                            </td>`;
                            contador++;
                           
                        }
                        
                    contenido+= `</tr>`;
                    
                });
                contenido += `</tbody></table>`;
            div.innerHTML = contenido;
            
            for (let i = 0; i < lista.length; i++) {

                for (let j = 0; j < 20; j++) {
                    let option = document.createElement("option");

                let cantidad = document.createTextNode = `${j+1}`;
                option.textContent = cantidad;
 
                document.getElementById(`seleccionarCant${i}`).appendChild(option);
                }
                
                
            }

    }

    function comprarCuadro(idContador){
        if(document.getElementById(idContador).value >= 1){
            localStorage.setItem(`imagen${idContador}`,`'pagina2_files/${arrGlobal[idContador]}'`);
            localStorage.setItem(`cantidad${idContador}`,document.getElementById(idContador).value);
            localStorage.setItem(`Operacion${idContador}`,`Compra`);

            document.getElementById(`cant${idContador}`).style.display = "none";
            document.getElementById(`boton${idContador}`).disabled = true;


            let divCentral = document.getElementById("derecha");

            let enlaceCompras = divCentral.getElementsByTagName("a")[0];
    

    enlaceCompras.addEventListener("click",(evento)=>{
        evento.preventDefault();
        informacionCompra(idContador);
    });


        }else{
            alert("El valor debe ser mayor a 0");
        }
    }
    function alquilarCuadro(idContador){
        let selectValor = document.getElementById("central").
        getElementsByTagName("select")[0].options[document.getElementById("central").
        getElementsByTagName("select")[0].selectedIndex].textContent;

        if(document.getElementById(idContador).value >= 1 && selectValor != "Escoge"){

            localStorage.setItem(`imagenAlquiler${idContador}`,`'pagina2_files/${arrGlobal[idContador]}'`);
            localStorage.setItem(`cantidadAlquiler${idContador}`,document.getElementById(idContador).value);
            localStorage.setItem(`DuracionAlquiler${idContador}`,selectValor);
            localStorage.setItem(`OperacionAlquiler${idContador}`,`Alquiler`);


            document.getElementById(`parrafo${idContador}`).style.display = "none";
            document.getElementById(`Img${idContador}`).style.display = "none";
            document.getElementById(`cant${idContador}`).style.display = "none";
            document.getElementById(`boton${idContador}`).disabled = true;
            document.getElementById(`alquilar${idContador}`).disabled = true;

            

    

        }else{
            alert("El valor de la cantidad debe ser mayor a 0 y la duracion debe ser un numero");
        }
    }

    function informacionCompra(idContador){

           let abrirVentana = window.open();

                abrirVentana.document.body.innerHTML += `<h1>Compra<h1>`;

                    let contenido = `<table><tbody><th>Imagen</th>-----<th>Operacion</th>-----<th>Cantidad</th>`;
            
                        for (let i = 0; i < (localStorage.length/2)-1; i++) {
                            
                            
                            contenido += `<tr>`;
                            
                                contenido += `<td>${localStorage.getItem(`imagen${idContador}`)}</td>`;
                                
                                contenido += `<td>${localStorage.getItem(`Operacion${idContador}`)}</td>`;
                                
                                contenido += `<td>${localStorage.getItem(`cantidad${idContador}`)}</td>`;
                                
                            contenido += `</tr>`;
                        }
                        
                    contenido += `</tbody></table>`;

                    abrirVentana.document.body.innerHTML += contenido;
                    
        //let enlaceAlquilar = divCentral.getElementsByTagName("a")[1];

        //let enlaceGlobal = divCentral.getElementsByTagName("a")[2];
    }


onload = () =>{
    let selectCuadros = document.getElementById("central").getElementsByTagName("select")[0];

    selectCuadros.addEventListener("change",()=>{
        
        let posicionSeleccionada = selectCuadros.options[selectCuadros.selectedIndex];
        let valorOption = posicionSeleccionada.textContent;

        switch (valorOption) {

            case "Vinilos":
                mostrarCuadros(Vinilos);
                break;

            case "Laminas":
                mostrarCuadros(Laminas);
                break;

            case "Otros":
            mostrarCuadros(Otro);
            break;

            default:
                console.log("No funciona");
                break;
        }

    })

    
    
    mostrarCuadros(arrGlobal);

}
