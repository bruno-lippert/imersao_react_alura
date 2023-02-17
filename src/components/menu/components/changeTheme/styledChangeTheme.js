import styled from "styled-components";

export const StyledSwitchMode = styled.div`
width: 50px;
height: auto;
cursor: pointer;

label {
    cursor: pointer;
}

.sliderContainer {
    border: 2px solid black;
    padding: 3px 23px 3px 3px;
    border-radius: 50px;
    height: 30px;
    transition: 0.5s;
}

.sliderButton {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    border: 0px solid black;
    cursor: pointer;
    background-color: black;
    transition: 0.5s;
}
.checkbox {
    display: none;
}
.checkbox:checked ~ .sliderContainer{
    background-color: #363636;
    transition: 0.5s;
    padding-left: 23px;
    border-color: white;
}

.checkbox:checked ~ .sliderContainer > .sliderButton{
    background-color: white;
    transition: 0.5s;
}
`;