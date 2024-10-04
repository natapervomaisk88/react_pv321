import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from './redux/slices/posts.slice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => {
    return state.posts;
  })
  useEffect(() => {
    dispatch(getAllPosts);
  }, [])

  return (
    <>
      {data.posts?.map((el: any, index: number) => <p key={index}>{el.id} {el.title} {el.body}</p>)}
    </>
  )
}

export default App
