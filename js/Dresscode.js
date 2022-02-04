class Dresscode {
    constructor(){
        this.sectionDresscode = document.getElementById('sectionDresscode')
        this.pFemenino = document.getElementById('pFemenino')
        this.dressF = document.getElementById('dressF')
        this.pMasculino = document.getElementById('pMasculino')
        this.dressM = document.getElementById('dressM')

    }

    scrollDresscode(){
        window.requestAnimationFrame(this.calculoScrollDresscode.bind(this));
    }

    calculoScrollDresscode(){

        const posicaoDresscode = this.sectionDresscode.getBoundingClientRect()['y'];
        //console.log(posicaoDresscode) //250

       if (posicaoDresscode <= 250 ) {
           this.pFemenino.style.transform = 'translateX(0)';
           this.pFemenino.style.opacity = '1';
           this.pFemenino.style.transition = 'transform 2.5s ease-in-out, opacity 2.5s ease-out';
           this.dressF.style.transform= 'translateX(0)';
           this.dressF.style.opacity = '1';
           this.dressF.style.transition = 'transform 2.5s ease-in-out, opacity 2.5s ease-out';
       }

       if (posicaoDresscode <= -270){
           this.dressM.style.transform = 'translateX(0)';
           this.dressM.style.opacity = '1';
           this.dressM.style.transition = 'transform 2.5s ease-in-out, opacity 2.5s ease-out';
           this.pMasculino.style.transform = 'translateX(0)';
           this.pMasculino.style.opacity = '1';
           this.pMasculino.style.transition = 'transform 2.5s ease-in-out, opacity 2.5s ease-out';
       }

    }

}

export {
    Dresscode
}