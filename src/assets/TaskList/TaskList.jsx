import Task from "../Task/Task";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function TaskList({ tasks, removeTask, setDone }) {
return tasks.map((task, index) => {
return (
<ul key={index}>
    <div className="d-flex">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Task taskName={task.taskName} done={task.done} />
                </div>
                <div className="col-6">
                    <Grid item xs={8}>
                        <DeleteIcon onClick={(event)=> {
                            event.preventDefault();
                            removeTask(tasks.indexOf(task));
                            }} />
                            <Checkbox {...label} onChange={()=> {
                            setDone(tasks.indexOf(task));
                            }} />

                    </Grid>
                </div>
            </div>
        </div>

    </div>
</ul>
);
});
}

export default TaskList;
