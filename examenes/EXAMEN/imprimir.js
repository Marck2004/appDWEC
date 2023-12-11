function imprimirContratos(){
    
    for (let i = 0; i < localStorage.length; i++) {
        document.getElementById("central").innerHTML +=
            `<p>${JSON.parse(localStorage.getItem(`info${i}`)).nombreJugador}-
                ${JSON.parse(localStorage.getItem(`info${i}`)).NombreEquipo}- 
                    Importe:${JSON.parse(localStorage.getItem(`info${i}`)).importeAnual}
                        -Porcentaje: ${JSON.parse(localStorage.getItem(`info${i}`)).porcentaje}</p>`;
    }
    document.getElementById("central").insertAdjacentHTML("beforeend",`<button onclick='consulta()' id='consulta'>Beneficios</button>`)
}

    function consulta(){
        for (let i = 0; i < localStorage.length; i++) {
            if(JSON.parse(localStorage.getItem(`info${i}`)).porcentaje > JSON.parse(localStorage.getItem(`info${i++}`)).porcentaje){
                alert("El jugador mas beneficioso es "+JSON.parse(localStorage.getItem(`info${i}`)).nombreJugador);
            }else{
                alert("El jugador mas beneficioso es "+JSON.parse(localStorage.getItem(`info${i++}`)).nombreJugador);
            }
        }
    }

onload=()=>{
    imprimirContratos();

    document.getElementById("menu").getElementsByTagName("li")[0].addEventListener("click",()=>{
        window.location.href="index.html";
    })
    document.getElementById("menu").getElementsByTagName("li")[1].addEventListener("click",()=>{
        window.location.href="contratos.html";
    })
}