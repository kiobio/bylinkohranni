import { useParams } from "react-router-dom"
import Recipes from "./recipes.json"
import { slugify } from "./utilities/slugify"
import "./RecipeDetail.css"
import { Link } from "react-router-dom"
import unlockedRecipes from "./UnlockedRecipes.json"

function RecipeDetail() {
    const { recipeDetail } = useParams();
    const allRecipes = [...Recipes, ...unlockedRecipes];

    const recipe = allRecipes.find(recept => slugify(recept.name) === recipeDetail);

    return (
        <div className="recipe_detail">
            {recipe.image &&
                <img src={`${recipe.image}`} />
            }
            
            <div className="recipe_text">
                <h1>{recipe.name}</h1>
                <div className="back">
                    <Link to="/recepty-list">Recepty</Link>
                </div>

                {recipe.ingredients &&
                    <div>
                        <h4>Ingredience</h4>
                        <div className="ingredients">{recipe.ingredients.map((line, i) => {
                            return <li key={i}>{line}</li>
                        })}</div>
                    </div>
                }
                {recipe.instructions &&
                    <div>
                        <h4>Instrukce</h4>
                        <p>{recipe.instructions}</p>
                    </div>
                }
                {
                    recipe.mainImage &&
                    <div>
                        <img src={`${recipe.mainImage}`} id="recipe_image"/>
                    </div>
                }
                {
                    recipe.note &&
                    <div className="notes">
                        <h4>poznámka:</h4>
                        <p className="recipe_notes">{recipe.note}</p>
                    </div>
                }

                <div>
                    {
                        recipe.warning &&
                        <div>
                            <h4>Upozornění</h4>
                            <p>{recipe.warning}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail