class  Noivos { 
    constructor(){
        this.sectionNoivos = document.getElementById('sectionNoivos')
        this.nomeNoivos = document.getElementById('nomeNoivos')
    }


    scrollNoivos(){
        window.requestAnimationFrame(this.calculoScrollNoivos.bind(this))
    }

    calculoScrollNoivos() {
        const posicaoNoivos = this.sectionNoivos.getBoundingClientRect()['y'];
        console.log(posicaoNoivos);


        if (posicaoNoivos >= -299){

            this.nomeNoivos.style.transform = `translateY(${(-posicaoNoivos - 109)}%)`;

        }
    }


}

export {
    Noivos
}