import React from "react"

function QuestionCard({ item, handleSelect, submittedAnswers }) {
    const answersHTML = item.answers.map(answerItem => {
        function getClassName() {
            if (answerItem.selected && !submittedAnswers) {
                return "selected-answer"
            } else if (submittedAnswers && answerItem.answer === item.correctAnswer) {
                return "correct-answer"
            } else if (submittedAnswers && answerItem.selected && answerItem.answer !== item.correctAnswer) {
                return "incorrect-answer"
            } else {
                return ""
            }
        }

        const whatClass = getClassName()

        return (
            <li 
                key={answerItem.id} 
                className={whatClass} 
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