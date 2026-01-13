import { useParams } from "react-router-dom"
import Program from "./program.json"


function DayDetail(){
    const { dayNumber } = useParams();

    return(
        <div>{dayNumber}</div>
    )
}

export default DayDetail