import React, {useState} from "react";
import { useTodo } from "../contexts/TodoContext";


// is edting ? edit field will be enableed 
// on Save click --> change 
export default function Task({task}){
    
    const [isEditing, setIsEditing] = useState(false)
    const [todo, SetTodo] = useState(task)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    function handleEdit(e){
        
        SetTodo(prev => {
            return {
                ...prev,
                todo: e.target.value
            }
        })
    }
    // action functions
    function handleSave(){
        updateTodo(todo.id, todo)
        setIsEditing(!isEditing)
        
    }

    function handleDelete(){
        deleteTodo(task.id)
    }
    function handleCheckBox(id){
        toggleComplete(id)
    }
    const editTask = (
        <input 
            type="text"
            value={todo.todo}
            className="focus:outline-none w-full"
            onChange={handleEdit}
        /> 
    )
    return (
        <article className="flex justify-between shadow-md rounded-md ">
            <div className="my-auto">
                <input 
                    className="mr-2"
                    type="checkbox"
                    checked = {task.completed}
                    onChange={()=>handleCheckBox(todo.id)}
                />
            {
                isEditing ? editTask : 
                <span>{task.todo}</span>
            }
            </div>
            <div className="flex">
                {
                    isEditing ?
                    <button 
                        onClick={handleSave}
                        className="p-1 bg-green-500 hover:bg-green-700 rounded-md text-sm text-white"
                    >
                        Save
                    </button> :
                    <button 
                        onClick={()=>setIsEditing(!isEditing)}
                        className="p-1 bg-green-500 hover:bg-green-700 rounded-md text-sm text-white"
                    >
                        Edit   
                    </button>
                }
                <button 
                    onClick={handleDelete}
                    className="p-1 ml-2 bg-red-500 hover:bg-red-700 rounded-md text-sm text-white"
                >
                    Delete
                </button>
            </div>
        </article>
    )
}