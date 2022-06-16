export function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
}

export function getClassName(answerItem, item, submittedAnswers) {
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