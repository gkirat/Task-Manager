const Button = ({color,text,handleClick,showAdd}) => {
   
  return (
    <div>
       <button onClick={handleClick} className="btn" style={{backgroundColor:color }}>{text}</button>
    </div>
  )
}

export default Button
