import React, { useEffect, useId, useState } from "react";
import Input from "../FormComponent/Input";
import { useForm } from "react-hook-form";
import Editors from "./Editor";
import Selector from "../FormComponent/Selector";
import parse from 'html-react-parser'
import {useNavigate,useLocation} from 'react-router-dom'
import {submitPost,updatePost} from '../../Redux/AsyncThunk.js'
import { useDispatch } from "react-redux";




function PostForm({ post ,type='submit' }) {
  const dispatch=useDispatch()
// function PostForm(){
const {state}= useLocation()
// const post=state
const navigate=useNavigate()


  const id = useId();
  const { getValues, setValue, register, watch, control, handleSubmit } =
    useForm({
      defaultValues: {
        content: post?.content || "",
        title: post?.title || "",
        slug: post?.slug || "",
        option: post?.option || "public",
      },
    });



const submit = (data) => {

const {content,title,slug,option} =data
// console.log({content,title,slug,option})
  if(post)
  {
    console.log('Post is start for update')
    dispatch(updatePost({content,title,slug,option,user:'admin'}))
    // dispatch(updatePost()).then((data)=>console.log(data)).catch((err)=>console.log(err))
    navigate('/AllBlogs')
  }else{
    dispatch(submitPost({content,title,slug,option}))
    navigate('/AllBlogs')
  }

};   

useEffect(()=>{
    
  function replaceSpacesWithDashes(inputString) {
    return inputString.split(' ').join('-');
}

  setValue('slug',replaceSpacesWithDashes(getValues('title')))
},[watch('title')])



  return (
    <>

              

      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-8">
        <div className="w-full max-w-fit bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(submit)}>
            <Input
              type="title"
              id="title"
              label="Title"
              placeholder="title"
             {...register('title',{required:true}   )  }
              
              
            ></Input>

            <Input
              type="slug"
              id="slug"
              label="Slug"
              placeholder="slug"
               disabled={true}
              {...register("slug", { required: true })}
            ></Input>
            <br />
            
              
            <Editors
              control={control}
              name="content"
              initialValue={getValues('content')}
              key={id}
            ></Editors>   

            

            <Selector
              options={["public", "private"]}
              initialvalue={getValues("option")}
              {...register("option")}
            ></Selector>

            <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              type="submit"
            >
              {type}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostForm;
