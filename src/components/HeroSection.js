import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'

function HeroSection({lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart}) {
    return (
        <>
            <div className={lightBg? 'home__hero-section':'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start'? 'row-reverse':'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">
                                    {topLine}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
