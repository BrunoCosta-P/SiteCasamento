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
        

        if (posicaoInfo <= 392) {
            this.carrosel.style.transform = 'translateX(0)';
            this.carrosel.style.opacity = '1';
            this.carrosel.style.transition = 'transform 2.7s ease-out, opacity 2.7s ease-out';
            this.cerimonia.style.transform= 'translateX(0)';
            this.cerimonia.style.opacity = '1';
            this.cerimonia.style.transition = 'transform 2s ease-out, opacity 2s ease-out';
        }

        if (posicaoInfo <= 170){
            this.iframe.style.transform = 'translateX(0)';
            this.iframe.style.opacity = '1';
            this.iframe.style.transition = 'transform 2.7s ease-out, opacity 2.9s ease-out';
            this.local.style.transform= 'translateX(0)';
            this.local.style.opacity = '1';
            this.local.style.transition = 'transform 2.3s ease-out, opacity 2.3s ease-out';
        }



    }

}

export {
    Info
}