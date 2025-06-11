import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let timeout = null
    const onScroll = () => {
      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => {
        setScrolled(window.scrollY > 0)
      }, 50) // sólo cada 50ms
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timeout) clearTimeout(timeout)
    }
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a className='logo' href='#hero'>
          <img src="/images/logos/logo-personal.png" alt="Logo" />
        </a>

        <nav className='desktop'>
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className='group'>
                <a href={link}>
                  <span>{name}</span>
                  <span className='underline'></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className='contact-btn group'>
          <div className='inner'>
            <span>Contáctame</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Navbar