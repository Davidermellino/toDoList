import { useState } from "react";
import FormList from "./assets/FormList/FormList";
import TaskList from "./assets/TaskList/TaskList";

function App() {
const [tasks, setTask] = useState([]);

const setDone = (taskIndex) => {
setTask ((prev)=>{
const taskCopy = [...prev];
taskCopy[taskIndex].done = !taskCopy[taskIndex].done;
return taskCopy
})
}

const removeTask = (taskIndex) => {
setTask ((prev)=> {
const taskCopy = [...prev];
taskCopy.splice(taskIndex,1)
return taskCopy;
})

}

const addTask = (newTask) => {
setTask((prev) => (
[
...prev,
{
taskName: newTask,
done: false,
},
]
));
}
return (
<div>
    <h1 className="text-center my-4">TO DO LIST</h1>
    <div className="container m-0">
        <div className="row justify-content-center w-100">
            <FormList addTask={addTask}></FormList>
        </div>
    </div>
    <TaskList tasks={tasks} removeTask={removeTask} setDone={setDone}></TaskList>
</div>
);
}

export default App;
