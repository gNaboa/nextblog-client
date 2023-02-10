import axios from 'axios'
import { useForm } from 'react-hook-form'
import styles from './style.module.scss'
import cookieClient from 'react-cookie'
type FormData = {
   username: string,
   password: string
}
export default function Login() {

   const { register, handleSubmit } = useForm<FormData>()


 async function handleSendInfo(data: FormData) {
      try {

    const response=await  axios.post('http://localhost:3001/api/login', {
            username: data.username,
            password: data.password
         }, {
            withCredentials: true,
            headers: {
               "Content-type": "application/json",
            },
         })
       
   if(response.status==200){
      window.location.href="http://localhost:3000"
   }

  } catch (e) {
         console.log("Error in post request")
     }
  }


   return (
      <div className={styles.FormContainer} >

         <h1>Login</h1>
         <form action="">
            <input type="text" placeholder="Username" {...register('username')} />
            <input type="text" placeholder="Password" {...register('password')} />
            <button onClick={handleSubmit(handleSendInfo)}>Login</button>
         </form>
      </div>
   )
}