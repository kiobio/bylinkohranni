import Movement from "./movement.json"
import Navigation from "./Navigation"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./List.css"
import { slugify } from "./utilities/slugify"

function MovementList(){

    const [searchValue, setSearchValue] = useState("");

    const filteredMovement = Movement.filter((move)=>{
        const query = searchValue.toLowerCase();
        return(
            move.name.toLowerCase().includes(query) 
        )
    })
    return(
        <div>
             <Navigation siteName="Pohyb" searchBar value={searchValue} onSearchChange={setSearchValue} />
             <div className="main_list">
                {
                    filteredMovement.map((move)=>(
                        <Link to={`/pohyb/${slugify(move.name)}`} key={`${move.name}`}>
                            <h2>{move.name}</h2>
                        </Link>
                    ))
                }
             </div>

        </div>
    )    
}

export default MovementList