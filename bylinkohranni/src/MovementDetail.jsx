import { useParams } from "react-router-dom"
import Movement from "./movement.json"
import { slugify } from "./utilities/slugify"
import "./RecipeDetail.css"
import Taichi from "./taichi";
import Yoga from "./Yoga";

function MovementDetail(){
    const {movementName} = useParams();
    console.log(movementName);

    //const recipe = Movement.find(move => slugify(move.name) === movementName);

    return(
        <div className="movement_detail">
           {
            movementName === "tai-chi" && <Taichi/>
           }
           {
            movementName === "joga" && <Yoga/>
           }
        </div>
    )
}

export default MovementDetail