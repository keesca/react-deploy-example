import { createContext, useState, useEffect } from "react"
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([])

  function createTask(taskTitle, taskDescription) {
    setTasks([...tasks, {
      id: tasks.length + 1,
      title: taskTitle,
      description: taskDescription
    }
    ])
  }

  function deleteTask(id) {
    const newTasts = tasks.filter(task => task.id !== id)
    setTasks(newTasts)
    console.log(id)
  }

  useEffect(() => {
    setTasks(data)
  }, [])


  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  )
}

