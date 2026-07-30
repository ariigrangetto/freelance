import type { Shape } from "../lib/types.ts";
import FloatingShapes from "./FloatingShapes";


const shapes: Shape[] = [
    // amber circle
    { type: 'circle', size: 52, color: '#e8a020', x: '68%', y: '18%', delay: '0s', dur: '6s', rotate: false },
    // teal rounded square
    { type: 'roundsq', size: 38, color: '#3dbfb8', x: '78%', y: '42%', delay: '1.2s', dur: '7s', rotate: true },
    // dark navy mini circle
    { type: 'circle', size: 20, color: '#1c1c2e', x: '62%', y: '55%', delay: '0.6s', dur: '5s', rotate: false },
    // amber small square
    { type: 'square', size: 28, color: '#f0c040', x: '85%', y: '25%', delay: '2s', dur: '8s', rotate: true },
    // pale teal ring
    { type: 'ring', size: 44, color: '#3dbfb8', x: '72%', y: '70%', delay: '1.8s', dur: '9s', rotate: false },
    // large soft amber circle (bg element)
    { type: 'circle', size: 90, color: 'rgba(232,160,32,0.1)', x: '90%', y: '10%', delay: '0s', dur: '11s', rotate: false },
    // small dark dot
    { type: 'circle', size: 14, color: '#1c1c2e', x: '58%', y: '30%', delay: '3s', dur: '6.5s', rotate: false },
    // teal triangle-ish (rotated square)
    { type: 'square', size: 22, color: '#3dbfb8', x: '80%', y: '60%', delay: '0.4s', dur: '7.5s', rotate: true },
]

export default function Hero() {
    return (
        <section className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 max-w-6xl mx-auto overflow-hidden">

            <div className="hidden md:block" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {shapes.map((s, i) => (
                    <FloatingShapes key={i} s={s} />
                ))}
            </div>

            <div className="flex flex-col gap-6 max-w-2xl">
                <div className="flex items-center gap-3">
                    <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: '#e8a020' }}
                    />
                    <span
                        className="text-xs uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)', color: '#888' }}
                    >
                        Disponible para proyectos
                    </span>
                </div>

                <h1
                    className="leading-none text-5xl md:text-7xl lg:text-8xl"
                    style={{ fontFamily: 'var(--font-display)', color: '#1c1c2e' }}
                >
                    Convierto ideas
                    <br />
                    <span className="italic" style={{ color: '#e8a020' }}>complejas</span> en
                    <br />
                    productos <span className="italic">digitales</span>
                </h1>

                <p
                    className="text-base md:text-lg max-w-xl leading-relaxed mt-2"
                    style={{ color: '#666', fontFamily: 'var(--font-body)', fontWeight: 300 }}
                >
                    Soy desarrolladora freelance especializada en interfaces web modernas,
                    apps reactivas y sistemas de diseño que escalan. Del wireframe al deploy.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                    <a
                        href="#contacto"
                        className="px-6 py-3 rounded-full text-sm font-medium text-white bg-[#e8a020] transition-all duration-200 hover:bg-[#d49018] hover:scale-105 active:scale-100 shadow-sm"
                    >
                        Empecemos →
                    </a>
                    <a
                        href="#proyectos"
                        className="px-6 py-3 rounded-full text-sm font-medium border border-[#1c1c2e]/20 text-[#1c1c2e] transition-all duration-200 hover:bg-[#1c1c2e] hover:text-white hover:border-[#1c1c2e] hover:scale-105 active:scale-100"
                    >
                        Ver proyectos
                    </a>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', color: '#1c1c2e' }}>
                    SCROLL
                </span>
                <div className="w-px h-10" style={{ backgroundColor: '#1c1c2e', animation: 'scrollPulse 2s ease-in-out infinite' }} />
            </div>

            <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: scaleY(1); opacity: 0.3; }
          50% { transform: scaleY(0.5); opacity: 0.6; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    )
}