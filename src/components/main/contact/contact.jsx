import './contact.css'

export default function Contact() {
    return (
        <section id='contact' className='card contact-card'>
            <h4 className='txt-gradient'>
                Let's work
                <br />
                together!
            </h4>
            <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
            <div className='box-form'>
                <form target="_blank" action="https://formsubmit.co/40b045b0c17bcfd59fd6c4bb53882ac0" method="post">
                    <input type="text" name="name" placeholder="First name" />
                    <input type="text" name="last_name" placeholder="Last name" />
                    <input type="email" name="email" placeholder="Email address" />
                    <input type="tel" name="phone" placeholder="Phone number" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <div>
                        <button type="submit" className='btn'>
                            Send Message &nbsp;<i className="bi bi-arrow-up-right"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}