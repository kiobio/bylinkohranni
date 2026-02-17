import "./movement.css"
import { Link } from "react-router-dom"

function Taichi() {

    return (
        <div id="movement_detail">
            <h1 style={{ textAlign: "center" }}>Tai Chi</h1>
            <iframe
                width={`${window.innerWidth - 4}`}
                height={`${(window.innerWidth / 500) * 315}`}
                src="https://www.youtube.com/embed/cEvSqHZIj8w"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
            <Link to="/pohyb-list" style={{ position: "relative", top: "10px", left: "10px"}}>List Pohybu</Link>
            <div style={{ padding: "10px", marginBottom: "60px", marginTop: "20px" }}>
                <h3>Základní tai chi sestava (8–12 minut)</h3>
                <div>
                    <p>Postav se do postoje wu-ji – chodidla na šířku pánve, kolena lehce povolená.</p>
                    <p>Páteř vzpřímená, hlava jakoby zavěšená na niti. </p>
                    <p>Dech je klidný, plynulý.</p>
                </div>
                <div>
                    <h4>Uzemnění</h4>
                    <p>Představ si, že chodidla měkce spočívají na zemi.</p>
                    <p>Vnímej stabilitu a klid.</p>
                </div>
                <div>
                    <h4>Zvedání nebe</h4>
                    <p>S nádechem zvedej paže před tělem nahoru, dlaně směřují vzhůru.</p>
                    <p>S výdechem paže pomalu spouštěj dolů.</p>
                    <p>Pohyb je plynulý, jako ve vodě.</p>
                </div>
                <div>
                    <h4>Stlačení země</h4>
                    <p>Dlaně se otočí dolů, jemně tlačíš energii směrem k zemi.</p>
                    <p>Výdech je dlouhý a klidný.</p>
                </div>
                <div>
                    <h4>Kreslení oblaku</h4>
                    <p>Jedna ruka opisuje oblouk před tělem, druhá ji následuje.</p>
                    <p>Pohyb plynule přechází ze strany na stranu.</p>
                    <p>Dech přirozený.</p>
                </div>

                <div>
                    <h4>Kolébání váhy</h4>
                    <p>Přenášej váhu z jedné nohy na druhou.</p>
                    <p>Pohyb je měkký, bez náhlých změn.</p>
                    <p>Vnímej stabilitu a plynulost.</p>
                </div>

                <div>
                    <h4>Otevírání křídel</h4>
                    <p>S nádechem otevři paže do stran, s výdechem je vrať zpět k tělu.</p>
                    <p>Hrudník se jemně otevírá, ramena zůstávají uvolněná.</p>
                </div>

                <div>
                    <h4>Uzavření energie</h4>
                    <p>Polož dlaně na podbřišek.</p>
                    <p>Zůstaň stát několik dechů.</p>
                    <p>Vnímej teplo a klid v těle.</p>
                </div>
            </div>
        </div>
    )
}
export default Taichi