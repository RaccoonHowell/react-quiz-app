import React from "react"

function Button({ text, handleClick, classname }) {
    return (            
        <button className={classname} onClick={handleClick}>{text}</button>   
    )
}

export default Button