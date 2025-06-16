import { createContext, useReducer } from "react";
 


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    if (action.type === 'DELETE_POST'){
        newPostList =currPostList.filter(post=>post.id!==action.payload.postid)
    }
    return newPostList
};

const PostListProvider = ({ children }) => {
    const [postList, dispathPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = () => {

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
                deletePost: deletePost
            }
        }> {children}</PostList.Provider >
    )
}

const DEFAULT_POST_LIST = [{
    id:'1',
    title:'Going to Dubai',
    body:'Hi friends i am going to Dubai for my vacations hope to enjoy alot',
    reactions: 2,
    userId:'user-9',
    tags: ['Vacations','Dubai','enjoying']
},{
   id:'2',
    title:'Going to Makkah',
    body:'Hi friends i am going to Makkah for my ramazan ',
    reactions: 5,
    userId:'user-10',
    tags: ['Worship','Makkah','enjoying']
}]

export default PostListProvider