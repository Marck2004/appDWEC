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
}
onload = ()=>{
    mostrarCompras();
}