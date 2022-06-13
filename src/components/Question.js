import React from "react"

function Question({questionObject}) {
    return (
        <div className="question-card">
            <p className="question">{questionObject.question}</p>
        </div>
    )
}

export default Question

// category: "Geography"
// correct_answer: "False"
// difficulty: "easy"
// incorrect_answers: ['True']
// question: "Greenland is covered with grass and Iceland covered with ice."
// type: "boolean"