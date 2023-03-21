import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/menu/components/changeTheme/ColorMode";
import HeaderVideoPage from "../src/components/videoPage/components/header/headerVideoPage";
import TimelineVideoPage from "../src/components/videoPage/components/timeline/timelineVideoPage";
import { darkTheme } from "../theme";

function Page(props) {
  const colorContext = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={colorContext.mode}>
      <CSSReset />
      <HeaderVideoPage />
      <TimelineVideoPage />
    </ThemeProvider>
  );
}

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode={darkTheme}>
      {props.children}
    </ColorModeProvider>
  );
}

export default function VideoPage() {
  return (
    <ProviderWrapper>
      <Page />
    </ProviderWrapper>
  );
}
