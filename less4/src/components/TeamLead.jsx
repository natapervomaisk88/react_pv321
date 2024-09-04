import Senior from "./Senior";
import { TaskContext } from "../context/TaskContext";

export default function TeamLead() {
    return (
        <TaskContext.Provider value="Зроби верстку">
            <div>
                I am TeamLead
                <Senior />
            </div>
        </TaskContext.Provider>
    );
}
