import './SingleCompany.css'

interface SingleCompanyProps {
    companyName: string;
    description: string;
    skillsAndTools?: Array<string>;
    img: string;
    dateInit: string;
    dateFinal: string;
}

const SingleCompany = ({companyName, description, skillsAndTools, img, dateInit, dateFinal}: SingleCompanyProps) => {
    //-------------------------------------------------------------------------------|>>|VARS
    
    //-------------------------------------------------------------------------------|>>|FUNCTIONS
    
    //-------------------------------------------------------------------------------|>>|DRAw
    return(
        <li>
            <div class="company">
                <div className="companyHeader">
                    <h3 class="company-name">{companyName}</h3>
                    <time class="company-time" datetime={String(Date.parse(dateInit))}>{`${dateInit} - ${dateFinal}`}</time>
                </div>
                <img class="company-logo" src={img} alt="company logo" />
                <div className="companyDescription">
                    {description}
                </div>
                <div className="companySkillsAndToolsContainer">
                    {skillsAndTools?.map(skillOrTool => (
                        <span className="company-skill-or-tool">{skillOrTool}</span>
                    ))}
                </div>
            </div>
        </li>
    )
}

export default SingleCompany