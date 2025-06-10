import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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