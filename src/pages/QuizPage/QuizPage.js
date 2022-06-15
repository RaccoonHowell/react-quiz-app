import React from "react"
import Button from "../../components/Button"
import { nanoid } from "nanoid"
import { shuffle } from "../../components/utils"
import QuestionCard from "../../components/QuestionCard"

function QuizPage() { 
    const [quizData, setQuizData] = React.useState([])
    // const [selected, setSelected] = React.useState(false)

    //  function handleSelect() {
    //     setSelected(true)
    // }

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5") 
            .then(res => res.json())
            .then(data => {
                setQuizData(data.results.map(item => {
                    const { category, type, difficulty, question, correct_answer, incorrect_answers } = item
                
                    return {
                        id: nanoid(),
                        category: category,
                        type: type,
                        difficulty: difficulty,
                        question: question,
                        answers: shuffle([correct_answer, ...incorrect_answers]),
                        correctAnswer: correct_answer
                    }
                }))
            })
    }, []) 

    const questionCards = quizData.map(item => {
        console.log(item)
        return (
            <QuestionCard
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <>
  	        <section className="question-list">
                  {questionCards}
            </section>

            <Button text="check answers" />
        </>
    )
}

export default QuizPage