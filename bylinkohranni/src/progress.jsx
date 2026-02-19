import program from "./program.json";
import { useState, useEffect } from "react";
import "./progress.css";

function Progress() {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const x = 60;
  const y = 60;
  const part = circumference / 100;

  const done = JSON.parse(localStorage.getItem("tasks_done") || "[]").length;
  const all = program.length;
  const percent = (done * 100) / all;
  const targetOffset = circumference - percent * part;

  const [animatedOffset, setAnimatedOffset] = useState(circumference);

  useEffect(() => {
    // Animate from full circle to target offset
    let start = null;
    const duration = 500;

    function animate(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const fraction = Math.min(progress / duration, 1);
      setAnimatedOffset(circumference - (circumference - targetOffset) * fraction);

      if (fraction < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [targetOffset, circumference]);

  function restartProgress() {
    localStorage.removeItem("tasks_done");
    setAnimatedOffset(circumference); // reset animation
  }

  return (
    <div className="body">
      <div className="circle-container" style={{ position: "relative", width: "100vw" }}>
        <svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00483D" />
              <stop offset="100%" stopColor="#00A885" />
            </linearGradient>
          </defs>

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
            stroke="url(#grad)"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={animatedOffset}
            strokeLinecap="round"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%"
            }}
          />
        </svg>
        <div className="percentage">
          {Math.ceil(percent)}%
        </div>
      </div>
      <div id="restart" onClick={restartProgress}>
        RESTART
      </div>
    </div>
  );
}

export default Progress;
