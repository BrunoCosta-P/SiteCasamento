class Dicas {
    constructor(){
        this.sectionDicas = document.getElementById('sectionDicas')
        this.dicasP1 = document.getElementById('dicasP1');
        this.dicasP2 = document.getElementById('dicasP2');
        this.in1 = document.getElementById('in1');
        this.in2 = document.getElementById('in2');
        this.in3 = document.getElementById('in3');
        this.in4 = document.getElementById('in4');
        this.in5 = document.getElementById('in5');
        this.in6 = document.getElementById('in6');

    }

    scrollDicas(){
        window.requestAnimationFrame(this.calculoScrollDicas.bind(this));
    }


    calculoScrollDicas(){

        const posicaoDicas = this.sectionDicas.getBoundingClientRect()['y'];
       

        if (posicaoDicas <= 405){
            this.dicasP1.style.transform = 'translateX(0)';
            this.dicasP1.style.transition = 'transform 1.5s ease-in-out';
            this.in1.style.transform = 'scale(1)';
            this.in1.style.transition = 'transform .5s ease-in-out';
            this.in1.style.transitionDelay = 'no'
            this.in2.style.transform = 'scale(1)';
            this.in2.style.transition ='transform .5s ease-in-out';
            this.in2.style.transitionDelay = '.2s'
            this.in3.style.transform = 'scale(1)';
            this.in3.style.transition ='transform .5s ease-in-out';
            this.in3.style.transitionDelay = '.3s'
        }

        if (posicaoDicas <= -100) {
            this.dicasP2.style.transform = 'translateX(0)'
            this.dicasP2.style.transition = 'transform 1.5s ease-in-out';
            this.in4.style.transform = 'scale(1)';
            this.in4.style.transition = 'transform .5s ease-in-out';
            this.in4.style.transitionDelay = 'no'
            this.in5.style.transform = 'scale(1)';
            this.in5.style.transition = 'transform .5s ease-in-out';
            this.in5.style.transitionDelay = '.2s'
            this.in6.style.transform = 'scale(1)';
            this.in6.style.transition = 'transform .5s ease-in-out';
            this.in6.style.transitionDelay = '.3s'
        }

    }
}

export {
    Dicas
}