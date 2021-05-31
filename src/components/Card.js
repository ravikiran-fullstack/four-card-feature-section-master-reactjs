import React from 'react'

const Card = ({cardInfo}) => {
    return (
        <div className="card">
            <div className="cardTitle">
                <h4>{cardInfo.cardTitle}</h4>
            </div>
            <div>
                <p>
                    {cardInfo.description}
                </p>
            </div>
            <div className="text-right">
                <img className="cardIcon" src={cardInfo.icon} alt={cardInfo.cardTitle} />
            </div>
        </div>
    )
}

export default Card
