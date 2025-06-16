import { useContext } from "react"
import { PostList as PostListData } from "../Store/Post-List-Store.jsx"
import Post from "./Post.jsx"
const PostList = () => {
    const { postList } = useContext(PostListData)
    console.log(postList)
    return (
        <>
            {postList.map((post) => (
                <Post />
            ))}
            {/* <Post /> */}
        </>
    )
}

export default PostList