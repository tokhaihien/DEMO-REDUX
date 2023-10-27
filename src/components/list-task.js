import { useDispatch, useSelector } from "react-redux";
import { del } from "../reducers/task-slice";

function ListTasks(props){
    const tasks = useSelector((state) => state.task.list);
    const dispatch = useDispatch();

    const Del = (task) => {
        dispatch(del(task));
    }

    const lstTasks = tasks.map( (task) => {
        return (
            <>
                <div class="task">
                    <p>{task}</p>
                    <button onClick={()=> Del(task)}>X</button>
                </div>
            </>
        );
    });

    
    return(
        <>
            <div class="list-tasks">
                    <h3 class="mb-5">List of tasks:</h3>

                    {lstTasks}

                </div>
        </>
    )
}
export default ListTasks