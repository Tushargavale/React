// // let div=document.createElement('div')
// // div.innerHTML='Welcome to Bangalore'
// // document.body.append(div) 
// // document.body.appendChild(div)

// const { defineConfig } = require("vite")

// // Create a small Project which have input field one button and list of input after clicking on button

// let inputNode=document.createElement('input')
// inputNode.id='input'
// document.body.append(inputNode)
// inputNode.placeholder='Enter your Todo'
// let btn=document.createElement('button')
// console.log(btn)
// btn.innerHTML='Submit'

// btn.onclick=addToCOntainer

// document.body.append(btn)

// for(let i=0;i<2;i++)
// {
//     let br=document.createElement('br')
//     document.body.append(br)
// }


// let container=document.createElement('div')
// container.id='parent'


// document.body.append(container)


// function addToCOntainer(){
    
//     let text=document.getElementById('input').value
//     console.log(text)
//     let node=document.createElement('div')
//     node.innerHTML=text
//     let par=document.getElementById('parent')
//     par.appendChild(node)
//    document.getElementById('input').value=''

// }


let box=document.createElement('div')
box.innerHTML='Welcoem'

box.style.backgroundColor='yellow'
document.body.appendChild(box)
let inputBox=document.createElement('input')
inputBox.id='inp'
inputBox.style.padding='8px'
document.body.appendChild(inputBox)

function fun(){
    let inner=document.getElementById('inp').value 
    let div=document.createElement('div')
    let btn=document.createElement('button')
    btn.innerHTML='Delete'
     let h4=document.createElement('h4')
     h4.innerHTML=inner
     div.appendChild(h4)
     div.appendChild(btn)
     document.body.appendChild(div)
     btn.addEventListener('click',()=>{
        console.log('Clicked')
        document.body.removeChild(div)
     })
     document.getElementById('inp').value=''

}

let btn=document.createElement('button')
btn.innerHTML='submit'
document.body.appendChild(btn)
btn.onclick=fun