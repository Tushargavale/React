// // console.log('Welcome Ti Bangalore')


// let parent=document.querySelector('.parent')

// console.log(parent.children)
// //Here we will get a collection of HTML child 



// console.log(parent.children[1].innerHTML)


// // Print all element  
// // we can not iterate collection directly ''

// for(let i=0;i<parent.children.length;i++)
// {
//     console.log(parent.children[i].innerHTML)
// }



// // Change the styling of children '
// parent.children[1].style.color='red'
// // parent.children[2].style.backgroundColor = 'red';


// //  pring first element child 
// console.log(parent.firstElementChild.innerHTML)

// console.log('******************************')
// // Move from child to parent

// // This will give first child of mention class (.day) 
// let dayOne=document.querySelector('.day')

// console.log(dayOne) 
// console.log(dayOne.parentElement)  // This will give parent element 



// console.log('******************************')
// // give to sibling 
// console.log(dayOne.nextElementSibling)


// console.log('******************************')

// // // Prinit all nodes of parent 

// // // we have a parent node  
// console.log(parent.childNodes)
// // This will print 9 node but we have only 4 child of parent 
// // Node is conplete complex html structure 
// // if we give line break then this is also a text node , if we add comment then this is also a node 

// console.log(parent)  








//  Create a Node 



// let div=document.createElement('div')
// console.log(div)      // <div></div>

// // This will create empty div element 
// //Now add a value 
// div.className='main'
// div.id='divID' 
// // or give random ID value 
// div.id=Math.round(Math.random()*10000+1)

// // Give other attribute 

// // setAttribute is more effective
// div.setAttribute('title',"This is genetated Title")
// div.style.backgroundColor='yello'
// div.style.padding='1rem'


// // this is also right and below also right 
// // we can add textNode or add in innerHTML
// // div.innerHTML="Hello , Welcome to bangalore .."

// //  How to show (append) on page 




// let addText=document.createTextNode("Welcome")
// div.appendChild(addText)


// // Append in Body
// document.body.appendChild(div)




// ******************************************************// 

// Add a node first
let liNode=document.createElement('li')
liNode.innerHTML='TypeScript'

let ul=document.querySelector('.language')

ul.append(liNode) 

// Here we successFully added a new listitem node 


// but what if we want to add more node

function addLanguage(langName){
    let li=document.createElement('li')
    // Here we add innerHTML , for that we need to travers whole node
    li.innerHTML= `${langName}`   
    let parent=document.querySelector('.language')
    parent.append(li)
}



addLanguage('C++')
addLanguage('typescript')
addLanguage('Ruby')



// Make it more optimize 

function optimizeFunction(langName){
    let li=document.createElement('li')
    // Here we use appendChilde method , here we dont need to travers all node
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
    
}

optimizeFunction('Golang')



// Edit the Value 

let secondLang=document.querySelector('li:nth-child(2)')

// Normal approach
secondLang.innerHTML='C sharp'


//second Approach 
let newli=document.createElement('li')
newli.textContent='Mojo'
secondLang.replaceWith(newli)


//Third Approach 
const firstChild=document.querySelector("li:first-child")
firstChild.outerHTML='<li>typescriot</li>'


// Remove last child  
const lastLang=document.querySelector('li:last-child')
lastLang.remove()













