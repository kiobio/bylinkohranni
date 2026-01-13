import { useParams } from "react-router-dom"
import Program from "./program.json"
import { Link } from "react-router-dom";
import "./DayDetail.css"
import { useState, useEffect } from "react";

function DayDetail(){
    const { dayNumber } = useParams();
    const today = Program.find(d => d.day === Number(dayNumber));
    const [done, setDone] = useState(false);
    const tasksDone = JSON.parse(localStorage.getItem("tasks_done"))|| [];

    useEffect(()=>{
        if(tasksDone && tasksDone.includes(today.day)){
            setDone(true);
        }
    })

    const saveProgress = () =>{
        tasksDone.push(today.day);
        localStorage.setItem("tasks_done", JSON.stringify(tasksDone));
        document.getElementById("done").remove();
    }

    function slugify(text) {
        return text
        .normalize("NFD")                 // split letters and diacritics
        .replace(/[\u0300-\u036f]/g, "")  // remove diacritics
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")             // spaces → dashes
        .replace(/[^a-z0-9-]/g, "")       // remove unsafe chars
        .replace(/-+/g, "-");             // collapse dashes
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