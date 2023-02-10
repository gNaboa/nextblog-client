import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { UserContext } from '../../context/UserContext'


export default function UpdatePost(){

    return(
 
       <div>
        Edit post here...
       </div>
    )

}
