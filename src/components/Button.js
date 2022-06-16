import React from "react"

function Button({ text, handleSubmit }) {
    return (
        <button onClick={handleSubmit}>{text}</button>   
    )
}

export default Button