import { StyledSwitchMode } from "./styledChangeTheme";

export default function ChangeTheme({ sliderButtonIsOn, setSliderButtonIsOn }) {
    console.log(sliderButtonIsOn)

    return (
        <StyledSwitchMode>
            <label className="switch">
                <input type="checkbox" className="checkbox"/>
                <div className="sliderContainer" onClick={() => setSliderButtonIsOn(!sliderButtonIsOn)}>
                     <div className="sliderButton" /> 
                </div>
            </label>
        </StyledSwitchMode>
    );
}