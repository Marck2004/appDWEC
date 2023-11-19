class Entrada{
    constructor(id_entrada,asiento,emailUsuario,tipoentrada,precio){
        this.id_entrada = id_entrada;
        this.asiento = asiento;
        this.emailUsuario = emailUsuario;
        this.tipoentrada = tipoentrada === "asientosDeluxe" ? "Deluxe" : "General";
        this.precio = this.CalcularPrecio(precio);
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
        if(tipo == "asientosDeluxe"){
             return 10;
        }else if(tipo == "posicionasiento"){
            return 6.99;
        }
    }
}