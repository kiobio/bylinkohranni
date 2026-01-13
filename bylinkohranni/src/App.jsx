import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Footer from "./footer"
import Challenge from "./challenge"
import Progress from "./progress"
import './App.css'
import Day from "./DayDetail"


function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="/challenge" element={<Challenge/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/challenge/:dayNumber" element={<Day/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
