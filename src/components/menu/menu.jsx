import "./menu.css"
import Logo from "/logo.webp"

export default function Menu() {
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector("header");
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
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
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
                <button type="button" onClick={downloadResume} className='btn'>
                    Resume &nbsp;<i className="bi bi-download"></i>
                </button>
            </li>
        </ul>
    )
}
function downloadResume() {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    link.click();
}