import { TaskContext } from "../context/TaskContext";
import Senior from "./Senior";
import { createContext, useContext } from "react";

function TeamLead() {

    return (
      <TaskContext.Provider value = "Do a task">
      <div>I am TeamLead
            <Senior></Senior>
        </div>
      </TaskContext.Provider>
    )
  }

  export default TeamLead;
