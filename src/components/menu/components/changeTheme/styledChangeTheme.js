import styled from "styled-components";

export const StyledSwitchMode = styled.div`
width: 50px;
height: auto;
cursor: pointer;

.switch {
    cursor: pointer;
}

.sliderContainer {
    border: 2px solid black;
    padding: 3px 23px 3px 3px;
    border-radius: 50px;
    height: 30px;
    transition: 0.5s;
    background-color: ${({theme}) => theme.colors.colorLogo};
    border-color:  ${({theme}) => theme.colors.backgroundBase};

}

.sliderButton {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    border: 0px solid ${({theme}) => theme.colors.backgroundBase};
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.backgroundLevel2};
    transition: 0.5s;
}
.checkbox {
    display: none;
}
.checkbox:checked ~ .sliderContainer{
    background-color: #363636;
    transition: 0.5s;
    padding-left: 22px;
    border-color: white;
}

.checkbox:checked ~ .sliderContainer > .sliderButton{
    background-color: white;
    transition: 0.5s;
}
`;