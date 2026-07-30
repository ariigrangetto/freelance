const projects = [
    {
        name: 'Naao.',
        category: 'Dashboard · Manejo de turnos',
        year: '2026',
        desc: 'Aplicación web para la gestión de turnos en peluquerías.',
        color: '#1c1c2e',
        img: '/naao_instagram_post.png',
    },
]


export default function Projects() {
    return (
        <section id="proyectos" className="relative z-10 py-24 px-6 md:px-10 max-w-6xl mx-auto">
            <div className="mb-16">
                <span
                    className="block text-xs uppercase tracking-widest mb-3"
                    style={{ fontFamily: 'var(--font-mono)', color: '#888' }}
                >
                    Proyectos
                </span>
                <h2
                    className="text-4xl md:text-5xl leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    Trabajo <span className="italic">selecto</span>
                </h2>
            </div>

            <div className="flex flex-col gap-6">
                {projects.map((p, i) => (
                    <div
                        key={p.name}
                        className="group relative overflow-hidden rounded-2xl flex flex-col md:flex-row items-stretch cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                        style={{ backgroundColor: p.color, minHeight: '220px' }}
                    >
                        <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                                        {String(i + 1).padStart(2, '0')} / {p.year}
                                    </span>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>
                                        {p.category}
                                    </span>
                                </div>
                                <h3
                                    className="text-2xl md:text-3xl text-white mb-3 leading-snug"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {p.name}
                                </h3>
                                <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                    {p.desc}
                                </p>
                            </div>
                            <div className="mt-6">
                                <span
                                    className="inline-flex items-center gap-2 text-xs border border-white/20 text-white/60 rounded-full px-4 py-1.5 group-hover:border-white/50 group-hover:text-white transition-all duration-200"
                                    style={{ fontFamily: 'var(--font-mono)' }}
                                >
                                    Ver caso →
                                </span>
                            </div>
                        </div>

                        <div className="md:w-72 h-48 md:h-auto overflow-hidden">
                            <img
                                src={p.img}
                                alt={p.name}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}