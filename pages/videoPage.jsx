import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import { headerVideoPage } from "../src/components/videoPage/components/header/headerVideoPage";
import ChangeTheme from "../src/components/menu/components/changeTheme/ChangeTheme";
import ColorModeProvider, { ColorModeContext } from "../src/components/menu/components/changeTheme/ColorMode";
import Logo from "../src/components/menu/components/logo/logo";
import VideoInfoProvider, {
  VideoInformationProvider,
} from "../src/components/videoPage/videoInfo";
import { darkTheme, lightTheme } from "../theme";

 function Page() {
  const context = useContext(VideoInformationProvider);
  const colorContext = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={colorContext.mode}>
      <CSSReset />
      
        <headerVideoPage />
        {/* <iframe
          width="1280"
          height="720"
          src={context.url}
          title={context.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
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