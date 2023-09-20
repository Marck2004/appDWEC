
var boton2 = document.getElementById('boton2');

        boton2.addEventListener('click',()=>{
            var caja2 =document.getElementById('frase2').value;

            var mostaraprobado = caja2.indexOf("aprobado");

            if(mostaraprobado){
                alert("Si ha puesto aprobado");
            }
        });