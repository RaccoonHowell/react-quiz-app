import React from "react"
import { nanoid } from "nanoid"

function QuestionCard({ item }) {
    const [selected, setSelected] = React.useState(false)

    function handleSelect() {
        setSelected(true)
    }
   
    const answersHTML = item.answers.map(answer => {
        const answerId = nanoid()

        return (
            <li 
                key={answerId} 
                // className="answer"
                selected={selected}
            
                className={selected ? "selected-answer" : "answer" } 
                onClick={handleSelect}
            >
                {answer}
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