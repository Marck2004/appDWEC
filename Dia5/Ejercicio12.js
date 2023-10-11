window.addEventListener('load',() =>{

    var boton = document.getElementById('nombres');

    var frase = prompt("Introduzca los nombres");

    boton.addEventListener('click',()=>{

        var separar = frase.split(',');

    var linea = "";
        for(var i = 0; i < separar.length; i++){

             linea += separar[i]+"<br>";

        }
        document.body.innerHTML = linea;
    });

});