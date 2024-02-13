class ComponenteUsuarios extends HTMLElement{
    constructor(){
        super();
        this.rutaImagen;
        this.contenidoParrafo;
    }
    static get observedAttributes(){
        return ["imagen","parrafo"];
    }
    attributeChangedCallback(name,oldValue,newValue){
        switch (name) {
            case "imagen":
                this.rutaImagen = newValue;
                break;
            case "parrafo":
                this.contenidoParrafo = newValue;
            break;
        }
    }

    connectedCallback(){
        //let rutaImagen = this.getAttribute("imagen");
        //let contenidoParrafo = this.getAttribute("parrafo");
  
        let imagen = document.createElement("img");
        imagen.src = `imagenes/${this.rutaImagen}`;
        imagen.width = "120";
        imagen.height = "120";
        let parrafo = document.createElement("p");
        parrafo.innerHTML = this.contenidoParrafo;

        this.append(imagen,parrafo);
    }
}
let usuarios = window.customElements.define("ies-usuario",ComponenteUsuarios);
export { usuarios };