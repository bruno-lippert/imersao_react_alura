import { useContext } from "react";
import styled from "styled-components";
import { ColorModeContext } from "../menu/components/changeTheme/ColorMode";


export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
        }
      }
      /* Estilos do scrollbar */
      ::-webkit-scrollbar {
        width: 10px; /* largura do scrollbar */
        height: 10px; /* altura do scrollbar */
        background-color: ${({theme}) => theme.colors.scrollBar};
        border-radius: 5px;
      }
      /* Estilos do thumb do scrollbar */
      ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colors.scrollBarThumb};
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: ${({theme}) => theme.colors.scrollBarThumbHover}; /* cor do thumb quando hover */
      }
    }
  }
`;