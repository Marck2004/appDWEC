window.addEventListener('load',()=>{

    var boton = document.getElementById('frases');

    var texto = prompt("Introduzca su texto");
    
    var boton = document.addEventListener('click',() =>{

        var array = texto.split(' ');

        var espacio = "";
            for(let i=0; i < array.length; i++){

                espacio += array[i]+"<br>";

            }
            document.body.innerHTML = espacio;
    });


});