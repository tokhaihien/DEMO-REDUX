import { configureStore } from "@reduxjs/toolkit";

import taskSlice from "../reducers/task-slice";

export default configureStore({
    reducer: {
        task: taskSlice,
    }
})