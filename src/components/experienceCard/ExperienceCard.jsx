import './ExperienceCard.css'
import SingleCompany from './singleCompany/SingleCompany'
import { useState, useEffect } from 'preact/hooks'

const ExperienceCard = () => {
    //-------------------------------------------------------------------------------|>>|VARS
    let [isOpen, setIsOpen] = useState(false)
    //-------------------------------------------------------------------------------|>>|FUNCTIONS
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    useEffect(() => {
        const arrowElement = document.querySelector('#arrow-id')
        const titleCont = document.querySelector('#title-cont-id')
        if (isOpen) {
            arrowElement.classList.add('open')
            arrowElement.classList.remove('closed')
            titleCont.classList.add('open')
            titleCont.classList.remove('closed')
        } else {
            arrowElement.classList.add('closed')
            arrowElement.classList.remove('open')
            titleCont.classList.add('closed')
            titleCont.classList.remove('open')
        }
    }, [isOpen])
    //-------------------------------------------------------------------------------|>>|DRAw
    return(
        <details class="exp-card">
            <summary class="" onClick={handleClick}>
                <div class="title-cont closed" id="title-cont-id">
                    <h2 class="title">Experience</h2>
                    <svg class="arrow closed" id="arrow-id" xmlns="http://www.w3.org/2000/svg" width="23.828" height="23.66"><path d="m11.817 18.021-6.161-6.083 6.179-6.262 1.579 1.579 2.828-2.828L11.817 0 0 11.976 11.835 23.66l4.405-4.405-2.828-2.828-1.595 1.594z"/><path d="M21.811 9.841h-.099l-2.884-2.884v2.884h-7.017v4h7.017v3.116l5-5-2.017-2.018v-.098z"/></svg>
                </div>
            </summary>
            <ul class="body-exp-card">
                <SingleCompany 
                    companyName="Mercado Libre"
                    dateInit="2024"
                    dateFinal="Current"
                    description="I currently work as a Software Developer on the API Core team, focusing on the Marketplace. We are responsible for several of the most critical components within the ecosystem, managing key APIs such as items, pictures, prices, purchases, and orders. Our team is dedicated to excellence and rigor in maintaining these services, which handle millions of requests per minute. I actively participate in the entire software development lifecycle—including analysis, design, RFC presentation, development, testing, deployment, and monitoring. My role involves integrating new features, resolving bugs, and optimizing code to meet the highest performance standards and fulfill both business and customer needs."
                    skillsAndTools={["GO", "Java", "BigQuery", "BigQueue", "Jenkins", "Doker", "AWS", "GCP", "KVS", "DS", "Redis", "MySQL", "IA Tools"]}
                    img="companyResouces/meliIcon.svg"
                />
                <SingleCompany 
                    companyName="CGA"
                    dateInit="2022"
                    dateFinal="2023"
                    description="As a Full Stack Developer, I built a comprehensive, SAP-integrated customer management platform from scratch. I developed and maintained the entire ecosystem, which included a MySQL database, a Node.js/Express backend API, and a React web application. The web app featured strict role-based access control, dynamic data visualization with interactive charts, and downloadable monthly Excel reports. Additionally, I worked on a mobile application that enabled field sales representatives to log client visits, track sales and quotes, and efficiently manage their daily schedules."
                    skillsAndTools={["JavaScript", "React", "Node.js", "Express", "MySQL", "Flutter"]}
                    img="companyResouces/cgaIcon.svg"
                />
            </ul>
        </details>
    )
}

export default ExperienceCard