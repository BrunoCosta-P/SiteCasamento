import { ContadorRegressivo } from "./ContadorRegressivo.js"
import {Noivos} from "./Noivos.js"
import { Info } from "./Info.js";
import { Dresscode } from "./Dresscode.js";
import {Dicas} from "./Dicas.js";
import {Rsvp} from "./Rsvp.js";
import {ListaPresentes} from "./ListaPresentes.js"


const relogio = new ContadorRegressivo();
relogio.contadorRegressivo();


window.onload = () => {
    const animaNoivos = new Noivos();
    document.addEventListener('scroll', animaNoivos.calculoScrollNoivos.bind(animaNoivos)); 

    //_____________________________________________________________________

    const animaInfo = new Info();
    document.addEventListener('scroll', animaInfo.scrollInfo.bind(animaInfo));

    //_____________________________________________________________________

    const animaDress = new Dresscode();
    document.addEventListener('scroll', animaDress.scrollDresscode.bind(animaDress))

    //_____________________________________________________________________

    const animaDicas = new Dicas();
    document.addEventListener('scroll', animaDicas.scrollDicas.bind(animaDicas))

    //_____________________________________________________________________

    const animaRsvp = new Rsvp();
    document.addEventListener('scroll', animaRsvp.scrollRsvp.bind(animaRsvp))

    //_____________________________________________________________________

    const animaLista = new ListaPresentes();
    document.addEventListener('scroll', animaLista.scrollLista.bind(animaLista))



}

