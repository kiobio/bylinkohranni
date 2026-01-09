import program from "./program.json"

function progress(){
    const tasks = program.map(task =>(
        <div>
            <div className="text" key={`${task.day}`}>
                <h1>{task.title}</h1>
                <p>{task.movementType}</p>
            </div>
        </div>
    ))

    return(
        <div className="body">
            {tasks}
        </div>
    )
}
export default progress