import { useContext } from "react"
import { PostList as PostListData } from "../Store/Post-List-Store.jsx"
import Post from "./Post.jsx"
const PostList = () => {
    const { postList } = useContext(PostListData)
   
    return (
        <>
            {postList.map((post) => (
                <Post key={post.id} post={post}/>
                
            ))}
           
        </>
    )
}

export default PostList