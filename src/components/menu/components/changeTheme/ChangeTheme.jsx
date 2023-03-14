import { useContext } from "react";
import { ColorModeContext } from "./ColorMode";
import { StyledSwitchMode } from "./styledChangeTheme";

export default function ChangeTheme() {
    const context = useContext(ColorModeContext)

    return (
        <StyledSwitchMode>
            <label className="switch">
                <input type="checkbox" className="checkbox"/>
                <div className="sliderContainer" onClick={() => context.toggleMode()}>
                     <div className="sliderButton" /> 
                </div>
            </label>
        </StyledSwitchMode>
    );
} 