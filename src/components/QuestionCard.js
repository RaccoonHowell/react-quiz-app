import React from "react"

function QuestionCard({ item, handleSelect, submittedAnswers }) {
    function getClassName(answerItem) {
        const { selected, answer } = answerItem
        const { correctAnswer } = item
    
        if (selected && !submittedAnswers) {
            return "selected-answer"
        } else if (submittedAnswers && answer === correctAnswer) {
            return "correct-answer"
        } else if (submittedAnswers && selected && answer !== correctAnswer) {
            return "incorrect-answer"
        } 
    }

    const answersHTML = item.answers.map(answerItem => {
        const classname = getClassName(answerItem)

        return (
            <li 
                key={answerItem.id} 
                className={classname} 
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