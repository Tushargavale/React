import {Client,Account,ID} from 'appwrite'
import config from "../Config/config";

export class AuthService{
    client=new Client()
    account;

    constructor()
    {
        this.client
            // .setEndpoint(config.appwriteurl)
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectID)
        this.account=new Account(this.client)
         
    }




    async createAccount({email,password,name}){
     
      try{
            console.log(this.account)
            const Account=await this.account.create(ID.unique(),email,password,name)
            console.log(Account)
            if(Account)
            {   // Call another method
               return this.Login({email,password})
            } 
            else 
                return Account
        }catch(err)
        {
            throw err
        }
    }
        


    async Login({email,password}){
        console.log({email,password})
        try {
            let user=await this.account.createEmailPasswordSession(email,password)
            if(user)
            return user 
            else 
            return null
        } catch (error) {
            return error
        }
    }


    async getcurrenUser(){
        
        try {
           let acount=await this.account.get()
           console.log('Account is successfully Fetched')
           return acount
        } catch (error) {
            return null
        }
        
        return null
    }


    async LogoutAccount(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            
        }
    }
}

const authservice=new AuthService()

export default authservice