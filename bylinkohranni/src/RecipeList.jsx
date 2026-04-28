import Recipes from "./recipes.json"
import Navigation from "./Navigation"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./List.css"
import { slugify } from "./utilities/slugify"
import unlockedRecipes from "./UnlockedRecipes.json"

function RecipeList() {
    const [searchValue, setSearchValue] = useState("");
    let allRecipes;
    if(localStorage.getItem("bylinkohrani_unlocked")){
        allRecipes = [...Recipes, ...unlockedRecipes];
    }else{
        allRecipes = Recipes
    }

    const filteredRecipes = allRecipes.filter((recipe)=>{
        const query = searchValue.toLowerCase();
        return(
            recipe.name.toLowerCase().includes(query)
        )
    })

    return (
        <div>
            <Navigation siteName="Recepty" searchBar value={searchValue} onSearchChange={setSearchValue} />
            <div className="main_list">
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