import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessaage";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);

  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.posts[0]);
        // console.log(data.posts[0].id);
        // console.log(data.posts[0].body);
        // console.log(data.posts[0].title);
        // console.log(data.posts[0].userId);
        // console.log(data.posts[0].reactions.likes);
        // console.log(data.posts[0].tags);

        data.posts.forEach((post) => {
          console.log("METHOD CALLED");
          addInitialPost(
            post.id,
            post.userId,
            post.title,
            post.body,
            post.reactions.likes,
            post.tags
          );
        });
      });
  };

  return (
    <>
      {postList.length === 0 ? (
        <WelcomeMessage
          handleGetPostsClick={handleGetPostsClick}
        ></WelcomeMessage>
      ) : (
        postList.map((post) => <Post key={post.id} post={post}></Post>)
      )}
    </>
  );
};

export default PostList;
