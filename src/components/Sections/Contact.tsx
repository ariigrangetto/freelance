import type { Shape } from "../../lib/types.ts"
import FloatingShapes from "../FloatingShapes.tsx"

const contactShapesLeft: Shape[] = [
    { type: 'circle', size: 44, color: '#e8a020', x: '2%', y: '15%', delay: '0s', dur: '7s', rotate: false },
    { type: 'roundsq', size: 30, color: '#3dbfb8', x: '6%', y: '50%', delay: '1.4s', dur: '6s', rotate: true },
    { type: 'ring', size: 38, color: '#e8a020', x: '1%', y: '78%', delay: '0.7s', dur: '8.5s', rotate: false },
    { type: 'circle', size: 14, color: '#1c1c2e', x: '10%', y: '35%', delay: '2s', dur: '5.5s', rotate: false },
    { type: 'circle', size: 70, color: 'rgba(232,160,32,0.07)', x: '-2%', y: '5%', delay: '0s', dur: '11s', rotate: false },
]

const contactShapesRight: Shape[] = [
    { type: 'roundsq', size: 34, color: '#3dbfb8', x: '92%', y: '20%', delay: '0.5s', dur: '7.5s', rotate: true },
    { type: 'circle', size: 22, color: '#e8a020', x: '96%', y: '55%', delay: '1.8s', dur: '6.5s', rotate: false },
    { type: 'ring', size: 42, color: '#1c1c2e', x: '90%', y: '72%', delay: '1s', dur: '9s', rotate: false },
    { type: 'square', size: 18, color: '#f0c040', x: '94%', y: '40%', delay: '2.5s', dur: '6s', rotate: true },
    { type: 'circle', size: 60, color: 'rgba(61,191,184,0.07)', x: '93%', y: '80%', delay: '0s', dur: '12s', rotate: false },
]


export function Contact() {

    return (
        <section id="contacto" className="relative z-10 py-24 px-6 md:px-10 overflow-hidden">
            <div className="hidden md:block" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {[...contactShapesLeft, ...contactShapesRight].map((s, i) => (
                    <FloatingShapes key={i} s={s} />
                ))}
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <span
                            className="block text-xs uppercase tracking-widest mb-3"
                            style={{ fontFamily: 'var(--font-mono)', color: '#888' }}
                        >
                            Contacto
                        </span>
                        <h2
                            className="text-4xl md:text-5xl leading-tight mb-6"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Trabajemos
                            <br />
                            <span className="italic">juntos</span>
                        </h2>
                        <p className="text-sm leading-relaxed mb-10" style={{ color: '#666' }}>
                            Cuéntame en qué estás trabajando. Respondo en menos de 24 horas y siempre con propuesta concreta.
                        </p>

                        <div className="flex flex-col gap-4">
                            {[
                                { label: 'Email', value: 'ariigrangetto5@gmail.com', href: 'mailto:ariigrangett5@gmail.com' },
                                { label: 'LinkedIn', value: '/in/ariigrangetto', href: 'https://www.linkedin.com/in/ariigrangetto/' },
                                { label: 'GitHub', value: 'github.com/ariigrangetto', href: 'https://github.com/ariigrangetto' },
                            ].map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    className="flex items-center justify-between py-3 group transition-colors duration-200 border-b border-black/10"
                                >
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#888', letterSpacing: '0.08em' }}>
                                        {c.label}
                                    </span>
                                    <span className="text-sm text-[#333] group-hover:text-amber-600 transition-colors duration-200">
                                        {c.value} <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}