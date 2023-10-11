window.addEventListener('load',()=>{

    var frase = document.getElementById('frasereves').value.trim();

    function frasereves(fraserecibida){

        var reves = fraserecibida.split(" ");

        reves.reverse();
        reves.toString();
        console.log(reves.join(" "));
    }

    frasereves(frase);
});