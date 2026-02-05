import "./BurgerMenu.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function BurgerMenu({open, onClose}){
    const [popUp, setPopUp] = useState(false);
    const [unlocked, setUnlocked] = useState(false);
    function addLockedContent(){
        setPopUp(true);
    }

    function isPasswordCorrect(){
        //use local storage for passed password
        const input = document.getElementById("heslo");
        if(input.value === "hovno"){
            setUnlocked(true);
        }else{
            input.value = "neplatné heslo";
        }
    }

    return(
        <div className={`burger_body ${open ? "open": ""}`}>
            <div>
                <div className="title">Bylinkohraní</div>
                <div className="close_btn" onClick = {() => onClose()}></div>
            </div>
            <div className="list">
            <Link to="/recepty-list" className="line recepies">Recepty</Link>
            <Link to ="/pohyb-list" className="line movement">Pohyb</Link>
            <Link to ="/recommendation-list" className="line recommendation">Doporučení</Link>
            <div className="line" onClick={() => addLockedContent()}>bylinkohraní 2026</div>
            </div>
            {
                popUp &&
                <div className="popUp">
                    <div className="unlock_box">
                        <h4>Pro odemčení dalšího obsahu zadejte heslo</h4>
                        <input id="heslo"></input>
                        <div className="popUp_btns">
                            <div onClick={() => isPasswordCorrect()}>Odemknout</div>
                            <div>Zavřít</div>
                        </div>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default BurgerMenu