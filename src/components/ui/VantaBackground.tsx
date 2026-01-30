'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

interface VantaEffect {
    destroy: () => void;
}

declare global {
    interface Window {
        THREE: unknown;
        VANTA: {
            DOTS: (config: Record<string, unknown>) => VantaEffect;
        };
    }
}

export default function VantaBackground() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
    const [threeLoaded, setThreeLoaded] = useState(false);
    const [vantaLoaded, setVantaLoaded] = useState(false);

    useEffect(() => {
        // Her iki script de yüklendiğinde Vanta'yı başlat
        if (threeLoaded && vantaLoaded && !vantaEffect && vantaRef.current) {
            // Küçük bir gecikme ekle, scriptlerin tam yüklenmesi için
            const timer = setTimeout(() => {
                if (window.VANTA && window.VANTA.DOTS) {
                    try {
                        const effect = window.VANTA.DOTS({
                            el: vantaRef.current,
                            mouseControls: true,
                            touchControls: true,
                            gyroControls: false,
                            minHeight: 200.00,
                            minWidth: 200.00,
                            scale: 1.00,
                            scaleMobile: 1.00,
                            backgroundColor: 0x0A0A0A, // obsidian
                            color: 0x0066FF,  // signal-blue
                            color2: 0x0052CC, // signal-blue-dark
                            size: 2.5,
                            spacing: 40,
                            showLines: false,
                        });
                        setVantaEffect(effect);
                        console.log('Vanta DOTS initialized successfully');
                    } catch (error) {
                        console.error('Failed to initialize Vanta effect:', error);
                    }
                } else {
                    console.error('VANTA.DOTS not available');
                }
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [threeLoaded, vantaLoaded, vantaEffect]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, [vantaEffect]);

    return (
        <>
            {/* THREE.js CDN */}
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log('THREE.js loaded');
                    setThreeLoaded(true);
                }}
            />
            {/* Vanta DOTS CDN */}
            <Script
                src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log('Vanta DOTS loaded');
                    setVantaLoaded(true);
                }}
            />
            <div
                ref={vantaRef}
                id="vanta-background"
                className="fixed inset-0"
                style={{
                    width: '100vw',
                    height: '100vh',
                    zIndex: -1,
                }}
            />
        </>
    );
}
