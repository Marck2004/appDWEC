window.addEventListener('load', ()=>{

    let boton = document.getElementById('devolvercaracteres');

    let frase = prompt("Introduzca la frase que quiere escribir");

    boton.addEventListener('click',()=>{

    var caracteres = frase.slice(3,6);

    alert(`Los caracteres son ${caracteres}`);
});

});