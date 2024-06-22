
const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visi google'
}

// This is what react get (element)


const customRender=(ReactElement,container)=>{
    // first create a DOM element 
  /*  const domElement=document.createElement(ReactElement.type)
    domElement.innerHTML=ReactElement.children 
    domElement.setAttribute('href',ReactElement.props.href)
    domElement.setAttribute('target',ReactElement.props.target) 


    // Now add this Element into mainContainer  
    container.appendChild(domElement)
    */

    // write above code in loop Function 
    const domElement=document.createElement(ReactElement.type)
    domElement.innerHTML=ReactElement.children

    for(const prop in ReactElement.props)
        {
            if(prop===`children`) continue ;
            domElement.setAttribute(prop,ReactElement.props[prop])
        }
    container.appendChild(domElement)
}

















// Now we want to add this ReactElement in DOM


const mainContainer=document.querySelector('#root')

// Add this ReactElement into Document or in root element 
// let's make a one method  customRender
// it expect two thing's , what to inject and where to inject

customRender(ReactElement,mainContainer)
