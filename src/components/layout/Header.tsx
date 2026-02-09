'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Platform', href: '#overview' },
        { label: 'Features', href: '#features' },
        { label: 'Security', href: '#security' },
        { label: 'Architecture', href: '#architecture' },
    ];

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${scrolled
                    ? 'bg-obsidian/90 backdrop-blur-md border-b border-zinc-800'
                    : 'bg-transparent'
                }
      `}
        >
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 bg-signal-blue flex items-center justify-center">
                            <span className="text-pure-white font-bold text-sm">V</span>
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-pure-white">
                            Visual<span className="text-signal-blue">MAX</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="
                  text-sm font-medium text-zinc-400 
                  hover:text-pure-white 
                  transition-colors duration-300
                  link-underline
                "
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button variant="primary" href="#demo">
                            Request Demo
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`
                w-full h-0.5 bg-pure-white transition-all duration-300
                ${menuOpen ? 'rotate-45 translate-y-2' : ''}
              `} />
                            <span className={`
                w-full h-0.5 bg-pure-white transition-all duration-300
                ${menuOpen ? 'opacity-0' : ''}
              `} />
                            <span className={`
                w-full h-0.5 bg-pure-white transition-all duration-300
                ${menuOpen ? '-rotate-45 -translate-y-2' : ''}
              `} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`
          lg:hidden overflow-hidden transition-all duration-300
          bg-obsidian border-b border-zinc-800
          ${menuOpen ? 'max-h-80 pb-6' : 'max-h-0'}
        `}>
                    <nav className="flex flex-col pt-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-base font-medium text-zinc-400 hover:text-pure-white transition-colors duration-200 py-3 border-b border-zinc-800/50"
                            >
                                {link.label}
                            </a>
                        ))}

                    </nav>
                </div>
            </div>
        </header>
    );
}
