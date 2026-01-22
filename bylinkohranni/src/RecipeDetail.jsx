import { useParams } from "react-router-dom"
import Recipes from "./recipes.json"
import { slugify } from "./utilities/slugify"
import "./RecipeDetail.css"
import { Link } from "react-router-dom"

function RecipeDetail(){
    const {recipeDetail} = useParams();

    const recipe = Recipes.find(recept => slugify(recept.name) === recipeDetail);

    return(
        <div className="recipe_detail">
            <img src={`${recipe.image}`}/>
            <div className="recipe_text">
                <h1>{recipe.name}</h1>
                <div className="back">
                    <Link to ="/recepty-list">Recepty</Link>
                </div>
                <h4>Ingredience</h4>
                <div className="ingredients">{recipe.ingredients.map((line, i)=>{
                    return <li key={i}>{line}</li>
                })}</div>
                <div>
                    <h4>Instrukce</h4>
                    <p>{recipe.instructions}</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail