function imprimirComprasAlquileres(accion){
    let divCentral = document.getElementById("divCentral");
    let tabla = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    tabla.appendChild(tbody);
    tabla.appendChild(thead);
    if(localStorage.getItem(accion)){
        let compras = JSON.parse(localStorage.getItem(accion));
        let tr = document.createElement("tr");
        compras.forEach((compra)=>{
        for (const key in compra) {
            let th = document.createElement("th");
            let td = document.createElement("td");
            let textoTd = document.createTextNode(compra[key]);
            td.appendChild(textoTd);
            let texto = document.createElement("p");
            texto.innerHTML = key;
            th.appendChild(texto);
            thead.appendChild(th);
            tr.appendChild(td);
            tbody.appendChild(tr)
        } 
    })
    divCentral.appendChild(tabla);
    }
}

onload=()=>{
    document.getElementById("compras").addEventListener("click",()=>{
        imprimirComprasAlquileres("compras")
    });
    document.getElementById("alquileres").addEventListener("click",()=>{
        imprimirComprasAlquileres("alquileres")
    });
    document.getElementById("comprasAlquileres").addEventListener("click",()=>{
        imprimirComprasAlquileres("compras");
        imprimirComprasAlquileres("alquileres")
    });
}