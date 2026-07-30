import type { CSSProperties } from "react"
import type { Shape } from "../lib/types.ts"

export default function FloatingShapes({ s }: { s: Shape }) {
    const base: CSSProperties = {
        position: 'absolute',
        left: s.x,
        top: s.y,
        width: s.size,
        height: s.size,
        animation: `floatY ${s.dur} ease-in-out ${s.delay} infinite${s.rotate ? `, spinSlow 18s linear ${s.delay} infinite` : ''}`,
        pointerEvents: 'none',
    };

    if (s.type === "circle") {
        return (
            <div style={{ ...base, borderRadius: '50%', backgroundColor: s.color }} />
        )
    }

    if (s.type === 'ring') {
        return (
            <div
                style={{
                    ...base,
                    borderRadius: '50%',
                    border: `3px solid ${s.color}`,
                    backgroundColor: 'transparent',
                }}
            />
        )
    }
    if (s.type === 'roundsq') {
        return (
            <div style={{ ...base, borderRadius: '10px', backgroundColor: s.color }} />
        )
    };

    // square
    return (
        <div style={{ ...base, borderRadius: '4px', backgroundColor: s.color }} />
    )
}