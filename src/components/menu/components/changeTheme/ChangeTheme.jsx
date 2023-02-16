import { StyledSwitchMode } from "./styledChangeTheme";

export default function ChangeTheme({ sliderButtonIsOn, setSliderButtonIsOn }) {

    return (
        <StyledSwitchMode>
            <label className="switch" onClick={() => setSliderButtonIsOn(!sliderButtonIsOn)}>
                <input type="checkbox" className="checkbox"/>
                <div className="sliderContainer">
                     <div className="sliderButton" /> 
                </div>
            </label>
        </StyledSwitchMode>
    );
}