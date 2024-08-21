import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'



function RTE({name,control ,label ,defaultValue=""}) {

  
 return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey='tg4ep0gw6q6985apg5hl4n40e1rw4px5z9m5jwqs7uvwzt5l'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            width:700,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | ",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  ) 
}

export default RTE