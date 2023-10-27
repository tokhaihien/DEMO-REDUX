import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        list: [],
    },
    reducers: {
        add: (state, action) => {
            state.list = state.list.concat(action.payload);
        },

        del: (state, action) => {
            state.list = state.list.filter(task => task !== action.payload);
        },
    },
})

export const {add, del} = taskSlice.actions;
export default taskSlice.reducer