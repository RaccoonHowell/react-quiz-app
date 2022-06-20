import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

jest.mock("nanoid", () => {
    return { nanoid: () => "1234" }
});

describe("App component", () => {
    it("renders landing page", () => {
        render(<App />)
        
        const h1Element = screen.getByText(/quizzical/i)
        const h2Element = screen.getByText(/random multiple choice questions/i)
        const buttonElement = screen.getByText(/start quiz/i)

        expect(h1Element).toBeInTheDocument()
        expect(h2Element).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })

    it("changes to check answers button when landing page start quiz button is clicked", () => {
        render(<App />)

        const startquizButton = screen.getByText(/start quiz/i)
               
        fireEvent.click(startquizButton)

        expect(screen.getByText(/check answers/i)).toBeInTheDocument()
    })
})
