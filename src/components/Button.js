import React from "react"

function Button({ text, handleClick }) {
    return (            
        <button onClick={handleClick}>{text}</button>   
    )
}

export default Button