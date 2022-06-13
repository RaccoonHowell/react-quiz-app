import React from "react"
import Button from "../../components/Button"
import Question from "../../components/Question"
import { nanoid } from "nanoid"

function QuizPage() { 
    const [quizData, setQuizData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5") 
            .then(res => res.json())
            .then(data => {
                setQuizData(data.results)
            })
    }, []) 

    const questions = quizData.map(obj => {
        return (
            <Question
                key={nanoid}
                questionObject={obj}
            />
        )
    })
    return (
        <>
  	        <section className="question-list">
                  {questions}
            </section>
                       
            <Button text="check answers" />
        </>
    )
}

export default QuizPage