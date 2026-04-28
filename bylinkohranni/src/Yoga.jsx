import { Link } from "react-router-dom"
import "./movement.css"

function Yoga() {
    return (
        <div id="movement_detail">
            <h1 style={{ textAlign: "center" }}>Jóga</h1>
            <iframe
                width={`${window.innerWidth - 4}`}
                height={`${(window.innerWidth / 500) * 315}`}
                src="https://www.youtube.com/embed/ZPJe531nyac?si=e1bwZJvSvClF6f3q"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
            </iframe>
            <Link to="/pohyb-list" style={{ position: "relative", top: "10px", left: "10px"}}>List Pohybu</Link>
            <div class= "move_anchor" style={{ padding: "10px", marginTop: "20px" }}>
                <h4>Tipy pro další česká videa</h4>
                <a href="https://www.youtube.com/watch?v=zs6nDCMmK8k">Jemná jóga pro začátečníky</a>
                <a href="https://www.youtube.com/watch?v=daxW_XZEXr0&list=PLr9EhnQxzIfZG27tvETVwlZOaHvVE14dP&index=4">Jóga a meditace vděčnosti</a>
                <a href="https://www.youtube.com/watch?v=3l_Tn_7ypn8&list=PLr9EhnQxzIfZG27tvETVwlZOaHvVE14dP&index=2">Jóga na odbourání stresu </a>
                <a href="https://www.youtube.com/watch?v=Ji_Yo2efYLI&list=PLr9EhnQxzIfZG27tvETVwlZOaHvVE14dP&index=16">Jóga pro jarní energii</a>
            </div>
            <div style={{ padding: "10px", marginTop: "20px" }}>
                <h4>Tipy na videa v AJ </h4>
                <p>Za nás nejlepší cvičitelka jógy, je Adriene. Ať si od ní vyberete cokoliv, nesáhnete vedle</p>
                <a href="https://www.youtube.com/@yogawithadriene" rel="noopener noreferrer" target="_blank">www.youtube.com/@yogawithadriene</a>
            </div>

            <div style={{ padding: "10px", marginBottom: "60px", marginTop: "20px" }}>
                <div>
                    <h4>Jemná jógová sestava (10–15 minut)</h4>
                    <p>Postav se nebo se posaď tak, aby bylo tělo pohodlné a stabilní. Zavři oči nebo nech pohled měkký.</p>
                    <p>Několik dechů jen vnímej, jak se tělo dotýká země.</p>
                </div>

                <div>
                    <h4>Vědomý stoj / sed</h4>
                    <p>Stůj s chodidly na šířku pánve, kolena lehce povolená. Ruce volně podél těla.</p>
                    <p>Nadechuj se nosem, výdech nech plynout přirozeně.</p>
                    <p>S každým výdechem nech ramena klesnout.</p>
                </div>

                <div>
                    <h4>Kroužení ramen</h4>
                    <p>Při nádechu zvedni ramena jemně nahoru, při výdechu je nech klesnout dozadu a dolů.</p>
                    <p>Opakuj několikrát, pomalu, bez tlaku.</p>
                </div>

                <div>
                    <h4>Kočka – kráva (na židli nebo na zemi)</h4>
                    <p>S nádechem lehce otevři hrudník, s výdechem se jemně zakulať.</p>
                    <p>Pohyb vychází z dechu, ne z úsilí.</p>
                    <p>Vnímej, jak se páteř uvolňuje.</p>
                </div>

                <div>
                    <h4>Úklon v sedě</h4>
                    <p>Polož jednu ruku na stehno, druhou nech klouzat po boku.</p>
                    <p>S výdechem se lehce ukloníš.</p>
                    <p>Nedrž pozici – jen se nadechni a s výdechem se vrať zpět.</p>
                    <p>Totéž na druhou stranu.</p>
                </div>

                <div>
                    <h4>Předklon v sedě</h4>
                    <p>Z dlouhé páteře se jemně nakloň dopředu.</p>
                    <p>Ruce mohou zůstat na stehnech.</p>
                    <p>Nech hlavu těžkou a dech klidný.</p>
                </div>

                <div>
                    <h4>Jemná rotace v sedě</h4>
                    <p>S nádechem se vytáhni, s výdechem se lehce otoč.</p>
                    <p>Pohyb je malý, pohodlný.</p>
                    <p>Vrať se do středu a vystřídej strany.</p>
                </div>

                <div>
                    <h4>Závěrečná relaxace</h4>
                    <p>Posaď se nebo si lehni. Polož dlaně na břicho.</p>
                    <p>Vnímej, jak se s nádechem zvedá a s výdechem klesá.</p>
                    <p>Zůstaň několik dechů v klidu.</p>
                </div>
            </div>
        </div>
    )
}
export default Yoga