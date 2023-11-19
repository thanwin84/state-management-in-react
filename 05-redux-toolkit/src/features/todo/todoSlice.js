import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id: 1, text: "Hello world", completed: false}
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(item=> item.id != action.payload)
        },
        updateTodo: (state, action)=>{
            const updatedTodo = action.payload
            state.todos = state.todos.map(item => updatedTodo.id === item.id ? updatedTodo: item)
        },
        markCompleted: (state, action)=>{
            const todo = action.payload
            state.todos = state.todos.map(item => todo.id === item.id ? todo: item)
        }


    }
})

export const {addTodo, removeTodo, updateTodo, markCompleted} = todoSlice.actions
export default todoSlice.reducer