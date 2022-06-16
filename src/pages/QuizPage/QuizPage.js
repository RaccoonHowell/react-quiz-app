import React from "react"
import Button from "../../components/Button"
import { nanoid } from "nanoid"
import { shuffle } from "../../components/utils"
import QuestionCard from "../../components/QuestionCard"

function QuizPage() { 
    const [quizData, setQuizData] = React.useState([])
   
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
                        answers: shuffle([correct_answer, ...incorrect_answers])
                            .map(answerEl => ({
                                answer: answerEl,
                                id: nanoid(),
                                selected: false
                            })),
                        correctAnswer: correct_answer
                    }
                }))
            })
    }, []) 

    function handleSelect(itemId, id) {
          setQuizData(prevState => prevState.map(item => {
            const { answers } = item

            return item.id === itemId ?
                {
                    ...item, 
                    answers: answers.map(answer => {
                        return answer.id === id ?
                            {...answer, selected: !answer.selected}
                            :
                            {...answer, selected: false}
                    })
                } 
                : 
                item
        }))
    }

    function handleSubmit() {
        console.log('submit')
    }

    const questionCards = quizData.map(item => {
        console.log(item)
        return (
            <QuestionCard
                key={item.id}
                item={item}
                handleSelect={handleSelect}
            />
        )
    })

    return (
        <>
  	        <section className="question-list">
                  {questionCards}
            </section>

            <Button handleSubmit={handleSubmit} text="check answers" />
        </>
    )
}

export default QuizPage