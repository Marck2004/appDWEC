

    function ej1(){
        let caja1 = document.getElementById("ej1");
            if(caja1.value.trim().length > 3 && caja1.value.trim().length < 9){
                console.log("EL TEXTO TIENE MAS DE 3 Y MENOS DE 9 LETRAS");
                return true;
            }else{
                console.log("fallaste");
                return false;
            }
    }

    function ej2() {
        let caja2 = document.getElementById("ej2").value;
        let formaFecha = /^\d{4}:\d{2}:\d{2}$/;

            if(formaFecha.test(caja2)){

                let arrFecha = caja2.split(":");

                let año = parseInt(arrFecha[0]);
                let mes = parseInt(arrFecha[1]);
                let dia = parseInt(arrFecha[2]);


                let fecha = new Date(año,mes-1,dia);

                if(fecha.getFullYear() === año &&
                    fecha.getMonth() === mes - 1&&
                    fecha.getDate() === dia){
                        console.log("ok");
                        return true;
                    }else{
                        console.log("bruh");
                        return false;
                    }
            }
    }