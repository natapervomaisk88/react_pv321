import './App.css'
import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import IPost from "../redux/reducers/IPost"

function App() {
  const authorRef: any = useRef();
  const titleRef: any = useRef();
  const contentRef: any = useRef();
 
  const posts: IPost[] = useSelector((state: any) => state.postsReducer.posts);
 
  const dispatch = useDispatch();
 
  const addPost = () => {
    const author = authorRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    dispatch({ type: "ADD_POST", payload: { id: Date.now(), author, title, content, likes: 0 } });
  };
 
  // function handlerKey(event: any): void {
  //   if (event.key == "Enter") {
  //     addPost();
  //   }
  // }
 
  function removePost(id: number) {
    dispatch({ type: "DEL_POST", payload: id });
  }

  function likePost(id: number) {
    dispatch({ type: "LIKE_POST", payload: id });
  }

  return (
    <>
    <h1>Posts (Redux + React)</h1>
      <div className="card">
        <input type='email' ref={authorRef} placeholder="authors' email" /><br />
        <input ref={titleRef} placeholder='title' /><br />
        <textarea ref={contentRef} placeholder='content' /><br />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className="posts-container">
          {posts.length ? (
            posts.map((el) => (
              <div key={el.id} className="post">
                <span>{el.author}</span>
                <button className='button-delete' onClick={() => {removePost(el.id);}}>x</button>
                <h2>{el.title}</h2>
                <p>{el.content}</p>
                <button className='button-like' onClick={() => {likePost(el.id)}}>❤{el.likes}</button>
              </div>
            ))
          ) : (
            <h2>No data</h2>
          )}
        </div>
    </>
  )
}

export default App
