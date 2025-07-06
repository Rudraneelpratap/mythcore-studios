'use client'
import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Books', href: '#books' },
  { label: 'Studio', href: '#mythcore' },
  { label: 'Mythcore Jr', href: '#jr' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ⛔ Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
        scrolling
          ? 'bg-zinc-900/80 border-b border-zinc-800 shadow-md'
          : 'bg-zinc-900/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl tracking-wide font-semibold text-white font-serif">
          Mythcore
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 hover:scale-105 transform transition duration-300 ease-in-out tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (force render icons) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none transition-opacity duration-300"
        >
          {menuOpen ? <HiX className="block" /> : <HiMenu className="block" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900/95 border-t border-zinc-800 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block text-gray-300 hover:text-yellow-400 transition font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
