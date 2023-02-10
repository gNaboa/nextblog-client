import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import style from './style.module.scss'
import { format } from 'date-fns'
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Link from "next/link"
type PostProps = {
    data: {
        id?:string,
        title: string,
        summary: string,
        content: string,
        cover: string,
        authorId: string,
        created_at: string
    }
}


export default function Post({ data }: PostProps) {

    const {userInfo} = useContext(UserContext)
  
    return (
        <div className={style.PostContainer}>

            <div>
                <h1>{data.title}</h1>
            </div>
            <div >
                {format(new Date(data.created_at), 'LLL dd, yyyy k:mm ')} <br />
                <span >Posted by {data.authorId}</span>
            </div>
            <div>
                {userInfo.password == data.authorId ? <Link href={`/EditPost`}>Updatepost</Link>:"" }
            </div>
            <div >

                <Image
                    alt="Image"
                    width={1000}
                    height={300}
                    style={{ maxWidth: '1100px', objectFit: 'cover', width: '100%' }}

                    src={`http://localhost:3001/${data.cover}`} />
            </div>
            <div style={{ textAlign: 'start' }}>

                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        </div>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {

    const postId = String(params!.slug)

    const { data } = await axios.get(`http://localhost:3001/api/post/${postId}`)

    console.log("DATA ", data)
    return {
        props: {
            data
        }
    }
}