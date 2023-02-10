import axios from 'axios'
import type { GetServerSideProps, NextPage } from 'next'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../components/Post/style.module.scss'

import {format} from 'date-fns'
import Link from 'next/link'

type postProps={
  id:string
  title:string,
  summary:string,
  created_at:string,
  content:string,
  cover:string,
  authorId:string
}

const Home: NextPage = () => {
 
  const [postList,setPostList] = useState<postProps[]>([])

  useEffect(()=>{
    axios.get("http://localhost:3001/api/getPosts")
    .then(response=>response.data)
    .then(data=>setPostList(data))
  },[])
  

  return (
    <main >
         {postList.map(post=>{
          return(
            <div className={styles.PostContainer} key={post.id} >
            <div>

           <Image 
              src={`http://localhost:3001/${post.cover}`} 
             
             width={700}
             height={300}
               style={{objectFit:'cover',maxWidth:'1050px',width:'100%'}}
                alt="Post-image"/> 
         </div>
         <div className={styles.PostInfo}>
             <Link href={`/Post/${post.id}`}>
                <h2>{post.title}</h2>
             </Link>   
               <div className={styles.PostAuthor}>
                  <a href="">{post.authorId}</a>
                  <p>{format(new Date(post.created_at), 'LLL dd, yyyy k:mm ')}</p>
                </div>
                <p>{post.summary}</p>
              </div>
        </div>
          )
         })}
    </main>
  )
}


// export const getServerSideProps:GetServerSideProps =async ()=>{



//   return{
//     props:{

//     }
//   }
// }

export default Home
