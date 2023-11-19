import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
 
  const addTodo = (todo) =>{
    setTodos(prev =>{
      return [...prev, {id: Date.now(),...todo}]
    })
  }
  const updateTodo = (id, todo)=>{
    setTodos(prevList => {
      return prevList.map(task => task.id === id ? todo: task)
    })
  }
  const deleteTodo = (id)=>{
    setTodos(prev => prev.filter(item => item.id != id))
  }
  const toggleComplete = (id)=>{
    setTodos(prev => prev.map(item =>{
      if (item.id === id){
        return {...item, completed: !item.completed}
      }
      return item
    })) 
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length){
      setTodos(todos)
    }
  }, [])
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const heading = (
    <h2 className='text-center text-2xl font-medium mb-3'>Add your task here</h2>
  )
  return (
    <section className='p-5 w-full mx-auto md:w-3/5'>
      <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        {heading}
        <AddTask/>
        <TaskList/>
      </TodoProvider>
    </section>
  )
}

export default App
