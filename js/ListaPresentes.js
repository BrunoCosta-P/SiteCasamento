class ListaPresentes{
    constructor(){
        this.sectionListaPresente = document.getElementById('sectionListaPresente')
        this.presente1 = document.getElementById('presente1')
        this.presente2 = document.getElementById('presente2')
        this.presente3 = document.getElementById('presente3')
        this.presente4 = document.getElementById('presente4')
        this.presente5 = document.getElementById('presente5')
        this.presente6 = document.getElementById('presente6')
        this.presente7 = document.getElementById('presente7')
        this.presente8 = document.getElementById('presente8')
        this.presente9 = document.getElementById('presente9')
        this.btnPresente = document.getElementById('btnPresente')
    }

    scrollLista(){
        window.requestAnimationFrame(this.calculoScrollLista.bind(this));
    } 

    calculoScrollLista(){
        const posicaoLista = this.sectionListaPresente.getBoundingClientRect()['y'];
       

        if (posicaoLista <= 235){
            this.presente1.style.transform = 'scale(1)';
            this.presente1.style.transition = 'transform .5s ease-in-out';

            this.presente2.style.transform = 'scale(1)';
            this.presente2.style.transition = 'transform .5s ease-in-out';
            this.presente2.style.transitionDelay = '.1s';

            this.presente3.style.transform = 'scale(1)';
            this.presente3.style.transition = 'transform .5s ease-in-out';
            this.presente3.style.transitionDelay = '.2s';
        }

        if (posicaoLista <= -123) {
            this.presente4.style.transform = 'scale(1)';
            this.presente4.style.transition = 'transform .5s ease-in-out';

            this.presente5.style.transform = 'scale(1)';
            this.presente5.style.transition = 'transform .5s ease-in-out';
            this.presente5.style.transitionDelay = '.1s';

            this.presente6.style.transform = 'scale(1)';
            this.presente6.style.transition = 'transform .5s ease-in-out';
            this.presente6.style.transitionDelay = '.2s';
        }

        if (posicaoLista <= -450){
            this.presente7.style.transform = 'scale(1)';
            this.presente7.style.transition = 'transform .5s ease-in-out';

            this.presente8.style.transform = 'scale(1)';
            this.presente8.style.transition = 'transform .5s ease-in-out';
            this.presente8.style.transitionDelay = '.1s';

            this.presente9.style.transform = 'scale(1)';
            this.presente9.style.transition = 'transform .5s ease-in-out';
            this.presente9.style.transitionDelay = '.2s';

            this.btnPresente.style.opacity = '1';
            this.btnPresente.style.transition = 'opacity 1s ease-in-out';
            this.btnPresente.style.transitionDelay = '.8s'
        }

    }




}
export {ListaPresentes}