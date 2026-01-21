import "./Navigation.css"
import { useState } from "react"
import BurgerMenu from "./BurgerMenu"

function Navigation({siteName, searchBar = false, value, onSearchChange}){
    
    const [openMenu, setOpenMenu] = useState(false);

    return(
         <div id="navigation">
            <div id="nav_body">
                {`${siteName}`}
                <div id="burger_menu" onClick={() => setOpenMenu(true)}></div>
                <BurgerMenu open={openMenu} onClose = {() => {setOpenMenu(false)}}/>
            </div>
            {searchBar && 
            <div id="search_bar">
                <input id="search" placeholder="Hledat" 
                value={value}
                onChange={(e) => onSearchChange(e.target.value)}
                ></input>
            </div>}
         </div>
    )
}

export default Navigation