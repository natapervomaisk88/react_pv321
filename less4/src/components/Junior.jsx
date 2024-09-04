import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export default function Junior() {
    const task = useContext(TaskContext);
    return <div>I am Junior {task}</div>  
}