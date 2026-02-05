import { useParams } from "react-router-dom"
import Movement from "./movement.json"
import { slugify } from "./utilities/slugify"
import "./RecipeDetail.css"

function MovementDetail(){
    const {movementName} = useParams();

    const recipe = Movement.find(move => slugify(move.name) === movementName);

    return(
        <div className="movement_detail">
           <h1>{recipe.name}</h1>
           <p>{recipe.text}</p>
        </div>
    )
}

export default MovementDetail