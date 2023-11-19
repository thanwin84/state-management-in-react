import React, {useState} from "react";
import { useTodo } from "../contexts/TodoContext";
import { actions } from "../contexts/taskReducer";



function DeleteButton({handleDelete}){
    return (
        <button 
            onClick={handleDelete}
            className="p-1 ml-2 bg-red-500 hover:bg-red-700 rounded-md text-sm text-white"
        >
            Delete
        </button>
    )
}
function SaveButton({handleSave}){
    return (
        <button 
            onClick={handleSave}
            className="p-1 bg-green-500 hover:bg-green-700 rounded-md text-sm text-white"
        >
            Save
        </button>
    )
}
function EditButton({handleEdit}){
    return (
        <button 
            onClick={handleEdit}
            className="p-1 bg-green-500 hover:bg-green-700 rounded-md text-sm text-white"
        >
            Edit   
        </button>
    )
}
export default function Task({task}){
    
    const [isEditing, setIsEditing] = useState(false)
    const [todo, SetTodo] = useState(task)
    const {dispatch} = useTodo()

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
        dispatch({type: actions.updated, id: todo.id, todo: todo})
        setIsEditing(!isEditing)
        
    }

    function handleDelete(){
        dispatch({type: actions.deleted, id: task.id})
    }
    function handleCheckBox(id){
        dispatch({type: actions.checkedDone, id: id})
    }
    const editTask = (
        <input 
            type="text"
            value={todo.todo}
            className="w-full p-1 focus:outline-none border border-gray-600 rounded-md"
            onChange={handleEdit}
        /> 
    )
    return (
        <article className="flex justify-between shadow-md rounded-md px-3 py-2">
            <div className="my-auto flex w-full mr-2">
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
                    <SaveButton handleSave={handleSave}/> :
                    <EditButton handleEdit={()=>setIsEditing(!isEditing)} />
                    
                }
                <DeleteButton handleDelete={handleDelete} />
            </div>
        </article>
    )
}