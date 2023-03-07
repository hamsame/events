import React, { useState, useEffect } from "react"
import Link from "next/link"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  const { navbar } = styles
  const [navbarSettings, setNavbarSettings] = useState({
    showNav: false,
    smallWidth: false,
  })
  const { showNav, smallWidth } = navbarSettings

  const handleNavClick = () => {
    // If the user clicks on the navbar button and the navbar menu is open, then the following code will close it otherwise if it's closed it will be opened. It will add or remove the className 'show' to do the aforementioned tasks.
    showNav
      ? setNavbarSettings({ ...navbarSettings, showNav: true })
      : setNavbarSettings({ ...navbarSettings, showNav: false })
    document.querySelector(".navlinks").classList.toggle("show")
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        document.querySelector(".navlinks").classList.remove("show")
      }
      return () => {
        window.removeEventListener("resize")
      }
    })
  }, navbarSettings.smallWidth)

  return (
    <nav className={navbar}>
      <h1>WL Events</h1>
      <button onClick={() => handleNavClick()}>&#8801;</button>
      <ul className="navlinks">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
