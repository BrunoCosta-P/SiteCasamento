class  Noivos { 
    constructor(){
        this.sectionNoivos = document.getElementById('sectionNoivos')
    }


    scrollNoivos(){
        window.requestAnimationFrame(this.calculoScrollNoivos.bind(this))
    }

    calculoScrollNoivos() {
        const posicaoNoivos = this.sectionNoivos.getBoundingClientRect()['y'];
        //console.log(posicaoNoivos);
    }


}

export {
    Noivos
}