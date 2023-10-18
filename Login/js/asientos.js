window.addEventListener('load',()=>{

    imprimirasientos();
});

    function imprimirasientos(){

        
        let cantidadAsietos = 24;
            
        var contenido = "<table><tbody>";

        for (let i = 0; i <cantidadAsietos; i++) {
                contenido += `<tr>`;
            for (let j = 0; j < cantidadAsietos; j++) {
                contenido += `<td><input type=checkbox class='posicionasiento value=${j}'></td>`;
            }
             contenido += `</tr>`;
        }
        contenido += `</tbody></table>`;

        document.getElementById('asientos').innerHTML += contenido;
        let posicion = document.querySelector(".posicionasiento");
        posicion.addEventListener('click',()=>{
            console.log(document.getElementsByTagName("input")[document.querySelector(".posicionasiento").value]);
        })
    }