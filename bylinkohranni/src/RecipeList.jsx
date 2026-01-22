import Recipes from "./recipes.json"
import Navigation from "./Navigation"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./RecipeList.css"
import { slugify } from "./utilities/slugify"

function RecipeList() {
    const [searchValue, setSearchValue] = useState("");

    const filteredRecipes = Recipes.filter((recipe)=>{
        const query = searchValue.toLowerCase();
        return(
            recipe.name.toLowerCase().includes(query)
        )
    })

    return (
        <div>
            <Navigation siteName="Recepty" searchBar value={searchValue} onSearchChange={setSearchValue} />
            <div className="recipes_list">
                {
                    filteredRecipes.map((recipe) => (
                        <Link to={`/recepty/${slugify(recipe.name)}`} key={`${recipe.name}`}>
                            <h2>{recipe.name}</h2>
                        </Link>
                    ))
                }
        </div>

        </div >
    )
}

export default RecipeList