import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            console.log("agregar todo:", action.payload);
            // state.todos.push(action.payload);
            const { _id, ...todoWithoutId } = action.payload;

            fetch('http://localhost:3000/tasks/addTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": '123456'
                },
                body: JSON.stringify(action.payload)
            }).catch((error) => {
                console.error("Error al agregar el todo:", error);
            });
        },
        initAddTodo: (state, action) => {
            console.log("init agregar todo:", action.payload);
            //state.todos = action.payload;
            state.todos = [...action.payload];

            
        },
        removeTodo: (state, action) => {
            console.log("eliminar todo:");
            state.todos = state.todos.filter(task => task._id !== action.payload);
            fetch('http://localhost:3000/tasks/removeTask/' + action.payload, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": '123456'
                },
            }).then(res => {
  if (!res.ok) {
    throw new Error("Respuesta no OK del servidor");
  }
}).catch((error) => {
                console.error("Error al eliminar el todo:", error);
            });
        },
    }
})

export const { addTodo, initAddTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos.todos;

export default todoSlice.reducer;
