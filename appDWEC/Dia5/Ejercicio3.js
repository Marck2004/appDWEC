
var botonado = document.getElementById('apareceado') ;

        botonado.addEventListener('click',()=>{
            var ado = document.getElementById('frase1').value;

            var buscar = ado.indexOf('ado');

            if(buscar){
                frase1.value = `La posicion en la que se encuentra es ${buscar}`;
            }else{
                frase1.value = `No existe`;
            }
        }
    );