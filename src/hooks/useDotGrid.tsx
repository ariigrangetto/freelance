import { useState, type CSSProperties, type PointerEvent } from "react";

export function useDotGrid() {
    const [hovering, setHovering] = useState(false);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }

    const mask = `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, #000 72px, transparent 120px)`;

    const containerStyle: CSSProperties = {
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
    }

    const dotsBase: CSSProperties = {
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage:
            'radial-gradient(circle at center, rgba(28, 28, 46, 0.12) 1.2px, transparent 1.4px)',
        backgroundSize: '18px 18px',
        zIndex: 0,
    }

    const dotsBloom: CSSProperties = {
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage:
            'radial-gradient(circle at center, rgba(232, 160, 32, 0.35) 2.16px, transparent 2.36px)',
        backgroundSize: '18px 18px',
        opacity: hovering ? 1 : 0,
        transition: 'opacity 0.15s ease',
        maskImage: mask,
        WebkitMaskImage: mask,
        zIndex: 0,
    }


    return { containerStyle, dotsBase, dotsBloom, handlePointerMove, setHovering };
}