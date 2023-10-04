// archivo ejemplo.js
function miPrimeraFuncion() {
    console.log("Hola mundo");

    var a = 11;
    var textoEnInglesDeNumero = a == 5 ? 'Five' :
        a == 7 ? 'Seven' :
        a == 11 ? 'Eleven' :
        a == 15 ? 'Fifteen' :
        'Other Number';

    console.log(textoEnInglesDeNumero); // Eleven
}
function sumar(x = 0,y = 0){

    return x+y;
}

var listaChuches = ["Caramelos","Piruletas","Chocolatinas"];

var listaChuches2 = []
var chuche1 = {
    "nombre":"caramelo",
    "calorias":150
}
listaChuches2.push(chuche1);

class chuche{
    constructor(nombre,calorias=0){
        this.nombre = nombre;
        this.calorias = calorias;
    }
}
var chuche2 = new chuche("piruletas",100);
listaChuches2.push(chuche2);

var chuche3 = new chuche("chocolatinas",250);
listaChuches2.push(chuche3);
console.log(listaChuches2);
console.log(JSON.stringify(listaChuches2));


listaChuches2[2].sabor = "tierra";
console.log(listaChuches2);

delete listaChuches2[2].sabor;
console.log(listaChuches2);




function mostrarListaChuchesEnTabla(){

    let contenido = "<table style='border:3px solid black'><tbody>";
        
        listaChuches.forEach(element => {
            contenido += "<tr style='border:3px solid black'>";
            contenido += `<td style='border:3px solid black'>${element}</td>`;
            contenido +="</tr>";
        });
        
    contenido +="</tbody></table>";
    document.body.innerHTML += contenido;
}

function eliminarChuches(letraInicial){

    listaChuches.forEach((chuches,posicion)=>{
        if(chuches.startsWith(letraInicial)){
            listaChuches.splice(posicion,1);
        }

    });
}

function anadirChucheP(listaChucheP,nuevaChuche){

    listaChuches = listaChuches.concat(nuevaChuche);

}

function ContarLetrasChuches(PlistaChuches){
let contenido = "<table style='border:3px solid red'><tbody>";

    for (let i = 0; i < PlistaChuches.length; i++) {
        let dividirPalabra = PlistaChuches[i].split("");
        let conteoLetras = dividirPalabra.length;

    contenido += `<tr style='border:3px solid red'>
    <td
    style='border:3px solid red'>
    ${PlistaChuches[i]+" : "+conteoLetras}
    <td>
    <tr>`;
    }
    contenido += "</tbody></table>";
    document.body.innerHTML += contenido;
}

miPrimeraFuncion();