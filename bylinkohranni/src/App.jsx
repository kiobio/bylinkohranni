import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Footer from "./footer"
import Challenge from "./challenge"
import Progress from "./progress"
import './App.css'
import Day from "./DayDetail"
import RecipeList from "./RecipeList"


function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="/challenge" element={<Challenge/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/challenge/:dayNumber" element={<Day/>}/>
        <Route path="/recipes-list" element={<RecipeList/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
