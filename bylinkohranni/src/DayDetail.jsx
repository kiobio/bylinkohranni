import { useParams, useNavigate } from "react-router-dom"
import Program from "./program.json"
import { Link } from "react-router-dom";
import "./DayDetail.css"
import { useState, useEffect } from "react";
import { slugify } from "./utilities/slugify";

function DayDetail(){
    const { dayNumber } = useParams();
    const today = Program.find(d => d.day === Number(dayNumber));
    const [done, setDone] = useState(false);
    const tasksDone = JSON.parse(localStorage.getItem("tasks_done"))|| [];
    const navigate = useNavigate();

    useEffect(()=>{
        if(tasksDone && tasksDone.includes(today.day)){
            setDone(true);
        }
    })

    const saveProgress = () =>{
        tasksDone.push(today.day);
        localStorage.setItem("tasks_done", JSON.stringify(tasksDone));
        document.getElementById("done").remove();
        setTimeout(function(){
            navigate("/progress");
        }, 1000)
    }

    return(
        <div id="detail">
            <h1>{today.title}</h1>
            <h3>Pohyb dne: {today.movementType}</h3>
            <p>{today.movementText}</p>
            <p>{today.duration}</p>
            <div>
                <h4>ranní detox dnešního dne:</h4> 
                <Link to ={`/recepty/${slugify(today.morningDetox)}`}>
                    <h3>{today.morningDetox}</h3>
                    <img src="/den.PNG"/>
                </Link>
            </div>
            <div>
                <h2>záměr dne: {today.dailyFocus}</h2>
            </div>
            {!done && (
               <div id="done" onClick={() =>{
                    saveProgress()
               }}>HOTOVO</div> 
            )}
        </div>
    )
}

export default DayDetail