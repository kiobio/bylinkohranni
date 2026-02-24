import { Link } from "react-router-dom";
import "./footer.css"

function footer(){
 return(
    <div id="footer">
        <Link to="/" className="footerBtn" id="main">
            <img className="main_icon" src="/home_page_icon.jpeg"/>
        </Link>
        <Link to="challenge" className="footerBtn" id="challenge">
            <img className="main_icon" src="/challenge.jpeg"/>
        </Link>
        <Link to="progress" className="footerBtn" id="progress">
            <img className="main_icon" src="/progress.jpeg"/>
        </Link>
    </div>
 )
}

export default footer