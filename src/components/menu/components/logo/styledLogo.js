import styled from 'styled-components';
import logoYTWhite from "../../../../../public/images/YouTubeWhiteLogo.png";
import Image from 'next/image'

export const ImgLogo = styled.image.attrs((props) => ({
    src: logoYTWhite,
    alt: "imagelogo",
  }))`
  height: 30px;
  width: auto;
  `;