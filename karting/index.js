async function mostrarCoches(){
    let datos = await fetch("select.php");
    let listaCoches = await datos.json();
    console.log(listaCoches);
    let divCentral = document.getElementById("central");
   let tabla = document.createElement("table");

    tabla.insertAdjacentHTML("beforeend",`<tbody>
    <th><b>Numero Coche</b></th><th><b>Color</b></th><th><b>Modelo</b></th>
    </tbody>`);
    listaCoches.forEach((celda) => {

        tabla.insertAdjacentHTML("beforeend",`<tr>
            <td>${celda.ID}</td>
            <td>${celda.Color}</td>
            <td>${celda.Modelo}</td>
        </tr>`);
    });
    divCentral.appendChild(tabla);

}
onload = ()=>{
    mostrarCoches();
}