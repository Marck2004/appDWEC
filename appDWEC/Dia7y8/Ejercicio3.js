window.addEventListener('load',()=>{

    function arrays(){
    var arraynombres = [];
    var auxarray = [];
    do{
        var nombres = prompt('Ingrese los nombres');

        arraynombres.push(nombres);

    }while(nombres!="FIN");
        arraynombres.pop();
        console.log("Array normal: "+arraynombres);
        auxarray = arraynombres;
        
        auxarray.reverse();

console.log("Array dado la vuelta: "+auxarray);
    }
    arrays();
});
