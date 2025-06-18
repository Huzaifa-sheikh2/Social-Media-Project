const WelocomeMessage = ({ onGetPostsClick }) => {
    return (
        <>
            <center>

                <h2>There are not posts yet</h2>
                <button onClick={onGetPostsClick} className="btn btn-success">Fetch Posts</button>
            </center>
        </>
    )
}

export default WelocomeMessage;