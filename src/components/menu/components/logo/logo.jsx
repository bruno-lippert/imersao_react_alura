import React from 'react'
import { ImgLogo, StyledLogo } from './styledLogo'
import logoYTWhite from "../../../../../public/images/YouTubeWhiteLogo.png";
import Image from 'next/image'

export default function Logo(props) {
  return (
    //<Image src={(props) => props.theme.images.logo} width={100} height={50}/>
    <ImgLogo />
  )
}
