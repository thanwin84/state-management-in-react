import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo, markCompleted} from "../features/todo/todoSlice";


function Button({type, handleClick, children}){
    const styles = {
        edit: "p-1 bg-green-500 hover:bg-green-700 rounded-md text-sm text-white",
        save: "p-1 bg-green-500 hover:bg-green-700 rounded-md text-sm text-white",
        delete: "p-1 ml-2 bg-red-500 hover:bg-red-700 rounded-md text-sm text-white"
    }
    return (
        <button className={styles[type]} onClick={handleClick}>
            {children}
        </button>
    )
}
export default function Task({task}){
    
    const [isEditing, setIsEditing] = useState(false)
    const [todo, setTodo] = useState(task)
    const dispatch = useDispatch()
     
    function handleOnChange(e){
        setTodo(prevTodo => ({...prevTodo, text: e.target.value}))
    }
    

    const handleSave = ()=>{
        dispatch(updateTodo(todo))
        setIsEditing(false)
    }

    const handleDelete = ()=>{
       dispatch(removeTodo(task.id))
    }

    const handleCheckBox = ()=>{
        setTodo(prev => ({...prev, completed: !prev.completed}))
        dispatch(markCompleted(todo))
    }
   
    return (
        <article className="flex justify-between shadow-md rounded-md px-3 py-2 w-4/5 group">
            <div className="my-auto flex w-full mr-2">
                <input 
                    className="mr-2"
                    type="checkbox"
                    checked = {todo.completed}
                    onChange={()=>handleCheckBox(todo)}
                    name ="checkbox"
                />
                {
                    isEditing ? (
                        <input 
                            type="text"
                            value={todo.text}
                            className="w-full p-1 focus:outline-none border border-gray-600 rounded-md"
                            onChange={handleOnChange}
                            name ="edit-task"
                        /> 
                    ) : 
                    (
                        <span>{todo.text}</span>
                    )
                }
            </div>
            <div className="flex invisible group-hover:visible">
                {
                    isEditing ? 
                    <Button 
                        type='save' 
                        handleClick={handleSave}
                    >
                        Save
                    </Button> :
                    <Button 
                        type='edit' 
                        handleClick={()=>setIsEditing(!isEditing)}
                    >
                        Edit
                    </Button>
                    
                }
                <Button 
                    handleClick={handleDelete} 
                    type='delete'
                >
                    Delete
                </Button>
            </div>
        </article>
    )
}