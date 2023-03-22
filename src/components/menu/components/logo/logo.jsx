import React, { useContext } from 'react'
import { ImgLogo } from './styledLogo'
import logoYTWhite from "../../../../../public/images/YouTubeWhiteLogo.png";
import logoYTBlack from "../../../../../public/images/YouTubeBlackLogo.png"
import Image from 'next/image'
import { ColorModeContext } from '../changeTheme/ColorMode';
import { darkTheme } from "../../../../../theme";

export default function Logo() {
  const themeContext = useContext(ColorModeContext)

  const imgLogo = themeContext.mode == darkTheme ? logoYTWhite : logoYTBlack

  return (
    <ImgLogo>
      <Image src={imgLogo} style={{width: "100%", height: "100%"}} alt="logoImage"/> 
    </ImgLogo>
    //<ImgLogo />
  )
}
