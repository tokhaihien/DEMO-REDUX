import { useRef } from "react";
import { add } from "../reducers/task-slice";
import { useDispatch } from "react-redux";

function FormAdd() {
    const taskName = useRef();
    const dispatch = useDispatch();

    function Add() {
        let newName = taskName.current.value;

        if(newName === ''){
            alert('Please input name of task!');
        }
        else{
            dispatch(add(newName));
        }
        
    }

    return (
        <>
            <div class="form-add-task">
                <label>Task name:</label>
                <input type="text" placeholder="Input name of task" ref={taskName} />
                <button onClick={Add}>Add</button>
            </div>
        </>
    )
}
export default FormAdd