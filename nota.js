class nota{
    constructor(nombre, texto, fecha){
        this.nombre=nombre;
        this.texto=texto;
        this.fecha=new Date();
    }
    getNombre(){
        return this.nombre;
    }
    getTexto(){
        return this.texto;
    }
    getFecha(){
        return this.fecha;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }
    setTexto(texto){
        this.texto=texto;
    }
    diferenciaFecha(){
        let fechaHoy=new Date();
        return (fechaHoy-this.fecha);
    }
}