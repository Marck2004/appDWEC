window.addEventListener('load',()=>{

    var boton = document.getElementById('aprobado');

    boton.addEventListener('click',()=>{

        var aprobado = document.getElementById('frase1').value;
        var aux = "aprobado";

        const dividirtexto = aprobado.split(aux);

        const num = dividirtexto.length-1;

            frase1.value = `La palabra ${aux} esta ${num} veces`;

    });

});