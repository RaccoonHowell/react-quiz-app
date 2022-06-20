import React from "react"
import Button from "../components/Button"
import { useState } from "react"
import { useEffect } from "react"
import { nanoid } from "nanoid"
import { shuffle } from "../utils"
import QuestionCard from "../components/QuestionCard"

function QuizPage() { 
    const [quizData, setQuizData] = useState([])
    const [submittedAnswers, setSubmittedAnswers] = useState(false)
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
    
    useEffect(() => {
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
                        correctAnswer: correct_answer,
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

    function getCount() {
        quizData.forEach(questionObject => {
            questionObject.answers.forEach(answerItem => {
                const { selected, answer } = answerItem
    
                if (selected && answer === questionObject.correctAnswer) {
                    setCorrectAnswerCount(prevCount => prevCount + 1)
                }
            })
        })
    }

    function handleSubmit() {
        setSubmittedAnswers(true)
        getCount()
    }
    
    function handlePlayAgain() {
        window.location.reload(false)
    }

    const questionCards = quizData.map(item => {
        return (
            <QuestionCard
                key={item.id}
                item={item}
                handleSelect={handleSelect}
                submittedAnswers={submittedAnswers}
            />
        )
    })

    return (
        <>
  	        <section className="question-list">
                  {questionCards}
            </section>

            {submittedAnswers ? 
                <section>
                    <p>You scored {correctAnswerCount}/5 correct answers</p> 

                    <Button handleClick={handlePlayAgain} text="play again" />
                </section>
                : 
                <Button handleClick={handleSubmit} text="check answers" />
            }
        </>
    )
}

export default QuizPage

// fix page load delay