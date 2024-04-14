import Link from 'next/link'
import React from 'react'

interface Props {
    rocket: {
        id: number
        name: string
        image: string
        information: string
        max_speed: number
        weight: number
        payload: number
        lead_organization: string
        group: string
        year_built: number
        mission_goal: string
    }
}

const Card = (
    { rocket }: Props // Assume rocket is passed as a prop, or defined elsewhere in your component
) => {
    const kgToTons = (kg: number) => {
        return kg / 1000
    }
    return (
        <Link className="card w-full" href={`/${rocket.id}`}>
            <div className="card-inner">
                <div className="card-header">
                    <h3>{rocket.name}</h3>
                    <div className="number-wrapper">
                        <span className="number">{rocket.id}</span>
                    </div>
                </div>
                <div className="card-image-wrapper">
                    <img src={rocket.image} alt="space shuttle image" />{' '}
                    {/* Correct self-closing tag and alt attribute */}
                    <div className="card-image-switch">
                        <p>{rocket.information}</p>
                    </div>
                </div>
                <div className="card-content-wrapper">
                    <div className="stat-wrapper">
                        <div className="stat-icon">Speed</div>
                        <div className="stat-value">
                            {rocket.max_speed}{' '}
                            <span className="text-xs text-muted-foreground font-normal">
                                km/h
                            </span>
                        </div>
                    </div>
                    <div className="stat-wrapper">
                        <div className="stat-icon">Weight</div>
                        <div className="stat-value">
                            {rocket.weight}{' '}
                            <span className="text-xs text-muted-foreground font-normal">
                                kg
                            </span>
                        </div>
                    </div>
                    <div className="stat-wrapper">
                        <div className="stat-icon">Payload</div>
                        <div className="stat-value">
                            {rocket.payload}{' '}
                            <span className="text-xs text-muted-foreground font-normal">
                                kg
                            </span>
                        </div>
                    </div>
                    <div className="stat-wrapper">
                        <div className="stat-icon">Org.</div>
                        <div className="stat-value">
                            {rocket.lead_organization}
                        </div>
                    </div>
                    <div className="stat-wrapper large">
                        <div className="stat-wrapper-inner">
                            <div className="stat-icon">Group:</div>
                            <div className="stat-value large">
                                {rocket.group}
                            </div>
                        </div>
                        <div className="stat-wrapper-inner">
                            <div className="stat-icon">Year Built</div>
                            <div className="stat-value large">
                                {rocket.year_built}
                            </div>
                        </div>
                    </div>
                    <div className="stat-wrapper large">
                        <div className="stat-icon">Mission Goal:</div>
                        <div className="stat-value large">
                            {rocket.mission_goal}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
