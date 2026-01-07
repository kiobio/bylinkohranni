import "./Challenge.css"
import program from "./program.json"

function challenge(){
    const days = program.map(day =>(
        <div className="day" id={`day_${day.day}`} key ={`${day.day}`}>
            <img src="./den.PNG"></img>
            <div className="text">
                <h1>{day.title}</h1>
                <p>{day.movementType}</p>
            </div>
        </div>
    ));

    return(
        <div className="body">
             <div className="day_container">
               {days} 
             </div>
        </div>
    )
}

export default challenge