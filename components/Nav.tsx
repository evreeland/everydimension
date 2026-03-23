'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#problem', label: 'Why It Works' },
    { href: '#services', label: 'Services' },
    { href: '#track-record', label: 'Track Record' },
    { href: '#about', label: 'About' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 48px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        style={{
          fontSize: '17px',
          fontWeight: 800,
          letterSpacing: '-0.5px',
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        Every<span style={{ color: '#3b82f6' }}>Dimension</span>
      </a>

      {/* Desktop Links */}
      <ul
        style={{
          display: 'flex',
          gap: '36px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center',
        }}
        className="nav-desktop-links"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#8a8a8a',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = '#fff')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = '#8a8a8a')
              }
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#fff',
              background: '#3b82f6',
              padding: '9px 22px',
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.opacity = '0.85'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }}
          >
            Let&rsquo;s Talk
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: '8px',
          fontSize: '20px',
        }}
        className="nav-mobile-btn"
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            background: '#111111',
            borderBottom: '1px solid #1f1f1f',
            padding: '24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
          className="nav-mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#8a8a8a',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: '#fff',
              background: '#3b82f6',
              padding: '12px 22px',
              borderRadius: '6px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Let&rsquo;s Talk
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
