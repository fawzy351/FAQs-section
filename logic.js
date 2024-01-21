// get vars 
let questions = document.querySelectorAll('.question')
let icons = document.querySelectorAll('.icon')
let upCrosses = document.querySelectorAll('.icon span:last-child')
// set default questioin 
icons[0].classList.add('active')
questions[0].nextElementSibling.classList.add('active')
upCrosses[0].style.opacity = '0'
questions[0].style.marginBottom = '20px' 
// set function 
questions.forEach((question,index)=>{
    question.onclick = function(){
        if(icons[index].classList.contains('active')){
            icons[index].classList.remove('active')
            questions[index].nextElementSibling.classList.remove('active')
            upCrosses[index].style.opacity = '1'
            this.style.marginBottom = '0'
        }else{
            for(let i = 0; i < questions.length; i++){
                icons[i].classList.remove('active')
                questions[i].nextElementSibling.classList.remove('active')
                upCrosses[i].style.opacity = '1'
                questions[i].style.marginBottom = '0'
            }
            icons[index].classList.add('active')
            questions[index].nextElementSibling.classList.add('active')
            upCrosses[index].style.opacity = '0'
            this.style.marginBottom = '20px'
        }
    }
})