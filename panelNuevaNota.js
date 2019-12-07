export class panelNota{
    constructor(alto, ancho){
        this.panel=document.createElement("div");
        this.panel.style.width=ancho;
        this.panel.style.height=alto;
        this.labelTitulo=document.createElement("h1");
        this.labelTitulo.innerText="Titulo";
        this.inputTitulo=document.createElement("input");
        this.inputTitulo.id="titulo";
        this.inputTitulo.type="text";
        this.labelTexto=document.createElement("h1");
        this.labelTexto.innerText="Texto";
        this.inputTexto=document.createElement("input");
        this.inputTexto.id="texto";
        this.inputTexto.type="text";
        this.labelColor=document.createElement("h1");
        this.labelColor.innerText="Color";
        this.inputColor=document.createElement("input");
        this.inputColor.id="color";
        this.inputColor.type="color";
        this.boton=document.createElement("button");
        this.panel.appendChild(this.labelTitulo);
        this.panel.appendChild(this.inputTitulo);
        this.panel.appendChild(this.labelTexto);
        this.panel.appendChild(this.inputTexto);
        this.panel.appendChild(this.labelColor);
        this.panel.appendChild(this.inputColor);
        this.panel.appendChild(this.boton);
    }
    getPanel(){
        return this.panel;
    }
    getValores(){
        let arrayValores;
        arrayValores=new Array();
        arrayValores.push(this.inputTitulo.value);
        arrayValores.push(this.inputTexto.value);
        arrayValores.push(this.inputColor.value);
        return arrayValores;
    }
    addEventButton(evento){
        this.boton.onclick=evento;
    }
}