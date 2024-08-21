const config={
    appwriteurl:String(import.meta.env.VITE_APP_APPWRITEURL) ,
    appwriteProjectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID) ,
    appwriteDB_ID:String(import.meta.env.VITE_APPWRITE_DB_ID),
    appwriteCollectionID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
 }
 

export default config