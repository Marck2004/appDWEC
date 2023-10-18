class Pelicula{
    constructor(Nombre,tipo,descripcion,imagen,hora){
        this.Nombre=Nombre;
        this.tipo=tipo;
        this.descripcion=descripcion;
        this.imagen=imagen;
        this.hora = hora;
    }
    asignarNombre(Nombre){
        this.Nombre = Nombre;
    }
    asignarTipo(){
        this.tipo = tipo;
    }
    asignarDescripcion(){
        this.tipo = tipo;
    }
    asignarImagen(){
        this.imagen = imagen;
    }
    asignarHora(){
        let horas = (Math.random()*24);
        let minutos = (Math.random() * 59);

        let formatearHora = String(horas).padStart(2,'0');
        let formatearMin = String(minutos).padStart(2,'0');

    return `${formatearHora}:${formatearMin}`;
    }
}