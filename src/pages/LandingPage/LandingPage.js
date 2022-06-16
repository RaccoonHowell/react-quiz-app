import React from "react"
import Button from "../../components/Button"
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <>
            <h1>QUIZZICAL</h1>

            <h2>random multiple choice questions</h2>

            <Link to="/quiz">
                <Button text="start quiz" />
            </Link>
        </>
    )
}
export default LandingPage