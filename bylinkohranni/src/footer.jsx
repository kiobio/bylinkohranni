import { Link } from "react-router-dom";

function footer(){
 return(
    <div id="footer">
        <Link to="/" className="footerBtn" id="main"></Link>
        <Link to="challenge" className="footerBtn" id="challenge"></Link>
        <Link to="progress" className="footerBtn" id="progress"></Link>
        <Link to ="calendar" className="footerBtn" id="calendar"></Link>
    </div>
 )
}

export default footer