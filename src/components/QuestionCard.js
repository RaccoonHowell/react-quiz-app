import React from "react"
import { getClassName } from "./utils"

function QuestionCard({ item, handleSelect, submittedAnswers }) {
    const answersHTML = item.answers.map(answerItem => {
         const classname = getClassName(answerItem, item, submittedAnswers)

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