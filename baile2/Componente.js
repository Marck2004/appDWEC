class Componente extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        let rutaImagen = this.getAttribute("imagen");
        let crearParrafo = this.getAttribute("parrafo");

        let img = document.createElement("img");
        img.height = "120";
        img.width = "120";
        img.src = rutaImagen;
        let parrafo = document.createElement("p");
        parrafo.innerHTML = crearParrafo;
        

        this.append(img,parrafo);
    }
}
let clases = window.customElements.define("app-clases",Componente);
export { clases };