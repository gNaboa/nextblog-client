import axios from 'axios'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import styles from './style.module.scss'

export function Header(){
  

 
 const {userInfo,setUserInfo} = useContext(UserContext)
 const {username} = userInfo
 
  useEffect(()=>{
  axios.get("http://localhost:3001/api/profile",
     {withCredentials:true,
          headers: {
         "Content-type": "application/json",
     }}).then(response=>setUserInfo(response.data))

     },[])

      console.log(username)

     async function logout(){
         await axios.get("http://localhost:3001/api/logout",{
             withCredentials:true,
            headers:{
                "Content-type": "application/json"
             }
         })

    }
    return(
        <header className={styles.Container}>
            <Link href="/"> <strong>MyBlog</strong> </Link>
        
            <nav>
      
                {username==undefined ?<>
                <Link href="/Login">Login</Link>
                <Link href="/Register">Register</Link>
                </>
              :  <>
                <button onClick={logout}>Logout</button>
              <Link href="/CreatePost">Welcome {username} Create a new post</Link>
              </>} 
           
            </nav>
        </header>
    )

}
