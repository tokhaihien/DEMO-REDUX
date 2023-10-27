import FormAdd from "./components/frm-add-task";
import ListTasks from "./components/list-task";

function Layout() {
    return (
        <>
            <div class="wrapper">
                <h1 class="text-center">TODO LIST APP</h1>
                {/* form add task new */}
                <FormAdd />
                
                {/* Task list */}
                <ListTasks/>
            </div>
        </>
    )
}
export default Layout