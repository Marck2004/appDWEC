window.addEventListener('load',() => {

    var boton = document.getElementById('palabra');

    var palabra = prompt("Introduce tu palabra");

    boton.addEventListener('click',()=>{

        var array = palabra.split("");

        var espacios = "";

        for(let i=0; i< array.length;i++){

         espacios += "<br>"+ array[i];
        }
        document.body.innerHTML = espacios;
        
    });

});