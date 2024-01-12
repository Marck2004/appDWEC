function getLocalStorage(){
    let divCentral = document.getElementById("central");
    if(localStorage.length > 0){
        for (let i = 0; i < localStorage.length; i++) {
             let contrato = JSON.parse(localStorage.getItem(`contrato${i}`));
             contrato.forEach((elemento) => {
                divCentral.innerHTML += `${elemento}- `;
             });
             divCentral.innerHTML+= "<br>";
        }
        divCentral.innerHTML += `<button onclick='comprobarBeneficios()'>Beneficios</button>`;
    }
}
function comprobarBeneficios(){

   let datos = document.getElementById("central").textContent;
   let listaDatos = datos.split("-");

   if(parseInt(listaDatos[2].trim()) > parseInt(listaDatos[6].trim())){

    alert("El jugador con mas beneficio es "+listaDatos[0].trim());
   }else{
    alert("El jugador con mas beneficio es "+listaDatos[4].trim());
   }
}
onload = ()=>{
    getLocalStorage();

    document.getElementById("menu").getElementsByTagName("a")[0].addEventListener("click",()=>{
        window.location.href = "index.html";
    })
    document.getElementById("menu").getElementsByTagName("a")[1].addEventListener("click",()=>{
        window.reload();
    })
}