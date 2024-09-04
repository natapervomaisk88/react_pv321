import { TaskContext } from "../context/TaskContext";
import Senior from "./Senior";

export default function TeamLean() {

	return (
		<>
			<TaskContext.Provider value="Make webdesing">
				<div>
					I am TeamLead
					<Senior />
				</div>
			</TaskContext.Provider>
		</>
	);
};
