class MiMenu extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode : 'open'});
        this.fondo = this.getAttribute('colorfondo');
        shadowRoot.innerHTML = this.template;
    }
    get template(){
        return `<h1 style="background-color:${this.fondo}">ADIOS
            <slot name="bienvenida"></slot>
            <slot name='descripcion'></slot>
            <button type='button'>PULSAME</button>
            </h1>`;
    }
    static get observedAttributes() {
        return ["colorfondo"];
    }

    attributeChangedCallback(colorfondo, oldVal, newVal) {
        if (colorfondo == 'colorfondo' && oldVal != newVal) {
            this.fondo = newVal;
            this.shadowRoot.innerHTML = this.template;
        }
    }
}
let etiquetaMiMenu = window.customElements.define("mi-menu",MiMenu);
export { etiquetaMiMenu };