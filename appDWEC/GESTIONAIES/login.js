var listaUsuarios=[];
function cargarUsuarios(){

	listaUsuarios.push(['Jaime','12345'],['Javier','0000'],['Jorge','1111'],['Juan','2222'],['Jacinto','3333']);

}
function comprobarUsuario(){

	let usuario = document.getElementById('usuario').value.trim();
	let contraseña = document.getElementById('clave').value.trim();

	let posicion = listaUsuarios.findIndex((nombreUsuario)=>nombreUsuario[0] == usuario);

	if(posicion !=-1){
		if(contraseña== listaUsuarios[posicion][1]){
	location.href="aterrizaje.html";
	}else{
		alert("usuario/clave usuario");
	}
}else{
		alert("usuario/clave incorrecta");
	}
}
cargarUsuarios();
