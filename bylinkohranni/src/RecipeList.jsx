import Recipes from "./recipes.json"
import Navigation from "./Navigation"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./RecipeList.css"

function RecipeList() {
    const [searchValue, setSearchValue] = useState("");
    function slugify(str) {
        return str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
    }

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
                        <Link to={`/recipes/${slugify(recipe.name)}`} key={`${recipe.name}`}>
                            <h2>{recipe.name}</h2>
                        </Link>
                    ))
                }
        </div>

        </div >
    )
}

export default RecipeList