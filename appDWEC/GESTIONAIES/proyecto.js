class Proyecto{
    constructor(codigo,Nombre,descripcion,idCliente){
        this.idProyecto=codigo;
        this.Nombre = Nombre || "SIN NOMBRE";
        this.descripcion = descripcion || "SIN DESCRIPCION";
        this.idCliente = idCliente;
        this.fechaInicio = "";
        this.fechaFin = "";
        this.presupuesto = 0;
        this.listaEmpleados = [];
    }

    establecerFechaInicio(fechaInicio){
        this.fechaInicio = fechaInicio;
    }
    cambiarPresupuesto(presupuesto){
        this.presupuesto = presupuesto
    }
    cambiarFechaFin(fechaFin){
        this.fechaFin = fechaFin;
    }
    
}
var codigo = 0;