import React, { useContext, useState } from "react";
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

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={darkTheme}>
      {props.children}
    </ColorModeProvider>
  );
}

function MyApp() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");

  const context = useContext(ColorModeContext);
  return (
    <ThemeProvider theme={context.mode}>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header banner={config.banner} />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
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