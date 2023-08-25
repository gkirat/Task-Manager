import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'
import {useState} from "react";

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: 'Buy groceries',
      day: 'Monday',
      reminder: true
    },
    {
      id: 2,
      text: 'Go for a run',
      day: 'Tuesday',
      reminder: false
    },
    {
      id: 3,
      text: 'Complete coding assignment',
      day: 'Wednesday',
      reminder: true
    }
  ])
  // Toggle Reminder
  const toggleReminder = (id) => {

    setTasks(tasks.map((task => task.id === id ? {...task,reminder: !task.reminder }:task)))
  }

  // Add Task
  const addTask =(task) => {
    console.log("clicked",task)
    const id = Math.floor(Math.random()*10000 +1)
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }
  // Delete Task  
  const deleteTask = (id) =>{
      setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Show task
  const toggleShowTask =() =>{
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
     <Header title="Task Tracker" toggleShTa={toggleShowTask}  showAdd = {showAddTask}  />
     {showAddTask && <AddTask  onAdd={addTask} />}
    { tasks.length >0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to show"}
    </div>
  );
}

export default App;
