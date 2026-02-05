import "./Challenge.css";
import program from "./program.json";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Challenge() {

    const taskDone = JSON.parse(
        localStorage.getItem("tasks_done") || "[]"
    );

    return (
        <div className="body">
            <Navigation
                siteName="Výzva"
            />

            <div className="day_container">
                {program
                    .filter(day => !taskDone.includes(day.day))
                    .map(day => (
                        <Link
                            to={`/challenge/${day.day}`}
                            className="day"
                            id={`day_${day.day}`}
                            key={day.day}
                        >
                            <img src="./den.PNG" alt="" />
                            <div className="text">
                                <h1>{day.title}</h1>
                                <p>{day.movementType}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Challenge;
