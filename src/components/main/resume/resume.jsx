import { Fragment } from 'react';
import './resume.css';

export default function Resume() {
    return (
        <section id="resume">
            <h2 className='txt-gradient title-resume'>Education & Work Experience</h2>
            <div className='card resume-card'>
                <Education />
                <Experience />
                <PastRoles />
            </div>
        </section>
    )
}
function Education() {
    return (
        <div>
            <h5 className='title-timeline'>Education</h5>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className="content">
                        <h3>BA IN DESIGN</h3>
                        <p className="role">Product Designer</p>
                        <p className="date">January 2024 - Present</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className="content">
                        <h3>UX/UI DESIGN SCHOOL</h3>
                        <p className="role">Product Designer</p>
                        <p className="date">April 2024 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Experience() {
    return (
        <div>
            <h5 className='title-timeline'>Experience</h5>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className="content">
                        <h3>LION PARCEL</h3>
                        <p className="role">Product Designer</p>
                        <p className="date">January 2024 - Present</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className="content">
                        <h3>ENVER STUDIO</h3>
                        <p className="role">Product Designer</p>
                        <p className="date">May 2024 - Present</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className="content">
                        <h3>TOKO DISTRIBUTOR</h3>
                        <p className="role">Product Designer</p>
                        <p className="date">March 2024 - Present</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className="content">
                        <h3>SAKOO</h3>
                        <p className="role">Product Designer</p>
                        <p className="date">June 2024 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
function PastRoles() {
    return (
        <div>
            <h5 className='title-timeline'>Past Roles</h5>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className="content">
                        <h3>LION PARCEL</h3>
                        <p className="role">Product Designer</p>
                        <p className="date">January 2024 - Present</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className="content">
                        <h3>ENVER STUDIO</h3>
                        <p className="role">Product Designer</p>
                        <p className="date">May 2024 - Present</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="circle"></div>
                    <div className="content">
                        <h3>TOKO DISTRIBUTOR</h3>
                        <p className="role">Product Designer</p>
                        <p className="date">March 2024 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    )
}