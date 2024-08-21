
import { useRef, useState ,useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';


export default function EditorT() {

    //let initialValue='<p>Tushar Gavalddddde  ddddrom Banagalore.</p>'
    const [initialValue,setInitialValue]=useState('<p>This is the initial content of the editor.</p>')
    const [editable,setEditable]=useState(true)

  const editorRef = useRef(null);
  
  
  
  
    const [editableRoot, setEditableRoot] = useState(true);


  
  
  
  
  
  const log = () => {
   // console.log(editorRef)
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
     console.log(editorRef) 
    }
  };


const edit=()=>{
    if(!editableRoot)
        setEditableRoot(true)
    else
        setEditableRoot(false)

      console.log(editableRoot)
   setInitialValue('<p>THIS IS SECOND VALUE.</p>')
}





  return (
    <>

    <button onClick={edit} >Make Editable</button>
      <Editor
       disabled={editableRoot} 
        apiKey='tg4ep0gw6q6985apg5hl4n40e1rw4px5z9m5jwqs7uvwzt5l'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue={initialValue}
        init={{

            
            editable_root:false,


  selector: 'textarea',  // cha// nge this value accordin.editable_root=false//// // //  to your HTML
 
  a_plugin_option: true,
  a_configuration_option: 400,




          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}