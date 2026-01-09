import "./Home.css"
import Navigation from "./Navigation"

function Home() {
  return (
    <div className="body">
        <Navigation siteName="Hlavní stránka"/>
        <img src="./home.jpeg"id="main_img"></img>
    </div>
  );
}

export default Home