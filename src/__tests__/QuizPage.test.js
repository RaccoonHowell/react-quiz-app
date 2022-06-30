import { render, screen, fireEvent } from "@testing-library/react"
import QuizPage from "../pages/QuizPage"

jest.mock("nanoid", () => {
    return { nanoid: () => "1234" }
})

describe("QuizPage component", () => {
    it("renders check answers button", () => {
        render(<QuizPage />)

        const buttonElement = screen.getByText(/check answers/i)

        expect(buttonElement).toBeInTheDocument()
    })

    // it("changes to play again button when check answers button is clicked", () => {
    //     render(<QuizPage />)

    //     const checkAnswersButton = screen.getByText(/check answers/i)
               
    //     fireEvent.click(checkAnswersButton)

    //     expect(screen.getByText(/play again/i)).toBeInTheDocument()
    // })
})