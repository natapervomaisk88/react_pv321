import Senior from "./Senior";
import { TaskContext } from "../context/TaskContext";

export default function TeamLead() {
  return (
    <TaskContext.Provider value="Зроби вёрстку">
      <div>
        I am TeamLead
        <Senior />
      </div>
    </TaskContext.Provider>
  );
}
