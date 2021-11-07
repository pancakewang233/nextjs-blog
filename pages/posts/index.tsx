
import getPosts from "lib/posts";
import { GetStaticProps, NextPage } from "next";

type Props = {
    posts: Post[]
}
const PostsIndex:NextPage<Props> = (props) => {
    // const {isLoading,isEmpty,posts} = usePosts()
    const {posts} = props
    return (
        <div>
            <h1>文章列表</h1>
            {/* {isLoading ? <div>加载中</div> :
                isEmpty ? <div>没用文章</div> :
                posts.map(p=><div key={p.id}>
                    {p.id}
                </div>)
            } */}
            {posts.map(p=><div key={p.id}>
                {p.id}
            </div>)}
        </div>
    )
}

export default PostsIndex;

export const getStaticProps:GetStaticProps = async() =>{
    const posts = await getPosts()
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    }
}