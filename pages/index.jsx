import React, { useState } from 'react'
import Header from '../src/components/header/header'
import Timeline from '../src/components/timeline/timeline'
import config from '../config.json'
import Menu from '../src/components/Menu/index'
import { CSSReset } from '../src/components/CSSReset'

export default function index() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("")

  return (
    <>
      <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header banner={config.banner}/>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
    </>
    
  )
}