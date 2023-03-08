import { Link } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";

export default function PostComponent({ posts, user, setPosts }) {
  const handleClick = async () => {
    const allPosts = await postsAPI.deletePost(posts._id);
    setPosts(allPosts);
  };
  return (
    <div>
      {/* //if there is a problem with timing */}
      <div>user: {posts.user?.name}</div>
      <div>posted: {new Date(posts.updatedAt).toLocaleDateString()}</div>
      <div>
        text: <strong>{posts.content}</strong>{" "}
        <button onClick={handleClick}>x</button>
      </div>
      <hr />
    </div>
  );
}
