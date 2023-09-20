window.addEventListener('load',()=>{

    var boton = document.getElementById('minusculas');

    var frase = prompt("Introduce tu frase en mayusculas");

    boton.addEventListener('click',() =>{

        let minusculas = frase.toLocaleLowerCase();

        alert(`La frase ha cambiado de ${frase} a ${minusculas}`);

    });


});