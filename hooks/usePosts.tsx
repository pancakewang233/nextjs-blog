import axios from 'axios'
import { useEffect, useState } from "react";

type Post = {
    id: string;
    date: string;
    title: string
}

export const usePosts = () =>{
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    useEffect(()=>{
        setIsLoading(true)
        axios.get('/api/v1/posts').then(res=>{
            setPosts(res.data)
            setIsLoading(false)
            if(res.data.length === 0){
                setIsEmpty(true)
            }
        }), ()=>{
            setIsLoading(false)
        }
    }, [])
    return {posts, setPosts,isLoading, setIsLoading,isEmpty, setIsEmpty}
}