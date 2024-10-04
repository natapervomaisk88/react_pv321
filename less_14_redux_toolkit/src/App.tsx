import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./redux/slices/posts_slice";
import "./App.css";
import { IPostState } from "./interfaces/IPostState";
import { IPost } from "./interfaces/IPost";
function App() {
  const dispatch = useDispatch();
  const data: any = useSelector((state: IPostState) => {
    return state.posts;
  });
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <>
      {data.status === "loading" && <p>Loading ...</p>}
      {data.status === "error" && <p>Server error...</p>}
      {data.status === "done" &&
        data.posts.map((el: IPost, index: number) => (
          <p key={index}>
            {el.id}
            {el.title} {el.body}
          </p>
        ))}
    </>
  );
}

export default App;
