// import React from 'react';
import Button from './Button'

const Header = ({title,toggleShTa,showAdd}) => {
//    const handleClick = (event) => {
//          console.log("event")
//     }
console.log(showAdd)
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? '#5C5470':'Green'} text={showAdd ? 'Close':'Add'} handleClick={toggleShTa} showAdd={showAdd} />
        </div>
    )
}

export default Header;


// color='white' text='Add'