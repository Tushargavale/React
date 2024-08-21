import {Client,Account,ID,Databases,Query,Storage} from 'appwrite'
import config from "../Config/config";
// import { Query } from 'mongoose';
// import { query } from 'express';


export class DBServices{

    Client=new Client()

    databases;
    bucket;

    constructor()
    {
        this.Client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectID)
        this.databases=new Databases(this.Client)
        this.bucket=new Storage(this.Client)
    }

    async createPost({title,slug,content,featureimage,userID,status}){
        try {
            console.log({title,slug,content,featureimage,userID,status})
            return await this.databases.createDocument(
                config.appwriteDB_ID,
                config.appwriteCollectionID,
                slug,
                {
                    title  ,
                    content,
                    userID,
                    status,
                    featureimage
                }

            )
        } catch (error) {
            console.log(error)
            return null
        }
    }


    async updateDocument(slug,{title,content,featureimage,status}){
        try {
            console.log(featureimage)
            let i=await this.databases.updateDocument(config.appwriteDB_ID,config.appwriteCollectionID,slug,{title,content,featureimage,status})
           console.log(i)
            return i
        } catch (error) {
            console.log(error)
            return null
        }
    }


    async deletePost(slug){
        try {
          return  await this.databases.deleteDocument(config.appwriteDB_ID,config.appwriteCollectionID,slug)
            return true 
        } catch (error) {
            return false
        }
    }


    async getDocument(slug){
        try {
         return  await this.databases.getDocument(config.appwriteDB_ID,config.appwriteCollectionID,slug)
        } catch (error) {
            return null
        }
    }


    async listDocument(Queries=[Query.equal("status","active")]){
        try {
          return   await this.databases.listDocuments(config.appwriteDB_ID,config.appwriteCollectionID,Queries)
        } catch (error) {
            return null
        }
    }

    // File upload service  

    async FileUploadService(file){
        try { 
            console.log(file)
           let File= await this.bucket.createFile(config.appwriteBucketID,ID.unique(),file)
           console.log(File)
           return File
            //This method will return a File ID , and this ID we use in updateDocument methdo as a fetureImage
        } catch (error) {
            console.log(error)
            return false
        }
    }


    async deleteFile(fileID)   
    {   
        try {
            await this.bucket.deleteFile(config.appwriteBucketID,fileID)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }


    async getFilePreviou(fileID)
    {
      
        try {
   //         console.log(fileID)
          let image=  this.bucket.getFilePreview(config.appwriteBucketID,fileID)
     //     console.log(image)
          return image
        } catch (error) {
            console.log(error)
            return false
        }
    }


}


const DBService=new DBServices()

export default DBService