import React, { useState } from 'react'
import Header from '../src/components/header/header'
import Timeline from '../src/components/timeline/timeline'
import config from '../config.json'
import Menu from '../src/components/Menu/index'
import { CSSReset } from '../src/components/CSSReset'

export default function index() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("")
  const [sliderButtonIsOn, setSliderButtonIsOn] = useState(false);

  return (
    <>
      <CSSReset sliderButtonIsOn={sliderButtonIsOn} />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
                
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} sliderButtonIsOn={sliderButtonIsOn} setSliderButtonIsOn={setSliderButtonIsOn}/>
                <Header banner={config.banner}/>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} sliderButtonIsOn={sliderButtonIsOn}>
                    Conteúdo
                </Timeline>
            </div>
    </>
    
  )
}