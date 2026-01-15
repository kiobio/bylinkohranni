import "./Challenge.css"
import program from "./program.json"
import Navigation from "./Navigation"
import { useState } from "react";
import { Link } from "react-router-dom";

function Challenge() {
    const [searchValue, setSearchValue] = useState('');
    const taskDone = JSON.parse(localStorage.getItem("tasks_done") || "[]");

    const filteredDays = program.filter((day) => {
        const query = searchValue.toLowerCase();
        return (
            day.title.toLowerCase().includes(query) ||
            day.movementType.toLowerCase().includes(query)
        )
    })

    return (
        <div className="body">
            <Navigation siteName="Výzva" searchBar value={searchValue} onSearchChange={setSearchValue} />
            <div className="day_container">
                {filteredDays.map((day) => {
                    const isDone = taskDone.includes(day.day);
                    return (
                        <Link to={`/challenge/${day.day}`} className="day" id={`day_${day.day}`} key={`${day.day}`}>
                            {isDone && <div className="day day-overlay" />}
                            <img src="./den.PNG" />
                            <div className="text">
                                <h1>{day.title}</h1>
                                <p>{day.movementType}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Challenge