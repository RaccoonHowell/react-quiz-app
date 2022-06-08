import './App.css';
import LandingPage from "./pages/LandingPage"
import QuizPage from "./pages/QuizPage"
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
	<Router>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/quiz" element={<QuizPage />} />
		</Routes>
	</Router>
  );
}

export default App;
