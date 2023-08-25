import { useState } from "react"




const AddTask = ({onAdd}) => {
    const [text,setText]= useState('')
    const [day,setDay]= useState('')
    const [reminder,setReminder]= useState(false)

    const onSubmit = (event) =>{
        event.preventDefault()
        if(!text){
            alert("Please add task")
            return 
        }

        onAdd({text,day,reminder})

        setText()
        setDay()
        setReminder(false)
    }
  return (
    <form className="add-form" onSubmit ={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input placeholder="Add your task" type="text" value={text} onChange={(event)=>{
                const response = event.target.value;
                
                setText(response)
            }}/>
        </div>
        <div className="form-control">
            <label>Day</label>
            <input placeholder="Add day to your task" type="text" value={day} onChange={(event)=>{
                const response = event.target.value;
                setDay(response)
            }} />
        </div>
        <div className="form-control-check">
            <label>Set reminder</label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(event)=>{
                const response = event.currentTarget.checked
                setReminder(response)

            }} />
        </div>
        
        <input type="submit" value='Save Task' className="btn"  /> 
    </form>
    
  )
}

export default AddTask
