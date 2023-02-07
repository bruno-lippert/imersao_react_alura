import React from 'react'
import Header from '../src/components/header/header'
import Timeline from '../src/components/timeline/timeline'
import config from '../config.json'
import Menu from '../src/components/Menu'
import { CSSReset } from '../src/components/CSSReset'

export default function index() {
  return (
    <>
      <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu/>
                <Header banner={config.banner}/>
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
    </>
    
  )
}