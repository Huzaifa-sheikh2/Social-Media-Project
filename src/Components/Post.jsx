import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {PostList} from "../Store/Post-List-Store";

const Post = ({post})=>{

  const {deletePost} = useContext(PostList)
    return (
        <div className="card" style={{width:"40rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <p>{`User Id is ${post.id}`}</p>
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    <p>{`Tags: ${post.tags}`}</p>
    <MdDelete onClick={()=> deletePost(post.id) }/>
    {post.tags.map((tags)=>(
      
    <span className='badge text-bg-primary'>{tags} </span>
    ))}
   
  </div>
</div>
    )
}

export default Post