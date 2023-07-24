import React, { useState } from 'react'
import "./Header.css"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)
  return (
    <section className={navbar ? "navbar active" : "navbar"}>
        <div className="flexCenter paddings innerWidth h-container">
            <img src="/images/logo.png" alt="logo" width={100} />

            <div className="flexCenter h-menu">
                <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className="button">
                    <a href="">Contact</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header
