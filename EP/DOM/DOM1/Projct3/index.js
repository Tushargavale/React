// console.log('Welcome To Bangalore...')

// Color Scheme Switcher


let buttons=document.querySelectorAll('.button')  // Node List

const body=document.querySelector('body')
buttons.forEach((button,index)=>{
   // console.log(button)
    button.addEventListener('click',function(e){
        // console.log()
        console.log(e.target)
        let id=e.target.id
        body.style.backgroundColor=id
    })
})