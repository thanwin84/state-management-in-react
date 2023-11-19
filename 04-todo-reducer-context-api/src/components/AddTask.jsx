import React, {useState} from "react";
import { useTodo } from "../contexts/TodoContext";
import { actions } from "../contexts/taskReducer";


export default function AddTask(){
    const [todo, setTodo] = useState("")
    const {dispatch} = useTodo()
    function handleChange(e){
        setTodo(e.target.value)
    }
    function handleClick(){
        if (!todo.length){
            return
        }
        dispatch({type: actions.added, todo: {todo:todo, completed: false}})
        setTodo("")
    }
    return (
        <div className="flex flex-row justify-between ">
           <input 
                type="text"
                name = "todo"
                onChange={handleChange}
                placeholder="Enter your todo"
                className=" px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none w-3/4"
                value = {todo}
            />
            <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                  onClick={handleClick}

            >
                Add Task
            </button>
        </div>
    )
}