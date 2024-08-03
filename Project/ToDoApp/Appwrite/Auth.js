import { Client ,Account ,ID } from 'appwrite';  
import config from './config';								
				

    export class AuthService{

        client = new Client();

        constructor(){
            this.client
            .setEndpoint(config.appwriteurl)
            .setProject(config.appwriteProjectID);   

            this.account=new Account(this.client)
        }

        async createAccount({name,email,password}){
                try {
                    const acc=await this.account.createAccount(ID.unique(),email,password,name)
                    console.log(acc)
                } catch (error) {
                    console.log(error)
                }
        }
 
        
    }

    const authservice=new AuthService()

    export default authservice