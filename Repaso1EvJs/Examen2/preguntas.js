function mostrarPreguntas(){
    let tabla = document.getElementById("principal").getElementsByTagName("table")[0];
    let preguntas = JSON.parse(localStorage.getItem("descartes"));
    let puntos = 0;
    
    preguntas.forEach((pregunta,Indice) => {

        tabla.insertAdjacentHTML("beforeend",`<tr>
        <td>${Indice}</td>
        <td>${pregunta.pregunta}</td>
        <td>${pregunta.respuesta}</td>
        <td>${pregunta.personas.length}</td>
        <td>${pregunta.puntos}</td>
        </tr>`);
    });
}
onload = ()=>{
    mostrarPreguntas();
}