window.addEventListener('load',() =>{

    

    var boton = document.getElementById('boton');

    boton.addEventListener('click',()=>{

    var texto = document.getElementById('texto').value;

    var array = texto.split(',');

    var espacios = "";

    for(let i=0; i < array.length;i++){

        espacios +="<br>"+"<input type=checkbox>"
    }
    document.body.innerHTML += espacios;
    });
});