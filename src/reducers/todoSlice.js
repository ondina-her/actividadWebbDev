import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {

    value: [{
        "name": "leer", 
        "description":"leer 30 paginas",
        "dueDate":"2025-11-01"
    }]
},
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload)
        },
        initAddTodo: (state, action) => {
            console.log(action.payload);
            state.value.push(action.payload);
        },
        removeTodo: (state, action) => {
            console.log(action.payload)
            state.value = state.value.filter((todo) => todo.name !== action.payload);
        },
    }

})

export const { addTodo, initAddTodo, removeTodo} = todoSlice.actions
export const selectTodos = (state) => state.todos.value

export default todoSlice.reducer