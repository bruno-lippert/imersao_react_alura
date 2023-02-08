import React from 'react'
import config from "../../../config.json"
import styled from 'styled-components'

const StyledBanner = styled.div`
        width: 100%;
        height: 230px;
        background-image: url(${config.banner});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
`

const StyledHeader = styled.div`
    .perfilImg {
        width: 80px;
        height: 80px;
        border-radius: 50px;
    }
    .user-info {
        margin-top: 0px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .headerImgs {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    .perfil {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    
`

export default function Header(props) {
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
