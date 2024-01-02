export async function generarCartonAleatorio(){
    let datos = await fetch("consultaPartidaActual.php");
    let cartonAleatorio = await datos.json();
    //let carton = [2,7,12,33,49]
    let premio = [];
    let listaNumeros = [...cartonAleatorio[0].NumerosActuales.split(",")]
    for (let i = 0; i < 10; i++) {
        premio.push(listaNumeros[Math.floor(Math.random() * listaNumeros.length)]);
    }
    return premio;
}