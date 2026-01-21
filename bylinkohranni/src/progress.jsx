import program from "./program.json";
import { useState } from "react";
import "./progress.css"

function Progress() {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const x = 60;
  const y = 60;
  const part = circumference / 100;

  const [done, setDone] = useState(JSON.parse(localStorage.getItem("tasks_done") || "[]").length);

  const all = program.length;
  const percent = (done * 100) / all;
  const progress = circumference - percent * part;

  function restarProgress(){
    localStorage.removeItem("tasks_done");
    setDone(0);
  }

  return (
    <div className="body">
      <div className="circle-container" style={{ position: "relative", width: "100%" }}>
        <svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
          <circle
            cx={x}
            cy={y}
            r={radius}
            stroke="#eee"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx={x}
            cy={y}
            r={radius}
            stroke="#00f"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%"}}
          />
        </svg>
        <div className="percentage">
          {Math.ceil(percent)}%
        </div>
      </div>
      <div id="restart" 
        onClick={restarProgress}
      >
          RESTART
      </div>
    </div>
  );
}

export default Progress;
