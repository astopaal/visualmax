'use client';

import { useEffect, useState, useCallback } from 'react';

interface SplashScreenProps {
    onComplete: () => void;
}

const LOGO_TEXT = 'VisualMAX';
const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DECODE_SPEED = 50; // ms per iteration
const CHARS_PER_DECODE = 3; // iterations before revealing each character

export default function SplashScreen({ onComplete }: SplashScreenProps) {
    const [displayText, setDisplayText] = useState<string[]>(
        Array(LOGO_TEXT.length).fill('')
    );
    const [revealedCount, setRevealedCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [showSlogan, setShowSlogan] = useState(false);

    const getRandomChar = useCallback(() => {
        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
    }, []);

    useEffect(() => {
        let iteration = 0;

        const interval = setInterval(() => {
            setDisplayText(prev => {
                return prev.map((_, index) => {
                    // Already revealed characters stay fixed
                    if (index < revealedCount) {
                        return LOGO_TEXT[index];
                    }
                    // Characters being decoded show random glitch
                    return getRandomChar();
                });
            });

            iteration++;

            // Reveal next character after CHARS_PER_DECODE iterations
            if (iteration >= CHARS_PER_DECODE) {
                iteration = 0;
                setRevealedCount(prev => {
                    if (prev >= LOGO_TEXT.length) {
                        clearInterval(interval);
                        setIsComplete(true);
                        return prev;
                    }
                    return prev + 1;
                });
            }
        }, DECODE_SPEED);

        return () => clearInterval(interval);
    }, [revealedCount, getRandomChar]);

    // Show slogan after decode is complete
    useEffect(() => {
        if (isComplete) {
            const timer = setTimeout(() => {
                setShowSlogan(true);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isComplete]);

    // Trigger onComplete after everything is shown
    useEffect(() => {
        if (showSlogan) {
            const timer = setTimeout(() => {
                onComplete();
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [showSlogan, onComplete]);

    return (
        <div className="fixed inset-0 z-[9998] bg-obsidian flex flex-col items-center justify-center p-4">

            {/* Videowall Container */}
            <div className="relative w-full max-w-5xl aspect-[16/9] bg-zinc-900 p-2 rounded-xl shadow-2xl border border-zinc-800">

                {/* Main Content Layer (Spans across all screens) */}
                <div className="absolute inset-2 z-10 overflow-hidden flex items-center justify-center bg-black rounded-lg">

                    {/* Background Grid */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(0, 102, 255, 0.2) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0, 102, 255, 0.2) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px',
                        }}
                    />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.8)_100%)]" />

                    {/* The Logo Content */}
                    <div className="relative z-10 scale-90 md:scale-110">
                        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-center">
                            {displayText.map((char, index) => {
                                const isRevealed = index < revealedCount; 
                                const isMaxPart = index >= 6; // "MAX" part

                                return (
                                    <span
                                        key={index}
                                        className={`transition-all duration-150 ${isRevealed
                                            ? isMaxPart
                                                ? 'text-signal-blue'
                                                : 'text-pure-white'
                                            : 'text-zinc-600'
                                            } ${!isRevealed ? 'animate-pulse' : ''}`}
                                        style={{
                                            textShadow: isRevealed && isMaxPart
                                                ? '0 0 40px rgba(0, 102, 255, 0.6)'
                                                : 'none',
                                        }}
                                    >
                                        {char}
                                    </span>
                                );
                            })}
                        </h1>

                        {/* Glitch line effect */}
                        {!isComplete && (
                            <div
                                className="absolute h-[4px] bg-signal-blue/50 animate-pulse"
                                style={{
                                    top: '50%',
                                    left: `${(revealedCount / LOGO_TEXT.length) * 100}%`,
                                    width: '40px',
                                    boxShadow: '0 0 20px rgba(0, 102, 255, 0.8)',
                                }}
                            />
                        )}

                        {/* Slogan */}
                        <div
                            className={`mt-12 text-center transition-all duration-700 ${showSlogan
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <p className="font-mono text-sm md:text-xl text-signal-blue/80 tracking-[0.4em] uppercase drop-shadow-[0_0_10px_rgba(0,102,255,0.6)]">
                                Command Every Screen
                            </p>
                        </div>
                    </div>
                </div>

                {/* Screen Grid Overlay - Frame Bezels ON TOP of content */}
                <div className="absolute inset-2 z-20 grid grid-cols-3 grid-rows-2 pointer-events-none" style={{ gap: '6px' }}>
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="relative rounded-sm overflow-hidden"
                            style={{
                                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
                                border: '3px solid #000000',
                                outline: '1px solid #1a1a1a',
                            }}
                        >
                            {/* Glass Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent z-20" />

                            {/* Scanline (Individual per screen) */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] z-10" />

                            {/* Individual Screen Status UI - Randomly distributed */}
                            <div className="absolute top-2 left-2 z-30 opacity-60">
                                {i === 0 && <span className="mono text-[8px] text-zinc-500">HDMI-1 [MASTER]</span>}
                                {i === 2 && <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />}
                                {i === 4 && <span className="mono text-[8px] text-zinc-500">SYNC_OK</span>}
                                {i === 5 && !isComplete && (
                                    <div className="mono text-[8px] text-signal-blue animate-pulse">CONNECTING...</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bezel grid lines - horizontal and vertical black bars over the content */}
                <div className="absolute inset-2 z-30 pointer-events-none">
                    {/* Horizontal bezel line (center) */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] bg-black" />
                    {/* Vertical bezel lines (1/3 and 2/3) */}
                    <div className="absolute top-0 bottom-0 left-1/3 -translate-x-1/2 w-[6px] bg-black" />
                    <div className="absolute top-0 bottom-0 left-2/3 -translate-x-1/2 w-[6px] bg-black" />
                </div>

                {/* Loading Bar (Overlaid on bottom screens) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-[40%]">
                    <div className="h-[2px] bg-zinc-800 w-full overflow-hidden">
                        <div
                            className="h-full bg-signal-blue transition-all duration-100 ease-out shadow-[0_0_10px_rgba(0,102,255,1)]"
                            style={{
                                width: `${(revealedCount / LOGO_TEXT.length) * 100}%`
                            }}
                        />
                    </div>
                </div>

            </div>

            {/* Ambient Glow behind the wall */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[60%] bg-signal-blue/10 blur-[100px] -z-10" />

        </div>
    );
}
