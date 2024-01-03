import './ProjectCard.css'
import { register } from 'swiper/element/bundle'
register()

const ProjectCard = ({title, p1, p2, p3, p4, technologies, projectImages, perView = 'auto', imgFormat = 'h'}) =>{
    return(
        <article>
            <section class="description">
                <h1>{title}</h1>
                {p1? <p class="paragraph1">{p1}</p> :null}
                {p2? <p>{p2}</p> :null}
                {p3? <p>{p3}</p> :null}
                {p4? <p>{p4}</p> :null}
            </section>
            <section className="technologies">
                {
                    technologies.map( techName =>(
                        <p class="techName">{techName}</p>
                    ))
                }
            </section>
            <section className="carrouselCont">
                <swiper-container class="swiper" scrollbar-hide="true" slides-per-view={perView} centered-slides="true" space-between="30" zoom="true" grab-cursor="true">
                    <div class="swiper-button-prev"></div>
                    {
                        projectImages.map( imageRoute =>(
                            <swiper-slide>
                                <div class="swiper-zoom-container">
                                    <img class={imgFormat} src={`${imageRoute}`} alt="portfolio view"></img>
                                </div>
                            </swiper-slide>
                        ))
                    }
                    <div class="swiper-button-next"></div>
                </swiper-container>
            </section>
        </article>
    )
}

export default ProjectCard