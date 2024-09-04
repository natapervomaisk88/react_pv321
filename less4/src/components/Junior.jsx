import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function Junior() {
    const task = useContext(TaskContext);

    return (
        <div>
            I am Junior {task}
        </div>
    );
}