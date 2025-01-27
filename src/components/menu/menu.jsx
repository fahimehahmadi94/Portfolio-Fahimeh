import "./menu.css"
import Logo from "/logo.webp"

export default function Menu() {
    return (
        <header>
            <SectionLeft />
            <SectionRight />
        </header>
    )
}
function SectionLeft() {
    return (
        <div className="section-left">
            <figure className="logo">
                <img src={Logo} alt="logo" />
            </figure>
            <a href="mailto:fahimehahmadi.fafa@gmail.com" className="mail">fahimehahmadi.fafa@gmail.com</a>
        </div>

    )
}
function SectionRight() {
    return (
        <ul className="section-right">
            <li><a href="">Services</a></li>
            <li><a href="">Works</a></li>
            <li><a href="">Resume</a></li>
            <li><a href="">Skills</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Contact</a></li>
            <li><button type="button">Resume</button></li>
        </ul>

    )
}