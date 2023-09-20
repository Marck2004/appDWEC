window.addEventListener('load',() => {

    var boton = document.getElementById('Mayusculas');

    var frase = prompt("Introduce la frase en minusculas");

    boton.addEventListener('click', ()=>{

        let mayusculas = frase.toLocaleUpperCase();

        alert(`La frase a cambiado de ${frase} a ${mayusculas}`);

    });


});