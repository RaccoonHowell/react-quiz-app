import React from "react"
// import { nanoid } from "nanoid"

function QuestionCard({ item, handleSelect }) {
    const answersHTML = item.answers.map(answerItem => {
        return (
            <li 
                key={answerItem.id} 
                className={answerItem.selected ? "selected-answer" : "answer" } 
                onClick={() => handleSelect(answerItem.id)}
            >
                {answerItem.answer}
            </li>
        )
    })

    return (
        <div className="question-card">
            <p className="question">{item.question}</p>

            <ul className="answers">
                {answersHTML}
            </ul>
        </div>
    )
}

export default QuestionCard

// category: "Geography"
// correct_answer: "False"
// difficulty: "easy"
// incorrect_answers: ['True']
// question: "Greenland is covered with grass and Iceland covered with ice."
// type: "boolean"