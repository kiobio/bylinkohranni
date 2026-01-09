import "./Navigation.css"

function Navigation({siteName, searchBar = false, value, onSearchChange}){
    
    return(
         <div id="navigation">
            <div id="nav_body">
                {`${siteName}`}
                <div id="burger_menu"></div>
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