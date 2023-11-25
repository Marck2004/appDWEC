

    function mostrarCompra(){
        let arrLocal = localStorage.getItem("asientos").split(",");

        
        let horario = JSON.stringify(localStorage.getItem("Horario"));

        document.getElementById("resumenCompra").innerHTML += `<h3 id='inicioSesion'>Usted inició sesión como ${JSON.parse(localStorage.getItem("usuario")).email} `;

       let contenido = "<table><tbody>";

       contenido += `<th>Nombre</th><th>Asientos</th><th>Horario</th><th>Pelicula</th>`;
                    for (let i = 0; i < arrLocal.length; i++) {
                        contenido += `<tr id='Fila${i}'>`;
                        contenido += `<td>${JSON.parse(localStorage.getItem("Pelicula")).Nombre}</td>`;
                        contenido += `<td> ${arrLocal[i]}</td>`;
                        contenido += `<td>${horario.slice(1,-1)}</td>`;
                        contenido += `<td><img src='${JSON.parse(localStorage.getItem("Pelicula")).imagen}'></td>`;
                        contenido += `</tr>`;
                    }
                    contenido += "</tbody></table>";

                    document.getElementById("resumenCompra").innerHTML += contenido;
            };

    onload=()=>{
        mostrarCompra();
    }