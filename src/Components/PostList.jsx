import { useContext, useEffect } from "react"
import { PostList as PostListData } from "../Store/Post-List-Store.jsx"
import Post from "./Post.jsx"
import WelocomeMessage from "./WelcomeMessage.jsx"
const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListData)

    useEffect(()=>{
  fetch('https://dummyjson.com/posts')
.then(res => res.json())
.then((data) =>{
    addInitialPosts(data.posts)

    console.log(data.posts)
});
    },[])

    const handleGetPostsClick = ()=>{
      
    }
   
    return (
        <>

        {
            postList.length === 0 && <WelocomeMessage onGetPostsClick={handleGetPostsClick} />
        }
            {postList.map((post) => (
                <Post key={post.id} post={post}/>
                
            ))}
           
        </>
    )
}

export default PostList