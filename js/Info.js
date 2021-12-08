class Info {
    constructor(){
        this.sectionInfo= document.getElementById('sectionInfo')
        this.iframe = document.getElementById('iframe')
        this.carrosel = document.getElementById('carroselInfo')
        this.cerimonia= document.getElementById('cerimonia')
        this.local= document.getElementById('local')
    }

    scrollInfo(){
        window.requestAnimationFrame(this.calculoScrollInfo.bind(this));
    }

    calculoScrollInfo() {
        const posicaoInfo = this.sectionInfo.getBoundingClientRect()['y']
       // console.log(posicaoInfo) //250

        if (posicaoInfo <= 200) {
            this.carrosel.style.transform = 'translateX(0)';
            this.carrosel.style.transition = 'transform 1.5s ease-in-out';
            this.cerimonia.style.transform= 'translateX(0)';
            this.cerimonia.style.transition = 'transform 1.5s ease-in-out';
        }

        if (posicaoInfo <= 170){
            this.iframe.style.transform = 'translateX(0)';
            this.iframe.style.transition = 'transform 1.6s ease-in-out';
            this.local.style.transform= 'translateX(0)';
            this.local.style.transition = 'transform 1.6s ease-in-out';
        }
    }

}

export {
    Info
}