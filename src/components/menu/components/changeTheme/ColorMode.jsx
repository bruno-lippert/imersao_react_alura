import React, { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../../../../../theme";

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
});

export default function ColorModeProvider(props) {

  const [mode, setMode] = useState(props.initialMode);
  
  function toggleMode () {
    setMode(mode == darkTheme ? lightTheme : darkTheme )
    console.log("Acerto miseravi")
  }

  return (
    <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
