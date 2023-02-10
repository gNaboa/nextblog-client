import axios from 'axios'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { UserContext } from '../../context/UserContext'

type CreatePostProps={
    title:string,
    summary:string,
    file:File[],
    
}

export default function CreatePost(){
    const {userInfo} = useContext(UserContext)
  const {register,handleSubmit} = useForm<CreatePostProps>()
  const [content,setContent] = useState("")
  
  async function handleCreatePost(data:CreatePostProps){
          const formdata = new FormData()
           formdata.append('title',data.title)
           formdata.append('summary',data.summary)
           formdata.append('content',content)
           formdata.append('file',data.file[0])
           formdata.append('author',userInfo.username!)
           console.log("FORM DATA", formdata)
       try{
        await axios.post("http://localhost:3001/api/createpost",formdata,{
            withCredentials: true,
            headers: {
               "Content-type": "multipart/form-data",
            },
            
          })
          
       }catch(e){
        console.log("FormError")
       }
        
   }

    return(
      <form onSubmit={handleSubmit(handleCreatePost)}>
        <input type="text" placeholder="Title" {...register('title')} />
        <input type="text"  placeholder="Summary"  {...register('summary')} />
        <input type="file"   {...register('file')} />
        <ReactQuill  value={content}  onChange={(e)=>setContent(e)}   /> 
        <button>Create post</button>
      </form>
    )

}