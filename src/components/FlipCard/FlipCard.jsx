import './FlipCard.css'
import { useState } from 'preact/hooks'

const FlipCard = () => {
    //-------------------------------------------------------------------------------|>>|VARS
    let [isFlipped, setIsFlipped] = useState(false)
    //-------------------------------------------------------------------------------|>>|FUNCTIONS
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    //-------------------------------------------------------------------------------|>>|DRAw
    return(
        <article className="flip-card" onClick={handleClick}>
            <div style={isFlipped?{transform:'rotateY(180deg)'}:null} className="flip-card-inner">
                <section className="flip-card-front">
                    <div className="front-cont">
                        <h2 id="title">Education</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" id="icon">
                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>
                    </div>
                </section>
                <section className="flip-card-back">
                    <div className="back-cont">
                        <ul className="estudiosList">
                            <li>
                                <div className="estudio">
                                    <h2 className="title">Análisis y desarrollo de sistemas de información (ADSI)</h2>
                                    <p className="site">SENA</p>
                                    <time datetime="2008-02-14 00:00">2021 - 2023</time>
                                </div>
                            </li>
                            <li>
                                <div className="estudio">
                                    <h2 className="title">Gestión de proyectos de Google</h2>
                                    <p className="site">Coursera, Google</p>
                                    <time datetime="2008-02-14 00:00">2023 - 2024</time>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default FlipCard