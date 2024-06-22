import React ,{useContext} from 'react'
import useTheme from '../Context/Theam'

export default function Box2() {

    const {thememode,lightTheme,darkTheme}=useTheme()

    const onchangeButton=(e)=>{
      const darkstatus=e.currentTarget.checked
      if(darkstatus){
        darkTheme()
      }
      else{
        lightTheme()
      }
    }

     return (
    <>
    
   <body class="bg-black-200">

   <div class="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    onChange={onchangeButton}
    
    checked={thememode==='bg-yellow-600'}
    
    />
    <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Toglr Theme <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Toglr</a>.</label>
</div>






    
    <div id='BK' class="flex justify-center items-center min-h-screen bg-yellow-600 antialiased">  
   <div class="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-orange-300-200 rounded-[20px] p-3 bg-gray-800">
   
    <div class="text-center m-6">
      <h1 class="text-3xl font-semibold text-gray-100">Oublié votre mot de passe?</h1>
      <p class="text-gray-200">Il suffit d'entrer votre adresse e-mail ci-dessous et nous vous enverrons un lien pour réinitialiser votre mot de passe !!</p>
    </div>
   
    <div class="m-6">
      <form class="mb-4">
        <div class="mb-6">
          <label class="block mb-2 text-sm text-gray-100 dark:text-gray-400">Email Address</label>
          <input type="email" name="email" id="email" placeholder="votre adress email" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"/>
        </div>
        <div class="mb-6">
          <button type="button" class="w-full px-3 py-4 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none duration-100 ease-in-out">Envoyer le lien de réinitialisation</button>
        </div>
        <p class="text-sm text-center text-gray-200">
          Pas encore de compte ? 
          <a href="#!" class="font-semibold text-teal-500 focus:text-indigo-600 focus:outline-none focus:underline">Inscrivez-vous</a>.
        </p>
      </form>
     
      <div class="flex flex-row justify-center mb-8">
        <span class="absolute bg-gray-800 px-4 text-gray-100">Ou connectez-vous avec</span>
        <div class="w-full bg-gray-200 mt-3 h-px"></div>
      </div>
     
      <div class="flex flex-row gap-2">
          <button class="bg-gray-700 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-gray-900 duration-100 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor"></path></g></svg>
          Github
        </button>
        <button class="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-5" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"></use></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path></svg>
          Google
        </button><br /><br /><br /><br />
        <label>Dark</label>
        <input type="checkbox"
         name="checkbox" 
         className='sr-only peer' 
         />
        
      </div>  
    </div>
  </div>
</div>


</body>
    </>
  )
}
