import './about.css'
import MeImage from "/me.webp"


export default function About() {

    return (
        <section className='card about-card'>
            <Image />
            <Info />
        </section>
    )
}

function Image() {
    return (
        <figure className='image'>
            <img src={MeImage} alt="Fahimeh Ahmadi" />
        </figure>
    )
}
function Info() {
    return (
        <div className='info'>
            <h1 className='txt-gradient'>Hi, I am Fahimeh - Web Developer</h1>
            <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            <ul className="social-media">
                <li className='social-media-icon'>
                    <a href='https://github.com/fahimehahmadi94'>
                        <i className="bi bi-github"></i>
                    </a>
                </li>
                <li className='social-media-icon'>
                    <a href='https://stackoverflow.com/users/12661877/fahimeh-ahmadi'>
                        <i className="bi bi-stack-overflow"></i>
                    </a>
                </li>
                <li className='social-media-icon'>
                    <a href='https://www.linkedin.com/in/fahimeh-ahmadi-fafa/'>
                        <i className="bi bi-linkedin"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}
