import React, { useContext, useEffect, useState } from "react";
import Header from "../src/components/header/header";
import Timeline from "../src/components/timeline/timeline";
import config from "../config.json";
import Menu from "../src/components/menu/menu";
import { CSSReset } from "../src/components/CSSReset";
import { darkTheme, lightTheme } from "../theme";
import { ThemeProvider } from "styled-components";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/menu/components/changeTheme/ColorMode";
import RegisterVideo from "../src/components/registerVideo/registerVideo";
import { videoService } from "../src/services/videoService";



function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={darkTheme}>
      {props.children}
    </ColorModeProvider>
  );
}

function MyApp() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [playlists, setPlaylists] = useState({})

  useEffect(() => {
    service.getAllVideos().then((dados) => {
      const newPlaylists = {...playlists}
      dados.data.forEach((video) => {
        if (!newPlaylists[video.playlist]) {
          newPlaylists[video.playlist] = []
        }
        newPlaylists[video.playlist].push(video);
      })
      setPlaylists(newPlaylists)
    });
    
  }, [])



  const context = useContext(ColorModeContext);
  return (
    <ThemeProvider theme={context.mode}>
      <CSSReset />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header banner={config.banner} />
        <Timeline searchValue={valorDoFiltro} playlists={playlists} />

        <RegisterVideo />
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <ProviderWrapper>
      <MyApp />
    </ProviderWrapper>
  );
}
