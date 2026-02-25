import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Footer from "./footer"
import Challenge from "./Challenge"
import Progress from "./progress"
import './App.css'
import Day from "./DayDetail"
import RecipeList from "./RecipeList"
import RecipeDetail from "./RecipeDetail"
import MovementList from "./MovementList"
import MovementDetail from "./MovementDetail"
import Recommandation from "./Reccomandation"


function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="/challenge" element={<Challenge/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/challenge/:dayNumber" element={<Day/>}/>
        <Route path="/recepty-list" element={<RecipeList/>}/>
        <Route path="/pohyb-list" element={<MovementList/>}/>
        <Route path="/recepty/:recipeDetail" element={<RecipeDetail/>}/>
        <Route path="/pohyb/:movementName" element={<MovementDetail/>}/>
        <Route path="/recommendation-list" element={<Recommandation/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
