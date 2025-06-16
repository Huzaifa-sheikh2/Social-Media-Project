import { useContext, useRef } from "react"
  import {PostList} from "../Store/Post-List-Store";
  

const Createpost = () => {

const {addpost}= useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef(); 


  function Post(event){
    event.preventDefault();
    console.log("Posted")
   const userId = userIdElement.current.value
   const postTitle =postTitleElement.current.value
   const postBody = postBodyElement.current.value
   const reactions = reactionsElement.current.value
   const tags =tagsElement.current.value.split(/(\s+)/)
   
   addPost (userId,postTitle,postBody,reactions,tags );
  }


  return (
    <form onSubmit={Post}> 



      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input type="text" className="form-control" id="title" ref={postTitleElement} />

        <div className="mb-3">
          <label htmlFor="user ID" className="form-label">User ID</label>
          
          <input type="text" className="form-control" id="user ID" ref={userIdElement}/>

        </div>

      </div>

      <div className="mb-3">
        <label htmlFor="Body" className="form-label">Post content</label>
        <textarea style={{ height: '200px' }} type="text" className="form-control" id="body" ref={postBodyElement} />

      </div>

      <div className="mb-3">
        <label htmlFor="Reactions" className="form-label">No of Reactions</label>
        <input type="text" className="form-control" id="Reactions" ref={reactionsElement}/>

      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" className="form-control" id="tags" ref={tagsElement}/>

      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}

export default Createpost