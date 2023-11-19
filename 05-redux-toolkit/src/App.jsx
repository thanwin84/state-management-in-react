import React, { useState } from 'react'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import './App.css'

function App(){
  return (
    <section className='w-4/5 mx-auto my-4'>
      <AddTask/>
      <TaskList/>
    </section>
  )
}

export default App
