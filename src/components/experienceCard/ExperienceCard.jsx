import './ExperienceCard.css'
import { useState } from 'preact/hooks'

const ExperienceCard = () => {
    //-------------------------------------------------------------------------------|>>|VARS
    let [isFlipped, setIsFlipped] = useState(false)
    //-------------------------------------------------------------------------------|>>|FUNCTIONS
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    //-------------------------------------------------------------------------------|>>|DRAw
    return(
        <article class="exp-card">
            <h2 class="title">Expreriencia</h2>
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="23.828" height="23.66"><path d="m11.817 18.021-6.161-6.083 6.179-6.262 1.579 1.579 2.828-2.828L11.817 0 0 11.976 11.835 23.66l4.405-4.405-2.828-2.828-1.595 1.594z"/><path d="M21.811 9.841h-.099l-2.884-2.884v2.884h-7.017v4h7.017v3.116l5-5-2.017-2.018v-.098z"/></svg>
            <div className="body">
                
            </div>
        </article>
    )
}

export default ExperienceCard