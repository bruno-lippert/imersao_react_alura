import { StyledSwitchMode } from "./styledChangeTheme";

export default function ChangeTheme({ sliderButtonIsOn, setSliderButtonIsOn }) {

    const handleChange = event => {
        setSliderButtonIsOn(event.target.checked);
        !sliderButtonIsChecked == true ? console.log("Checked") : console.log("Not Checked")
        console.log(sliderButtonIsChecked)
    };
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