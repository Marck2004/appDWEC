


function valorNumerico() {

    var operador1 = document.getElementById('operador1').value.trim();
    var operador2 = document.getElementById('operador2').value.trim();

    /*  EJERCICIO 1
        if(operador1=="" || isNaN(operador1)){
            console.log("En la caja operador1 no hay un valor numerico");
    
        }else{
            console.log("En la caja operador1 hay un valor numerico");
        }
    
        if(operador2=="" || isNaN(operador2)){
            console.log("En la caja operador2 no hay un valor numerico");
        }else{
            console.log("En la caja operador2 hay un valor numerico");
        }*/

    //EJERCICIO 2

    if ((operador1 == "" || isNaN(operador1)) && (operador2 == "" || isNaN(operador2))) {
        alert("No son operadores matematicos");
    } else {
        document.getElementById('resultado').value =
            parseInt(operador1) + parseInt(operador2);

        console.log(parseInt(operador1) + parseInt(operador2));
    }
}


function Restar() {
    var operador1 = document.getElementById('operador1').value.trim();
    var operador2 = document.getElementById('operador2').value.trim();
    if ((operador1 == "" || isNaN(operador1)) && (operador2 == "" || isNaN(operador2))) {
        alert("No son operadores matematicos");
    } else {
        document.getElementById('resultado').value =
            parseInt(operador1) - parseInt(operador2);


    }
}
function Multiplicar() {
    var operador1 = document.getElementById('operador1').value.trim();
    var operador2 = document.getElementById('operador2').value.trim();
    if ((operador1 == "" || isNaN(operador1)) && (operador2 == "" || isNaN(operador2))) {
        alert("No son operadores matematicos");
    } else {
        document.getElementById('resultado').value =
            parseInt(operador1) * parseInt(operador2);


    }
}

function Dividir() {
    var operador1 = document.getElementById('operador1').value.trim();
    var operador2 = document.getElementById('operador2').value.trim();
    if ((operador1 == "" || isNaN(operador1)) && (operador2 == "" || isNaN(operador2))) {
        alert("No son operadores matematicos");
    } else {
        document.getElementById('resultado').value =
            parseInt(operador1) / parseInt(operador2);

    }
}

function Maximo(){
    var Maximo = document.getElementById('Maximos').value;

        let arrayMaximo = Maximo.split(',');

    console.log(Math.max(...arrayMaximo));
}

function Minimo(){
    var Minimo = document.getElementById('Maximos').value;

        let listaMinimo = Minimo.split(',');

    console.log(Math.min(...listaMinimo));
}

function Media(){
    
    var valoresIntroducidos = document.getElementById('Maximos').value;

        let listaValores = valoresIntroducidos.split(',');
    var suma = 0;

    listaValores.forEach(element => {
         suma = suma + parseInt(element);
    });
    let resultado = suma / listaValores.length;
    console.log(resultado);
}


function introducirAleatorio(){

     let numeroUsuario = prompt("Introduzca un numero del 1 al 6");
     let caja = document.getElementById('operador1');
let aleatorio = Math.floor(Math.random()*5);
console.log(aleatorio);
let contador=0;

        while (numeroUsuario !=aleatorio) {

            if(numeroUsuario ==aleatorio){
                alert("Has acertado gran programmer");
                break;
            }
            numeroUsuario = prompt("Has fallado vuelve a intentarlo");

            if(contador==3){
                alert("Has fallado eres un torpe");
            }
            contador++;
        }

}