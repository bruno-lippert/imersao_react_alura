import React from 'react'
import config from "../../../config.json"
import styled from 'styled-components'

const Banner = styled.div`
    .bannerContainer {
        width: 100%;
        height: 100px;
    }
    .banner {
        width: 100%;
        height: 300px;
    }
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
            <Banner className="bannerContainer">
                <img src={props.banner} className="banner" />
            </Banner>
            <StyledHeader>
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
