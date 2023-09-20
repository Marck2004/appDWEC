window.addEventListener('load',() =>{

    var boton = document.getElementById('DAW');

    var frase = prompt('Introduzca su frase');

    boton.addEventListener('click',() =>{

        if(frase.includes('daw')){

            let buscar = frase.indexOf('daw');

            let palabra = frase.slice(buscar,buscar+3);

            let mayusculas = palabra.toLocaleUpperCase();

            alert(`'daw' ha cambiado a ${mayusculas}`);
        }

    });

});