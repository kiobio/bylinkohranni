import { useParams } from "react-router-dom"
import "./RecipeDetail.css"
import Taichi from "./Taichi";
import Yoga from "./Yoga";

function MovementDetail(){
    const {movementName} = useParams();

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