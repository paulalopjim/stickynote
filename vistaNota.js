class vistaNota{
constructor(alto,ancho,color,x,y){
    this.nota=document.createElement("div");
    this.nota.style.width=ancho;
    this.nota.style.height=alto;
    this.nota.style.backgroundColor=color;
    this.nota.style.top=x;
    this.nota.style.left=y;
    this.fecha=document.createElement("p");
    this.texto=document.createElement("p");
    this.titulo=document.createElement("h1");
    this.editar=document.createElement("button");
    this.nota.appendChild(this.fecha);
    this.nota.appendChild(this.texto);
    this.nota.appendChild(this.titulo);
    this.nota.appendChild(this.editar);
}
getNota(){
    return this.nota;
}
setTitulo(titulo){
this.titulo.innerText=titulo;
}
setTexto(texto){
this.texto.innerText=texto;
}
setFecha(fecha){
this.fecha.innerText=fecha;
}
dibujar(){
    this.nota.style.top=x;
    this.nota.style.left=y;
}
addEventButton(evento){
    this.editar.onclick=evento;
}
}