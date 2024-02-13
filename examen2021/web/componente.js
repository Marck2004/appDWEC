class Componente extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let rutaImagen = this.getAttribute("imagen");
        let parrafo = this.getAttribute("parrafo");

        let img = document.createElement("img");
        img.height = "120";
        img.width = "120";
        img.src = `imagenes/${rutaImagen}`;

        let p = document.createElement("p");
        p.innerHTML = parrafo;

        this.append(img,p);

        img.addEventListener("click",()=>{
            let divLogin = document.getElementById("login");
            divLogin.style.display = "block";
            divLogin.getElementsByTagName("input")[0].value = p.innerHTML;
            divLogin.getElementsByTagName("input")[1].disabled = false;

        });
    }
    
}
let usuario = window.customElements.define("ies-usuario",Componente);
export { usuario };