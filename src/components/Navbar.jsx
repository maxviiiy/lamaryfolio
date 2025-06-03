import React, { useEffect, useRef, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import '../styles/Navbar.css';

const sections = ['home', 'portfolio', 'about', 'resume', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [animating, setAnimating] = useState(false);
  const [circleStyle, setCircleStyle] = useState({});
  const buttonRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerThemeTransition = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setCircleStyle({
      left: x + 'px',
      top: y + 'px',
    });
    setAnimating(true);
    setTimeout(() => {
      setDarkMode((prev) => !prev);
      setTimeout(() => setAnimating(false), 700);
    }, 10);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                onClick={() => setActive(id)}
              >
                {id === 'home'
                  ? 'Home'
                  : id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
              </a>
            </li>
          ))}
        </ul>
        <div className="controls">
          <button
            className="theme-toggle"
            onClick={triggerThemeTransition}
            aria-label="Toggle theme"
            ref={buttonRef}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {darkMode ? (
              <FiSun
                size={24}
                style={{ color: 'var(--light-purple)' }}
                title="Switch to light mode"
              />
            ) : (
              <FiMoon
                size={24}
                style={{ color: 'var(--dark-purple)' }}
                title="Switch to dark mode"
              />
            )}
          </button>
          <a href="#" className="connect-button">
            Connect With Me
          </a>
        </div>
      </nav>
      {animating && (
        <div
          className="theme-transition-circle"
          style={circleStyle}
        />
      )}
    </>
  );
}
