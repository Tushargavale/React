import {Client,ID,Account,Databases,Query,Storage} from 'appwrite'
import config from './config'


export class DBServices{

    Client=new Client()
    databases 

    constructor()
    {
        this.Client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectID)
            this.databases=new Databases(this.Client)

    }
  
    async createPost({title,slug,content,option,userID})
    {       
        try{
            const resp=await this.databases.createDocument(config.appwriteDB_ID,config.appwriteCollectionID,slug,{
                title,content,option,userID
            })
    
            console.log(resp) 
        }catch(err)
        {
            console.log(err)
            return err
        }
       return resp
    }   

    //  [Query.equal("option","public")]   
    //Query.or([Query.lessThan("size", 5), Query.greaterThan("size", 10)])
    
    async getAllPost(queries=[Query.or([Query.equal('option','public'),Query.equal('userID','userID')])]){
        try{
            const resp=await this.databases.listDocuments(config.appwriteDB_ID,config.appwriteCollectionID,queries)
            console.log(resp)
            return resp
           }catch(err){
            console.log(err)
            return err
        }
    }


    async updatePost({content,title,slug,option,userID})
    {
        try {
           
            const post=await this.databases.updateDocument(config.appwriteDB_ID,config.appwriteCollectionID,slug,{content,title,option,userID})
            return post
        } catch (error) {
            console.log(error)
            return error
        }
    }





}



const DBService=new DBServices()

export default DBService