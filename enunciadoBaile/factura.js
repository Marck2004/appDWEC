function mostrarCompras(){
    let compra = JSON.parse(localStorage.getItem("compra"));
    let divCursos = document.getElementById("cursos");
    console.log(compra);
    let precio = 0;
    
    compra.forEach((curso) => {
        let parrafo = document.createElement("p");
        parrafo.innerHTML = `<img src='${curso.curso_imagen}' style='width:70px;heigth:70px;'>${curso.curso_dia} ${curso.curso_horario}-CURSO:${curso.curso_descripcion}
                con ${curso.curso_entrenador} por ${curso.curso_precio}`;
        divCursos.appendChild(parrafo);
        precio += parseInt(curso.curso_precio); 
    });

    divCursos.insertAdjacentHTML(`afterbegin`,`<b>CURSOS CONTRATADOS POR UN PRECIO DE ${precio}</b>`);
    cambiarFondo();
}
function cambiarFondo(){
    let listaParrafos = [...document.getElementById("cursos").getElementsByTagName("p")];
    let contador = 0;
    let intervalo = setInterval(()=>{
        listaParrafos[contador].style.backgroundColor = "red";
        if(contador >= 1 ){
            listaParrafos[contador-1].firstChild.remove();
        }
        contador++;
        
        
        document.getElementsByTagName("form")[1].getElementsByTagName("button")[1].addEventListener("click",()=>{
            clearInterval(intervalo);
        })
        if(contador == listaParrafos.length){
            document.getElementsByTagName("form")[1].getElementsByTagName("button")[1].onclick = null;
            let ventana = window.open();
            ventana.innerHTML
    }},3000);
}
onload = ()=>{
    mostrarCompras();
}