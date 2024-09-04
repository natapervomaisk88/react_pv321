import Senior from "./Senior";
import { TaskContext } from "../context/TaskContext";

export default function TeamLead() {
    return (
    <TaskContext.Provider value="Сделай вёрстку!">
        <div>
            I am Team Lead! 
            <Senior />
        </div>  
    </TaskContext.Provider>
    );    
}  

export { TaskContext };