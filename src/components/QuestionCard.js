import React from "react"

function QuestionCard({ item, handleSelect }) {
    const answersHTML = item.answers.map(answerItem => {
        return (
            <li 
                key={answerItem.id} 
                className={answerItem.selected ? "selected-answer" : "answer" } 
                onClick={() => handleSelect(item.id, answerItem.id)}
            >
                {answerItem.answer}
            </li>
        )
    })

    const questionString = `<p>${item.question}</p>`
    
    return (
        <div className="question-card">
            <div className="question" dangerouslySetInnerHTML={{__html: questionString}}/>
     
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