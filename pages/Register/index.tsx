import axios from 'axios'
import { useForm } from 'react-hook-form'
import styles from './style.module.scss'

type FormData={
    username:string,
    password:string
}

export default function Register(){

   const {register,handleSubmit} = useForm<FormData>()

   async function handleSendInfo(data:FormData){
        try{
               await  axios.post('http://localhost:3001/api/register',{
                  username:data.username,
                  password:data.password
            })
        }catch(e){
          console.log("Error in post request")
        }
 
   }

      return(
         <div className={styles.FormContainer} >

            <h1>Register</h1>
            <form action="">
                <input type="text" placeholder="Username" {...register('username')} />
                <input type="text" placeholder="Password" {...register('password')}  />
                <button onClick={handleSubmit(handleSendInfo)}>Register</button>
            </form>
         </div>
      )
}