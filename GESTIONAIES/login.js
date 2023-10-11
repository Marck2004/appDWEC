var listaUsuarios=[];
function cargarUsuarios(){
	
	listaUsuarios.push(['Marcos','2004']);
	listaUsuarios.push(['Cristina','1234']);
	listaUsuarios.push(['Fernanda','5000']);
	listaUsuarios.push(['Alberto','9999']);
	listaUsuarios.push(['Sofia','0000']);

}
function comprobarUsuario(){

		var usuario = document.getElementById('usuario').value.trim();
		var clave = document.getElementById('clave').value.trim();

			var Posicion = listaUsuarios.findIndex((nombres)=>nombres[0]==usuario);

		if (Posicion!=-1) {
			if(clave == listaUsuarios[Posicion][1]){
			location.href="aterrizaje.html";
		}else{
			alert('Usuario/clave incorrectos');
			}
		}else{
			alert('Usuario/clave incorrectos');
		}
}
cargarUsuarios();

