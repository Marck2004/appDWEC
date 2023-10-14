class Sala{
    constructor(id_sala,butacasDisponibles,butacasAsignadas){
        this.id_sala = id_sala;
        this.butacasDisponibles = butacasDisponibles || "No quedan butacas disponibles";
        this.butacasAsignadas = butacasAsignadas;
    }

    AsignarSala(){
        this.id_sala = id_sala;
    }
    CalcularbutacasDisponibles(asignadas,capacidad = 50){
        let resto = capacidad - asignadas;
        alert("Quedan "+resto+" butacas disponibles");
    }
    CalcularButacasAsignadas(lista){
        let fila = Math.floor(Math.random() = 4);
        let numeroButaca = Math.floor(Math.random()*50);
    
    lista.forEach(element => {
        if(numeroButaca == element.numeroButaca && fila == element.fila){
            alert("Esa butaca ya ha sido asignada");
        }else{
            console.log("Su fila es la "+fila+" y la butaca es la "+numeroButaca);
        }
    });
    }
}
    
