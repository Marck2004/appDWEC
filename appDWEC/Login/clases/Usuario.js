class Usuario{
    constructor(email,tlf,nombreUsuario,nuevaContraseña){
        this.email = email;
        this.tlf = tlf;
        this.nombreUsuario = nombreUsuario;
        this.nuevaContraseña = nuevaContraseña;
    }
    comprobarContraseña(contraseña){
        if(contraseña.length < 8){
            document.getElementById('contraseñaRegistro').style.border = "3px solid red";
            alert("Contraseña minimo 8 caracteres");
        }
    }
    comprobarEmail(email){
        var validarEmail = ['@gmail.com','@gmail.es','@yahoo.com','@yahoo.es','@hotmail.es','@hotmail.com'];

        var dominio = email.slice(email.lastIndexOf('@'));

        if(!validarEmail.includes(dominio)){
            document.getElementById('emailRegistro').style.border = "3px solid red";
            alert("Formato de email no aceptado");
        }
    }
    comprobartlf(tlf){
        if(tlf.length < 9){
            document.getElementById('tlfRegistro').style.border = "3px solid red";
            alert("Formato de telefono no aceptado");
        }
    }
}