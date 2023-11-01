import React from 'react'
import {ReactNavbar} from "overlay-navbar";
import logo from "../../Images/logo.jpg";
// eslint-disable-next-line
import {FaUserAlt} from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar 

      navColor1="white"
      navColor2="hsl(219, 48%, 8%)"
      burgerColor="hsl(250, 100%, 75%)"
      burgerColorHover="hsl(250, 100%, 75%)"
      logo={logo}
      logoWidth="100px"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contacts"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Size="1.5rem"
      link1Padding="3vamx"
      link3Padding="2vmax"
      link1Color="HSL(250, 100%, 75%)"
      // profileIcon={true}
      // profileIconElement={FaUserAlt}

      
      
      


    />
  )
}

export default Header