import { createContext, useReducer } from "react";
 


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    addInitialPosts: ()=>{},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    if (action.type === 'DELETE_POST'){
        newPostList =currPostList.filter(post=>post.id!==action.payload.postid)
    }
    else if (action.type === "ADD_INITIAL_POSTS")
        newPayload = action.payload.posts

    return newPostList
};

const PostListProvider = ({ children }) => {
    const [postList, dispathPostList] = useReducer(postListReducer, []);

    const addPost = (userId,postTitle,postBody,reactions,tags) => {
        console.log (`${userId} ${postTitle} ${postBody} ${reactions} ${tags}` )
    }


     const addInitialPosts = (posts) => {
        type : "ADD_INITIAL_POSTS"
        payload: {
            posts
        }
     }


    const deletePost = (postId) => {
        dispathPostList({
            type:"DELETE_POST",
            payload:{
                postId,
            },
        })

    }


    return (
        <PostList.Provider value={
            {
                postList: postList,
                addPost: addPost,
                deletePost: deletePost,
                addInitialPosts:addInitialPosts
            }
        }> {children}</PostList.Provider >
    )
}


export default PostListProvider