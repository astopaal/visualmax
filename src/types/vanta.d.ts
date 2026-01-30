declare module 'vanta/dist/vanta.dots.min' {
    import * as THREE from 'three';

    interface VantaDotsConfig {
        el: HTMLElement | null;
        THREE: typeof THREE;
        mouseControls?: boolean;
        touchControls?: boolean;
        gyroControls?: boolean;
        minHeight?: number;
        minWidth?: number;
        scale?: number;
        scaleMobile?: number;
        backgroundColor?: number;
        color?: number;
        color2?: number;
        size?: number;
        spacing?: number;
        showLines?: boolean;
    }

    interface VantaEffect {
        destroy: () => void;
        setOptions: (options: Partial<VantaDotsConfig>) => void;
    }

    function VANTA_DOTS(config: VantaDotsConfig): VantaEffect;
    export default VANTA_DOTS;
}
