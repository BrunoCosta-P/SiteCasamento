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
    }

    scrollRsvp(){
        window.requestAnimationFrame(this.calculoScrollRsvp.bind(this));
    }


    calculoScrollRsvp(){
        const posicaoRsvp = this.sectionRsvp.getBoundingClientRect()['y']
        console.log(posicaoRsvp) //357

        if (posicaoRsvp <= 357){
            this.nomeForm.style.opacity='1';
            this.nomeForm.style.transition = 'opacity .4s ease-in-out';
            this.nomeForm.style.transitionDelay = 'no-delay';

            this.nome.style.opacity='1';
            this.nome.style.transition = 'opacity .4s ease-in-out';
            this.nome.style.transitionDelay = '.3s';

            this.telForm.style.opacity='1';
            this.telForm.style.transition = 'opacity .4s ease-in-out';
            this.telForm.style.transitionDelay = '.4s';

            this.tel.style.opacity='1';
            this.tel.style.transition = 'opacity .4s ease-in-out';
            this.tel.style.transitionDelay = '.5s';

            this.emailForm.style.opacity='1';
            this.emailForm.style.transition = 'opacity .4s ease-in-out';
            this.emailForm.style.transitionDelay = '.6s';

            this.email.style.opacity='1';
            this.email.style.transition = 'opacity .4s ease-in-out';
            this.email.style.transitionDelay = '.7s';

            this.dateForm.style.opacity='1';
            this.dateForm.style.transition = 'opacity .4s ease-in-out';
            this.dateForm.style.transitionDelay = '.8s';

            this.date.style.opacity='1';
            this.date.style.transition = 'opacity .4s ease-in-out';
            this.date.style.transitionDelay = '.9s';

            this.btnForm.style.opacity='1';
            this.btnForm.style.transition = 'opacity .4s ease-in-out';
            this.btnForm.style.transitionDelay = '1s';

        }




    }




}

export {Rsvp}