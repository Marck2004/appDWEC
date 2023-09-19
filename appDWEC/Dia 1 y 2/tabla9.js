


/*Ejercicio 5 y 6*/
/*
        for (j = 0; j <= 10; j++) {
            resultado = 9*j;
            document.body.innerHTML+=("<p>"+ 9 +"*"+ j +"=" +resultado+"</p>");
        }
  */      
 /*Ejercicio 7*/
 /*
        let numero = prompt("¿Que tabla de multiplicar quieres?");
        for (j = 0; j <= 10; j++) {
            resultado = numero*j;
            document.body.innerHTML+=("<p>"+ numero +"*"+ j +"=" +resultado+"</p>");
        }
        */
        //Ejercicio 8
        let numero = prompt("¿Que tabla de multiplicar quieres del 1 al 10?");
  
        while(numero<1 || numero>10){
        
            numero = prompt("Introduzca un numero del 1 al 10");
        }
        for (j = 0; j <= 10; j++) {
            resultado = numero*j;
            document.body.innerHTML+=("<p>"+ numero +"*"+ j +"=" +resultado+"</p>");
    }
    