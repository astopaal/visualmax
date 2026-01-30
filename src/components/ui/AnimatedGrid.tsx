'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedGrid() {
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* Base Grid with Organic Visibility Animation */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(113, 113, 122, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(113, 113, 122, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Animated Visibility Mask - Creates organic appearing/disappearing effect */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(113, 113, 122, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(113, 113, 122, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    maskImage: `
                        radial-gradient(ellipse 800px 600px at 20% 30%, black 0%, transparent 50%),
                        radial-gradient(ellipse 600px 800px at 80% 70%, black 0%, transparent 50%),
                        radial-gradient(ellipse 500px 500px at 50% 50%, black 0%, transparent 50%)
                    `,
                    WebkitMaskImage: `
                        radial-gradient(ellipse 800px 600px at 20% 30%, black 0%, transparent 50%),
                        radial-gradient(ellipse 600px 800px at 80% 70%, black 0%, transparent 50%),
                        radial-gradient(ellipse 500px 500px at 50% 50%, black 0%, transparent 50%)
                    `,
                    animation: 'gridPulse 15s ease-in-out infinite',
                }}
            />

            {/* Second animated layer for more organic movement */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(113, 113, 122, 0.08) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(113, 113, 122, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    maskImage: `
                        radial-gradient(ellipse 700px 500px at 70% 20%, black 0%, transparent 50%),
                        radial-gradient(ellipse 500px 700px at 30% 80%, black 0%, transparent 50%)
                    `,
                    WebkitMaskImage: `
                        radial-gradient(ellipse 700px 500px at 70% 20%, black 0%, transparent 50%),
                        radial-gradient(ellipse 500px 700px at 30% 80%, black 0%, transparent 50%)
                    `,
                    animation: 'gridPulse2 20s ease-in-out infinite',
                }}
            />

            {/* Mouse Highlight - Grid becomes more visible around cursor */}
            <div
                className="fixed pointer-events-none z-[1] transition-all duration-100 ease-out"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    width: '600px',
                    height: '600px',
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: `
                        linear-gradient(rgba(0, 102, 255, 0.4) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 102, 255, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    backgroundPosition: `${mousePosition.x % 60}px ${mousePosition.y % 60}px`,
                    maskImage: 'radial-gradient(circle, black 0%, black 20%, transparent 50%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 0%, black 20%, transparent 50%)',
                }}
            />

            {/* Bright glow around cursor */}
            <div
                className="fixed pointer-events-none z-0 transition-all duration-150 ease-out"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    width: '500px',
                    height: '500px',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle, rgba(0, 102, 255, 0.12) 0%, rgba(0, 102, 255, 0.05) 30%, transparent 60%)',
                }}
            />

            <style jsx>{`
                @keyframes gridPulse {
                    0%, 100% {
                        opacity: 0.3;
                        mask-position: 0% 0%;
                        -webkit-mask-position: 0% 0%;
                    }
                    25% {
                        opacity: 0.6;
                        mask-position: 10% 5%;
                        -webkit-mask-position: 10% 5%;
                    }
                    50% {
                        opacity: 0.4;
                        mask-position: 5% 10%;
                        -webkit-mask-position: 5% 10%;
                    }
                    75% {
                        opacity: 0.7;
                        mask-position: -5% -5%;
                        -webkit-mask-position: -5% -5%;
                    }
                }

                @keyframes gridPulse2 {
                    0%, 100% {
                        opacity: 0.5;
                        mask-position: 0% 0%;
                        -webkit-mask-position: 0% 0%;
                    }
                    33% {
                        opacity: 0.2;
                        mask-position: -8% 8%;
                        -webkit-mask-position: -8% 8%;
                    }
                    66% {
                        opacity: 0.6;
                        mask-position: 8% -8%;
                        -webkit-mask-position: 8% -8%;
                    }
                }
            `}</style>
        </>
    );
}
