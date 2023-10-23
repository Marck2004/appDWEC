class Empleado {
    constructor(dni, nombre, apellidos, edad, antiguedad, puesto, foto) {
        this.DNI = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad || 18;
        this.antiguedad = antiguedad || "0";
        this.puesto = puesto || "becario";
        this.foto = foto || "lapiz.png style='width:100px;height:100px'";
    }
    cambiarFoto(foto) {
        this.foto = foto;
    }
}