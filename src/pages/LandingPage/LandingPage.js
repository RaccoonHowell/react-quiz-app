import React from "react"
import Button from "../../components/Button"
import { Link } from "react-router-dom"
import "./LandingPage.css"

function LandingPage() {
    return (
        <>
            <h1>SwiftQuiz</h1>

            <h2>how well do you know taylor?</h2>

            <Link to="/quiz">
                <Button text="Start quiz" />
            </Link>
        </>
    )
}
export default LandingPage