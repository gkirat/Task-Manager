
import Task from './Task'

const Tasks = ({ tasks ,onDelete,onToggle}) => {
 
  return (
    <>
      {tasks.map(function task(elem) {
        return (
          <Task key={elem.id} text={elem.text} reminder={elem.reminder} day={elem.day} onDelete={onDelete} id={elem.id} onToggle={onToggle} />
        );
      })}
    </>
  );
}

export default Tasks;


