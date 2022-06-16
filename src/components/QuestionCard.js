import React from "react"

function QuestionCard({ item, handleSelect }) {
    const answersHTML = item.answers.map(answerItem => {

        return (
            <li 
                key={answerItem.id} 
                className={answerItem.selected ? "selected-answer" : "answer" } 
                onClick={() => handleSelect(item.id, answerItem.id)}
                dangerouslySetInnerHTML={{__html: answerItem.answer}}
            />   
        )
    })
    
    return (
        <div className="question-card">
            <p className="question" dangerouslySetInnerHTML={{__html: item.question}}/>
     
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