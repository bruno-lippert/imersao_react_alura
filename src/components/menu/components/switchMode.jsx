import react from "react";
import styled from "styled-components";

const StyledSwitchMode = styled.div`
    width: 50px;
    height: auto;
    cursor: pointer;

    label {
        cursor: pointer;
    }

    .sliderContainer {
        border: 2px solid black;
        padding: 3px;
        border-radius: 50px;
        height: 30px;
        transition: 1s;
    }
    
    .sliderButton {
        width: 20px;
        height: 20px;
        border-radius: 50px;
        border: 0px solid black;
        cursor: pointer;
        background-color: black;
        transition: 1s;
    }
    .checkbox {
        display: none;
    }
    .checkbox:checked ~ .sliderContainer{
        background-color: black;
        transition: 1s;
        padding-left: 23px;
    }
    .checkbox:checked ~ .sliderContainer > .sliderButton{
        background-color: white;
        transition: 1s;
    }
`

export default function SwitchMode() {
    return (
        <StyledSwitchMode>
            <label>
                <input type="checkbox" className="checkbox" />
                <div className="sliderContainer">
                    <div className="sliderButton" />
                </div>
            </label>
        </StyledSwitchMode>
    );
}