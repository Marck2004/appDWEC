class MiLateral extends HTMLElement{
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode:'open'});
        shadowRoot.innerHTML = this.template;
    }
    get template(){
        return `<style>
        img{
            border: 2px solid red;
            width: 300px;
        }
        </style>
        <img src='CLASE 41 EJEMPLOS INCLUIDOS-20240108/coche1.png'>
        `;
    }
}
let etiquetaMiLateral = window.customElements.define("mi-lateral",MiLateral);
export { etiquetaMiLateral };