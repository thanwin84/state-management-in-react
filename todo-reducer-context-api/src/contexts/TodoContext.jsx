import { 
    createContext, 
    useContext, 
    useReducer,
    useEffect
 } from "react";
import taskReducer from "./taskReducer";

export const TodoContext = createContext(null)

export const useTodo = ()=>{
    return useContext(TodoContext)
}  

const todos = JSON.parse(localStorage.getItem("todos"))
const initialState = todos.length ? todos: []

export  function TodoProvider({children}){
    const [todos, dispatch] = useReducer(taskReducer,  initialState)

      useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos])
    
    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
    
}