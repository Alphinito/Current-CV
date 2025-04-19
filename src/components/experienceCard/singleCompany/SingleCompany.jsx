import './SingleCompany.css'

const SingleCompany = ({companyName, description, img, dateInit, dateFinal}) => {
    //-------------------------------------------------------------------------------|>>|VARS
    
    //-------------------------------------------------------------------------------|>>|FUNCTIONS
    
    //-------------------------------------------------------------------------------|>>|DRAw
    return(
        <li>
            <div class="company">
                <img class="company-logo" src={img} alt="company logo" />
                <div className="companyHeader">
                    <h3 class="company-name">{companyName}</h3>
                    <time class="company-time" datetime={Date.parse(dateInit)}>{`${dateInit} - ${dateFinal}`}</time>
                </div>
                <div className="companyDescription">
                    {description}
                </div>
            </div>
        </li>
    )
}

export default SingleCompany