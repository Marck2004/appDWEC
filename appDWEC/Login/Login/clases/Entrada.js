class Entrada{
    constructor(id_entrada,asiento,emailUsuario,tipoentrada,precio){
        this.id_entrada = id_entrada;
        this.asiento = asiento;
        this.emailUsuario = emailUsuario;
        this.tipoentrada = tipoentrada || "General";
        this.precio = precio;
    }

    NumeroEntrada(){
        this.id_entrada = id_entrada;
    }
    AsignarAsiento(){
        this.asiento = asiento;
    }
    EnviarEmail(email){
        this.emailUsuario = email;
    }


    CalcularPrecio(tipo){
        if(tipo == "Deluxe"){
            this.precio = 10;
        }else if(tipo == "General"){
            this.precio = 6.99;
        }
    }
}