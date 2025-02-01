import './skills.css'
import Figma from '/figma.webp'
import Sketch from '/sketch.webp'
import Xd from '/xd.webp'
import Wp from '/wp.webp'
import React from '/react.webp'
import Js from '/js.webp'

export default function Skills() {
    return (
        <section id="skills" className='card-skill'>
            <h3 className='txt-gradient'>My Skills</h3>
            <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            <ul className='box-skill'>
                <li className='item-skill'>
                    <div>
                        <figure>
                            <img src={Figma} alt="Figma" />
                            <figcaption>92%</figcaption>
                        </figure>
                    </div>
                    <span>Figma</span>
                </li>
                <li className='item-skill'>
                    <div>
                        <figure>
                            <img src={Sketch} alt="Sketch" />
                            <figcaption>80%</figcaption>
                        </figure>
                    </div>
                    <span>Sketch</span>
                </li>
                <li className='item-skill'>
                    <div>
                        <figure>
                            <img src={Xd} alt="Xd" />
                            <figcaption>85%</figcaption>
                        </figure>
                    </div>
                    <span>XD</span>
                </li>
                <li className='item-skill'>
                    <div>
                        <figure>
                            <img src={Wp} alt="Wp" />
                            <figcaption>99%</figcaption>
                        </figure>
                    </div>
                    <span>WordPress</span>
                </li>
                <li className='item-skill'>
                    <div>
                        <figure>
                            <img src={React} alt="React" />
                            <figcaption>89%</figcaption>
                        </figure>
                    </div>
                    <span>React</span>
                </li>
                <li className='item-skill'>
                    <div>
                        <figure>
                            <img src={Js} alt="Js" />
                            <figcaption>93%</figcaption>
                        </figure>
                    </div>
                    <span>JavaScript</span>
                </li>
            </ul>
        </section>
    )
}