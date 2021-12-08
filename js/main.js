import { ContadorRegressivo } from "./ContadorRegressivo.js"
import {Noivos} from "./Noivos.js"
import { Info } from "./Info.js";


const relogio = new ContadorRegressivo();
relogio.contadorRegressivo();


window.onload = () => {
    const animaNoivos = new Noivos();
    document.addEventListener('scroll', animaNoivos.calculoScrollNoivos.bind(animaNoivos)); 

    //_____________________________________________________________________

    const animaInfo = new Info();
    document.addEventListener('scroll', animaInfo.scrollInfo.bind(animaInfo));

}

