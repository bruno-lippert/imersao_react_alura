import React from 'react'
import config from "../../../config.json"
import { StyledBanner, StyledHeader } from './styledHeader'

export default function Header(ops) {
    return (
        <div>
            <StyledHeader>
                <StyledBanner />
                <section className="user-info">
                    <div className='perfil'>
                        <img src={`https://github.com/${config.github}.png`} className="perfilImg" />
                        <div>
                            <h2>
                                {config.name}
                            </h2>
                            <p>
                                {config.job}
                            </p>
                        </div>
                    </div>
                </section>
            </StyledHeader>
        </div>
    )
}
