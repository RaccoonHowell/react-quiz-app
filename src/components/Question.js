import React from "react"
import { nanoid } from "nanoid"
import { shuffle } from "./utils"

function Question({ item }) {
    const all_answers_shuffled = shuffle([...item.incorrect_answers, item.correct_answer])

    const answersHTML = all_answers_shuffled.map(answer => {
        const answerId = nanoid()

        return (
            <li key={answerId} className="answer">{answer}</li>
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

export default Question

// category: "Geography"
// correct_answer: "False"
// difficulty: "easy"
// incorrect_answers: ['True']
// question: "Greenland is covered with grass and Iceland covered with ice."
// type: "boolean"