import React from "react"
import Button from "../../components/Button"
import { nanoid } from "nanoid"
import { shuffle } from "../../components/utils"
import { getCount } from "../../components/utils"
import QuestionCard from "../../components/QuestionCard"

function QuizPage() { 
    const [quizData, setQuizData] = React.useState([])
    const [submittedAnswers, setSubmittedAnswers] = React.useState(false)
    const [correctAnswerCount, setCorrectAnswerCount] = React.useState(0)
   
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

    function handleSubmit() {
        setSubmittedAnswers(true)

        getCount(quizData, setCorrectAnswerCount)
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

            <Button handleSubmit={handleSubmit} text="check answers" />

            {submittedAnswers ? 
                <p>You scored {correctAnswerCount}/5 correct answers</p> 
                : 
                ""
            }
        </>
    )
}

export default QuizPage

// move getting the count to a function and to util? - SHOULD FUNCTIONS USING STATE
// BE IN UTILS? OR STAY IN MAIN COMPONENT

// have it return a gamefinished state to put in useeffect to fetch new questions
// if playing again

// fix page load delay