import { Client ,Account ,ID } from 'appwrite';  
import config from './config';								
				

    export class AuthService{

        client = new Client();
        account;

        constructor(){
            this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectID);   

            this.account=new Account(this.client)
        }

        async createaccount({name,email,password}){
            console.log(name,email,password)
                try {
                    const acc=await this.account.create(ID.unique(),email,password,name)
                    console.log(acc)
                     const resp=await this.Login({email,password})
                   return resp
                } catch (error) {
                    console.log(error)
                }
        }


        async Login({email,password}){
            try {
                const user=await this.account.createEmailPasswordSession(email,password)
                if(user)
                {
                    return this.getCurrentUser()
                }
                // console.log(user)
                // return user
            } catch (error) {
                console.log(error)
                return false
            }
        }   


        async Logout(){
            try {
                const resp=await this.account.deleteSessions()
         console.log(`Delete Response  `, resp)
                return true
            } catch (error) {
                console.log(error)
            }
        }


        async getCurrentUser(){
            try {
                const user=await this.account.get()
                return user 
            } catch (error) {
                console.log(error) 
                return false
            }
        }
 
        
    }

    const authservice=new AuthService()

    export default authservice