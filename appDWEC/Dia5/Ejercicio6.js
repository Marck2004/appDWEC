window.addEventListener('load',()=>{

    var boton = document.getElementById('XYZ');

    let frasesolicitada = prompt("Escriba su frase");

    boton.addEventListener('click',()=>{

        var posicionXYZ = frasesolicitada.lastIndexOf('XYZ');

        if(posicionXYZ){

            let cortada = frasesolicitada.substr(posicionXYZ+3,5);

            alert(`Los caracteres restantes a partit de 'XYZ' son: ${cortada}`);
        }

    });

});