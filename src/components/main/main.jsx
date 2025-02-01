import About from "./about/about";
import Experience from "./experience/experience";
import Resume from "./resume/resume";
import Skills from "./skills/skills";
import Contact from "./contact/contact";

export default function Main() {

    return (
        <section className="container">
            <About />
            <Experience />
            <Resume />
            <Skills />
            <Contact />
        </section>
    )
}
