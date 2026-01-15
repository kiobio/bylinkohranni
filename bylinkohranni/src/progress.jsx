import program from "./program.json";

function Progress() {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const x = 60;
  const y = 60;
  const part = circumference / 100;

  const done = JSON.parse(localStorage.getItem("tasks_done") || "[]").length;
  const all = program.length;
  const percent = (done * 100) / all;
  const progress = circumference - percent * part;

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
        <div 
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {Math.ceil(percent)}%
        </div>
      </div>
    </div>
  );
}

export default Progress;
