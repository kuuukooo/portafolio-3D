import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navLinks } from '../constants';

const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeout = null;
    const onScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => setScrolled(window.scrollY > 0), 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a className='logo' href='#hero'>
          <img src='/images/logos/logo-personal.png' alt='Logo' />
        </a>

        <nav className='desktop'>
          <ul>
            {navLinks.map(({ key, link }) => (
              <li key={key} className='group'>
                <a href={link}>
                  <span>{t(`nav.${key}`)}</span>
                  <span className='underline'></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href='#contact' className='contact-btn group ml-4'>
          <div className='inner'>
            <span>{t('contactBtn')}</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;