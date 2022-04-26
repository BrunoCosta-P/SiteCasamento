this.formRsvp = document.getElementById("formRsvp")
this.formRsvpNao = document.getElementById("formRsvpNao")
this.nomeForm = document.getElementById('nomeForm')
this.nome = document.getElementById('nome')
this.telForm = document.getElementById('telForm')
this.tel = document.getElementById('tel')
this.emailForm = document.getElementById('emailForm')
this.email = document.getElementById('email')
this.dateForm = document.getElementById('dateForm')
this.date = document.getElementById('date')
this.btnForm = document.getElementById('btnForm')

this.labelNomeNao = document.getElementById('labelNomeNao')
this.nomeNao = document.getElementById('nomeNao')
this.btnFormNao = document.getElementById('btnFormNao')


function showFormYes() {
    this.formRsvp.style.display="flex"
    this.formRsvpNao.style.display="none"
    
    this.nomeForm.style.opacity='1';
    this.nomeForm.style.transitionProperty='opacity';
    this.nomeForm.style.transition = ' .4s ease-in-out';
    this.nomeForm.style.transitionDelay = 'no-delay';

    this.nome.style.opacity='1';
    this.nome.style.transitionProperty='opacity';
    this.nome.style.transition = ' .4s ease-in-out';
    this.nome.style.transitionDelay = '.3s';

    this.telForm.style.opacity='1';
    this.telForm.style.transitionProperty='opacity';
    this.telForm.style.transition = ' .4s ease-in-out';
    this.telForm.style.transitionDelay = '.4s';

    this.tel.style.opacity='1';
    this.tel.style.transitionProperty='opacity';
    this.tel.style.transition = ' .4s ease-in-out';
    this.tel.style.transitionDelay = '.5s';

    this.emailForm.style.opacity='1';
    this.emailForm.style.transitionProperty='opacity';
    this.emailForm.style.transition = ' .4s ease-in-out';
    this.emailForm.style.transitionDelay = '.6s';


    this.email.style.opacity='1';
    this.email.style.transitionProperty='opacity';
    this.email.style.transition = ' .4s ease-in-out';
    this.email.style.transitionDelay = '.7s';

    this.dateForm.style.opacity='1';
    this.dateForm.style.transitionProperty='opacity';
    this.dateForm.style.transition = ' .4s ease-in-out';
    this.dateForm.style.transitionDelay = '.8s';

    this.date.style.opacity='1';
    this.date.style.transitionProperty='opacity';
    this.date.style.transition = ' .4s ease-in-out';
    this.date.style.transitionDelay = '.9s';

    this.btnForm.style.opacity='1';
    this.btnForm.style.transitionProperty='opacity';
    this.btnForm.style.transition = '.4s ease-in-out';
    this.btnForm.style.transitionDelay = '1s';



}
function showFormNo(){
    this.formRsvp.style.display="none"
    this.formRsvpNao.style.display="flex"
}