import React, { useState } from 'react'
import "./Header.css"
import OutsideClickHandler from 'react-outside-click-handler';
import { BiMenuAltRight } from "react-icons/bi"

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className={navbar ? "navbar active" : "navbar"}>
        <div className="flexCenter paddings innerWidth h-container">
            <img src="/images/logo.png" alt="logo" width={100} />
            <OutsideClickHandler 
            onOutsideClick={()=> {
              setMenuOpened(false)
            }}
            >

            <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                <a href="#residencies">Residencies</a>
                <a href="#our-value">Our Value</a>
                <a href="#contact-us">Contact Us</a>
                <a href="#get-started">Get Started</a>
                <button className="button">
                  <a href="mailto:mehedihasan62086@gmail.com">Contact</a>
                </button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick= {()=>setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size = {30} />
            </div>
        </div>
    </section>
  )
}

export default Header
