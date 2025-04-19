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
                    description="kl l ajlskd ji2wiew pxcopow ciojw mosdouwd lñlaw lcewao ldjuaws oeflñawnd kxfl qjwoi ñlvewñioq kmcuier cpqjkcs pqojr"
                    img="companyResouces/meliIcon.svg"
                />
                <SingleCompany 
                    companyName="CGA"
                    dateInit="2022"
                    dateFinal="2023"
                    description="afklaf aklf akls fakf kalf kasjfajksf jfajksfhasfj hasjfkh"
                    img="companyResouces/cgaIcon.svg"
                />
            </ul>
        </details>
    )
}

export default ExperienceCard