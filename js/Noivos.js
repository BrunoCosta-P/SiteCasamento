class  Noivos { 
    constructor(){
        this.sectionNoivos = document.getElementById('sectionNoivos')
        this.nomeNoivos = document.getElementById('nomeNoivos')
        this.btnSubir = document.getElementById('btnSubir')
    }


    scrollNoivos(){
        window.requestAnimationFrame(this.calculoScrollNoivos.bind(this))
    }

    calculoScrollNoivos() {
        const posicaoNoivos = this.sectionNoivos.getBoundingClientRect()['y'];
        


        if (posicaoNoivos >= -299){

            this.nomeNoivos.style.transform = `translateY(${(-posicaoNoivos - 109)}%)`;

        }


        
        //_____________________________________________________________________
        //Botão Subir

        if (posicaoNoivos <= -600){
            this.btnSubir.style.opacity = '1';
            this.btnSubir.style.cursor = 'none';
            this.btnSubir.style.transition = 'opacity 1s ease-in-out';
        } 
        if(posicaoNoivos >= -600){
            this.btnSubir.style.opacity = '0';
        }
    }


}

export {
    Noivos
}