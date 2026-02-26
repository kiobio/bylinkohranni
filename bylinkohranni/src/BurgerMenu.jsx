import "./BurgerMenu.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function BurgerMenu({ open, onClose }) {
    const [popUp, setPopUp] = useState(false);
    const [unlocked, setUnlocked] = useState(false);
    function showPopUp() {
        setPopUp(true);
    }

    function isPasswordCorrect() {
        const input = document.getElementById("heslo");
        if (input.value === "hovno") {
            setUnlocked(true);
            localStorage.setItem("bylinkohrani_unlocked", true);
            input.value = "odemčeno";
            setTimeout(() => {
                closePopUp()
            }, 1500)
        } else {
            input.value = "neplatné heslo";
        }
    }

    function closePopUp() {
        setPopUp(false);
    }

    return (
        <div className={`burger_body ${open ? "open" : ""}`}>
            <div>
                <img className="icon" src="/icon.jpeg" />
                <div className="title">Bylinkohraní</div>
                <div className="close_btn" onClick={() => onClose()}></div>
            </div>
            <div className="list">
                <Link to="/recepty-list" className="line recepies">Recepty</Link>
                <Link to="/pohyb-list" className="line movement">Pohyb</Link>
                <Link to="/recommendation-list" className="line recommendation">Doporučení</Link>
                {
                    !localStorage.getItem("bylinkohrani_unlocked") && (
                        <div className="line" onClick={() => showPopUp()}>
                            Bylinkohraní 2026
                        </div>
                    )
                }

            </div>
            {
                popUp &&
                <div className="popUp">
                    <div className="unlock_box">
                        <h4>Pro odemčení dalšího obsahu zadejte heslo</h4>
                        <input id="heslo"></input>
                        <div className="popUp_btns">
                            <div onClick={() => isPasswordCorrect()}>Odemknout</div>
                            <div onClick={() => closePopUp()}>Zavřít</div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default BurgerMenu