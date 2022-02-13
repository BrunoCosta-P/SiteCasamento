class Rsvp {
    constructor(){
        this.sectionRsvp = document.getElementById('sectionRsvp')
        this.formRsvp = document.getElementById('formRsvp')
        this.nomeForm = document.getElementById('nomeForm')
        this.nome = document.getElementById('nome')
        this.telForm = document.getElementById('telForm')
        this.tel = document.getElementById('tel')
        this.emailForm = document.getElementById('emailForm')
        this.email = document.getElementById('email')
        this.dateForm = document.getElementById('dateForm')
        this.date = document.getElementById('date')
        this.btnForm = document.getElementById('btnForm')

        this.inputRadio = document.getElementById('inputRadio')
        this.radioSim = document.getElementById('radioSim')
        this.radioNao = document.getElementById('radioNao')
        this.labelSim = document.getElementById('labelSim')
        this.labelNao = document.getElementById('labelNao')

        this.labelNomeNao = document.getElementById('labelNomeNao')
        this.nomeNao = document.getElementById('nomeNao')
        this.btnFormNao = document.getElementById('btnFormNao')
    }

    scrollRsvp(){
        window.requestAnimationFrame(this.calculoScrollRsvp.bind(this));
    }


    calculoScrollRsvp(){
        const posicaoRsvp = this.sectionRsvp.getBoundingClientRect()['y']
        

        if (posicaoRsvp <= 357){
            this.labelSim.style.opacity='1';
            this.labelSim.style.transition = 'opacity 1.2s ease-in-out';
            this.labelSim.style.transitionDelay = 'no-delay';

            this.labelNao.style.opacity='1';
            this.labelNao.style.transition = 'opacity 1.2s ease-in-out';
            this.labelNao.style.transitionDelay = '.2s';

        }
    }

    exibirFormSim(){

    }

    exibirFormNao(){
        
    }

}

export {Rsvp}