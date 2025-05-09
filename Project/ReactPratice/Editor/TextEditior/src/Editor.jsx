import React,{useRef,useState,useEffect,useMemo} from 'react'

import JoditEditor from 'jodit-react';


const Editor = ({placeholder='Type something'}) => {
  const editor = useRef(null);
	const [content, setContent] = useState('');

    async function SubmitBlog() {
        
    }
    
    useEffect(()=>{
        console.log(content)
        console.log(editor)
    },[content])

	const config = useMemo(() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Start typings...',
            height:600,
            toolbarButtonSize: 'middle',
            style:{
               color:'black',
               'text-align':'left',
                margine:'10px',
                padding:'10px'
                  
            },
            enter:'br'
      
		}),
		[placeholder]
	);


	return (
	<>
    <JoditEditor
            className='editor'
           
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {setContent(newContent)}}
		/>
        <button onClick={SubmitBlog} >Submit</button>
    </>	
	);
}

export default Editor