import React from "react";
import Task from "./Task";
import {useSelector} from 'react-redux'
// get todos

export default function TaskList(){
    const todos = useSelector(state => state.todos)       
    return (
        <section className="mt-4">
            {
                todos.map(task => {
                    return <Task key={task.id} task={task} />
                })
            }
        </section>
    )
}