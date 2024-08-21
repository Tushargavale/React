import React, { useCallback, useEffect, useState ,useRef } from 'react'   

// import Button from '../Button'
import Input from '../input'
import Login from '../Login'
import RTE from '../RTE'
import {useForm,Controller} from 'react-hook-form'
import authservice from '../../Appwrite/Auth'
import DBService from '../../Appwrite/DBConfig'
import { useSelector } from 'react-redux'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import Select from '../Select'
function PostForm({post}) {


    const [img,setImg]=useState(undefined)
   // let ref=useRef()

    console.log(post)

    const navigate=useNavigate()
    const {register,watch,control , getValues ,setValue ,handleSubmit ,formState={errors} } =useForm({defaultValues:{
        title:post?.title || '',
        content:post?.content || '',
        status:post?.status || 'active',
        slug:post?.$id || ''
    }})



   // const {ref} =register('status')
    
    const userdata=useSelector((state)=>state.Auth.userData)
    const [name,setName]=useState('')

    const submit1=(data)=>{
        console.log('submited')
        console.log(data)
        console.log(userdata)
    }

    const handleError=(errors)=>{
        const ref={...register('status')}
        console.log(ref)
        console.log(errors)
    }

   


  

    const submit=async(data)=>{
       
      //  console.log(data.image[0])
        
        if(post)
        {
        let file=  data.image[0]? await DBService.FileUploadService(data.image[0]):null  
         
        if(post.featureimage)
        {
            DBService.deleteFile(post.featureimage)

        }

        const dbPost= await DBService.updateDocument(post.$id,{...data,
            featureimage: file ? file.$id : undefined
         //   featureimage:img
        })
       

        if(dbPost)
        {
            navigate(`/post/${dbPost.$id}`)
        }

         }
         else{
           
            const file= await DBService.FileUploadService(data.image[0])  
                console.log(file)
            if(file)
            {
                const fileID=file.$id 
                data.featureimage=fileID  

                const DBPOST=await DBService.createPost({
                    ...data,
                    userID:userdata.$id
                })

                if(DBPOST)
                {
                    navigate(`/post/${DBPOST.$id}`)
                }
            }

        }
    }

    const slugTransform=useCallback((value)=>{
       
   //    console.log(typeof(value))
        if(value && typeof(value)=="string")
        {
            const valu=value.trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
           //   console.log(valu)
            return valu
        }
        return ''
    },[])

    useEffect(()=>{
       const subscription = watch((value, { name }) => {
      //  console.log(value)
        setName(value.title)
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
            
        });
       // console.log('slug')

       return () => subscription.unsubscribe();
        },[watch])
    // },[watch,slugTransform,setValue])




  return (
   <>
   
   <form onSubmit={handleSubmit(submit ,handleError)} className="flex flex-wrap">
 
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={DBService.getFilePreviou(post.featureimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                  // ref={ref}
                    {...register("status", { required: true })}
                />

            
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit.."}
                </Button>
            </div>
        </form>
   
   
   </>
  )

}



export default PostForm