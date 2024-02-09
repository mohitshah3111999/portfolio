import React from 'react'

import './card.css';

const Card = props => {
    const { workDate = '', header = '', company = '', details = '', companyRedirectLink = '', technologyUsed = [] } = props;
    
    return (
        <div className='hoverBox'>
            <div className='flex font-color M20'>
                <div className='workDate'>{workDate}</div>
                <div>
                    <div>
                        {companyRedirectLink && <a className='cardHeaderStyle' href={companyRedirectLink}>{header} {company && `- ${company}`}</a>}
                        {!companyRedirectLink && <span className='cardHeaderStyle'>{header} {company && `- ${company}`}</span>}
                    </div>
                    <div className='sectionDetail'>{details}</div>
                    <div className='flex Mt10'>{technologyUsed.map(technology => {
                        return <div className='technology Mr'>{technology}</div>;
                    })}</div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Card);