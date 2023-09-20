window.addEventListener('load',()=>{

    var boton =document.getElementById('boton');

    boton.addEventListener('click',()=>{

    var caja1 = document.getElementById('frase1').value;

    var longitud = caja1.length;

        if(longitud >20){
            document.body.innerHTML += "<p>MUY GRANDE</p>";
        }
    });
        
        });
        
    