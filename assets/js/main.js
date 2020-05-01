class Calculadora {
    constructor() {
        this.container = document.querySelector('.container')
        this.btnNum = document.querySelector('.btn-num')
        this.display = document.querySelector('.display');
        this.displayTotal = document.querySelector('.displayTotal')
        this.divDisplay = document.querySelector('.divDisplay')
        this.sectionConta = document.querySelector('.conta')
        this.btnDel = document.querySelector('.btn-del')
        this.virarCientifica = document.querySelectorAll('.btn-cientifico')
        this.tdremover = document.querySelectorAll('td')
        
        // this.btnPi = document.querySelector('.btn-pi').value = '3.14'.innerText

        // console.log(this.btnPi.value);

        // this.addDisplay()
        this.capturaEnter()
        this.capturarClick()

    }


    capturarClick() {
        document.addEventListener('click', event => {

            let el = event.target;
            if (el.classList.contains('p-cientifica')) {

                for(let i of this.virarCientifica){
                    
                    
                        if(i.classList.contains('btn-cientificao')){
                            i.classList.remove('btn-cientificao') 
                            el.innerText = '>'
                            this.container.classList = 'container-cientifico'
                            console.log(this.container.classList);
                            
                               
                        }
                        else{
                            i.classList.add( 'btn-cientificao')
                            this.container.classList = 'container'
                            el.innerText = '<'

                        }
                    }


                // for(let i of this.tdremover){
                //     if(i.classList.contains('tdRemover')){
                //         console.log(i);
                        
                //         i.remove()
                //     }
                //     else{
                //         i.appendChild()
                //     }
                    
                    
                }
                // console.log(this.tdremover);
                


                
        
                
             
             
                

               

                // this.virarCientifica.style.display='none'

                // if(!this.virarCientifica.classList.contains('btn-cientifico'))

                //    this.virarCientifica.classList.add()

                //    if(el.classList.contains('pausar')){
                //     relogio.classList.add('pausado');
                //     clearInterval(iniciarTimer);
                // }

            
            if (el.classList.contains('btn-num')) this.addNumDisplay(el)
            if (el.classList.contains('btn-ce')) this.dellNumDisplay()
            if (el.classList.contains('btn-del')) this.deleteAll()
            if (el.classList.contains('resul')) this.resul()
            if (el.classList.contains('btn-pi')) {
                let x = el.value
                this.addNumDisplay(x)
            }

            if (el.classList.contains('btn-raiz')) {

                this.addNumDisplay(el)
            }
        })
    }

    


    capturaEnter() {
        document.addEventListener('keypress', event => {
            let el = event.target;
            if (el.keyCode === '13') this.resul()
        })
    }


    addNumDisplay(el) {
        if (el === '3.14159265359') return this.display.value += el;
        console.log();


        this.display.value += el.innerText;
        let ce = this.btnDel
        ce.innerText = 'CE'
        ce.setAttribute('class', 'btn btn-ce')

        this.display.focus();



    }

    dellNumDisplay() {
        this.display.value = this.display.value.slice(0, -1)
    }

    deleteAll() {
        this.display.value = ''
    }

    criarElemento() {

        let y = this.display.value
        let section = document.createElement('section')
        section.innerHTML = ' '
        this.divDisplay.innerHTML = ''
        this.divDisplay.innerHTML += y + '='

    }

    resul() {
        let raiz = '√'

        if (this.display.value !== '') {
            let ac = this.btnDel
            ac.innerText = 'AC'
            ac.setAttribute('class', 'btn btn-del')

            this.criarElemento()

            if (this.display.value.includes(raiz)) {
                let indices = [];

                //     //pega o indice que ta a raiz
                let idx = this.display.value.indexOf(raiz);

                //pega todo os indices que ta a raiz

                while (idx != -1) {
                    indices.push(idx)
                    idx = this.display.value.indexOf(raiz, idx + 1);
                }

                let removido
                let novoArray = Array.from(this.display.value)





                novoArray.map((e, indice) => {
                    // while(novoArray.includes(raiz)){




                    if (indices.includes(indice)) {
                        console.log(indice);
                        removido = novoArray.splice(indice, 1, '')


                    }
                    // }

                })




                console.log('removido', removido);
                console.log(novoArray);
                let arrayJunto = novoArray.join('')
                console.log('arrayjunto-> ', arrayJunto);

                console.log(indices);





                funcionando
                let valorParaRaiz = this.display.value.slice([indices + 1]);
                return this.display.value = Math.sqrt(valorParaRaiz)

            }

            if(this.display.value.includes('.')){

                let x = eval(this.display.value);
                this.display.value = x.toFixed(2)
            }
            let x = eval(this.display.value);
            this.display.value = x
        }

        else {
            this.divDisplay.innerHTML = ''
            this.display.value = ''
        }



        // if(this.display.value.includes('+')){
        //     let posicao =[]
        //     for(let i=0; i <= this.display.value.length; i++){
        //         let x = this.display.value.indexOf('+',i)
        //         posicao.push(x);


        //     }
        //     let c = Array.from( this.display.value)
        //    posicao.forEach(element => {

        //     //    console.log(this.display.value, element);

        //     //    console.log(element);

        //      if(element != -1)
        //        c.splice(0,element)




        //    console.log(c);


    }








    // this.display.value.reduce((a, valor)=>{
    //     a+ valor
    //     console.log(a);

    //     return a

    // },0)

}


const calculadora = new Calculadora();
