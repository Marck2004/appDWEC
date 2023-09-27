window.addEventListener('load',()=>{

    var palabrascontar = document.getElementById('fraseconteo').value.trim();

    function contarpalabras(fraserecibida){

        var arraynombres = fraserecibida.split(" ");

        console.log(arraynombres.length);
    }

    contarpalabras(palabrascontar);
});