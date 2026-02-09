'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SplashScreen from '@/components/ui/SplashScreen';
import VantaBackground from '@/components/ui/VantaBackground';

interface AppWrapperProps {
    children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
    const pathname = usePathname();
    // Initialize state based on current path to prevent flash of content
    const [showSplash, setShowSplash] = useState(pathname === '/');

    useEffect(() => {
        // Trigger splash screen whenever we navigate to the home page
        if (pathname === '/') {
            setShowSplash(true);
        } else {
            setShowSplash(false);
        }
    }, [pathname]);

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

    return (
        <>
            {/* Vanta.js DOTS Background */}
            <VantaBackground />

            {/* Noise Texture Overlay */}
            <div className="noise" />

            {/* Splash Screen */}
            {showSplash && pathname === '/' && (
                <SplashScreen onComplete={handleSplashComplete} />
            )}

            {/* Main Content */}
            <div
                className={`transition-opacity duration-500 ${showSplash && pathname === '/' ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                {children}
            </div>
        </>
    );
}
