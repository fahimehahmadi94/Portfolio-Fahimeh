import './experience.css'

export default function Experience() {
    return (
        <ul className="card experience-card">
            <li>
                <span className='experience-icon'><i class="bi bi-award"></i></span>
                <span>14%</span>
                <h6 className='experience-title'>Job achievements</h6>
            </li>
            <li>
                <span className='experience-icon'><i class="bi bi-briefcase"></i></span>
                <span>50+</span>
                <h6 className='experience-title'>Years of Experience</h6>
            </li>
            <li>
                <span className='experience-icon'><i class="bi bi-grid"></i></span>
                <span>1.5K</span>
                <h6 className='experience-title'>Happy Clients</h6>
            </li>
            <li>
                <span className='experience-icon'><i class="bi bi-card-checklist"></i></span>
                <span>50+</span>
                <h6 className='experience-title'>Project Completed</h6>
            </li>
        </ul>
    )
}