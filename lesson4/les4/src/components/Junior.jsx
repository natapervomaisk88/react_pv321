import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function Junior() {
    const task = useContext(TaskContext);
    return (
      <>
        <div>I am Junior {task}</div>
      </>
    )
  }

  export default Junior;