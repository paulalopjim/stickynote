import {PanelNota} from './panelNuevaNota.js';
var panelNuevaNota;
var panelActualizarNota;
var arrayNotas= new Array();
var arrayVistaNotas= new Array();
var notaActual;
var div;
div=document.getElementById("tablon");
panelNuevaNota=new PanelNota(1200,800);

function ponerPanelNuevo(event){
    notaActual=event.target.parentNode;
    div.appendChild(panelNuevaNota.getPanel());
    panelNuevaNota.addEventButton(()=>{this.getValores()});
}
function getValores(){
    panelNuevaNota.getValores();
}