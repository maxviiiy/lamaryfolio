import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import '../styles/Navbar.css';

const sections = [
  { id: 'home', path: '/', label: 'Home' },
  { id: 'portfolio', path: '/portfolio', label: 'Portfolio' },
  { id: 'about', path: '/about', label: 'About' },
  { id: 'resume', path: '/resume', label: 'Resume' },
  { id: 'contact', path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [animating, setAnimating] = useState(false);
  const [circleStyle, setCircleStyle] = useState({});
  const buttonRef = useRef(null);

  // Get active section based on current path
  const getActiveSection = () => {
    const currentSection = sections.find(section => section.path === location.pathname);
    return currentSection ? currentSection.id : 'home';
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

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
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.path}
                className={getActiveSection() === section.id ? 'active' : ''}
              >
                {section.label}
              </Link>
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
          <Link to="/contact" className="connect-button">
            Connect With Me
          </Link>
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
