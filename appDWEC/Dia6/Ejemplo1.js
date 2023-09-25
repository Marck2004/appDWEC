window.addEventListener('load',()=>{
/*
    var listaUsuarios = ["Juan","Jaime","Jorge","Jose","Jacinto"];
//Eliminar al final
    let eliminarusuario = listaUsuarios.pop();

        console.log(listaUsuarios.length);
//Añadir al final
        listaUsuarios.push("Javier");
//Añadir al principio
        let añadirusuario = listaUsuarios.unshift("Marcos");
        console.log(listaUsuarios);
//Eliminar al principio
        let eliminarprimerusuario = listaUsuarios.shift();
        console.log(listaUsuarios);

//Eliminar con splice
        listaUsuarios.splice(2,1);
        console.log("Este eliminas con splice "+listaUsuarios);
//Añadir con splice
        listaUsuarios.splice(3,0,"Juanito");
        console.log("Este añades con splice "+listaUsuarios);
        */

    var listagrupos = [];

        function addGrupo(){
            let nombregrupo =document.getElementById('grupocantante').value.trim();
            listagrupos.push(nombregrupo);
                pintarSelect();
         }
        
        function pintarSelect(){
            let selectPlaylist = document.getElementById('playlist');
        selectPlaylist.innerHTML = " ";
            listagrupos.forEach((grupo)=>{
        selectPlaylist.innerHTML += `<option>${grupo}</option>`;
        })
        }

});