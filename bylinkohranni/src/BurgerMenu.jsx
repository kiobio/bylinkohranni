import "./BurgerMenu.css"
import { Link } from "react-router-dom";

function BurgerMenu({open, onClose}){

    if(!open) return null;
    return(
        <div className="burger_body">
            <div>
                <div className="title">Očista 2026</div>
                <div className="close_btn" onClick = {() => onClose()}></div>
            </div>
            <div className="list">
            <Link to="/recipes-list" className="line recepies">Recepty</Link>
            <Link to ="/movement-list" className="line movement">Pohyb</Link>
            <Link to ="/recommendation-list" className="line recommendation">Doporučení</Link>
            </div>
            
        </div>
    )
}

export default BurgerMenu