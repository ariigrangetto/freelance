const services = [
    {
        index: '01',
        title: 'Desarrollo Web',
        desc: 'Aplicaciones web rápidas y accesibles con arquitectura limpia y rendimiento optimizado.',
    },
    {
        index: '02',
        title: 'Diseño de Interfaz',
        desc: 'UI/UX con foco en usabilidad real. De wireframes de alta fidelidad a sistemas de diseño cohesivos y escalables.',
    },
    {
        index: '03',
        title: 'Integración de APIs',
        desc: 'Conexión con servicios externos, autenticación. Backend ligero cuando el proyecto lo requiere.',
    },
    {
        index: '04',
        title: 'Consultoría Técnica',
        desc: 'Revisión de arquitectura, mejora de performance, stack tech y roadmap para equipos que quieren escalar.',
    },
]

export function Services() {
    return (
        <section id="servicios" className="relative z-10 py-24 px-6 md:px-10 max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
                <div>
                    <span
                        className="block text-xs uppercase tracking-widest mb-3"
                        style={{ fontFamily: 'var(--font-mono)', color: '#888' }}
                    >
                        Servicios
                    </span>
                    <h2
                        className="text-4xl md:text-5xl leading-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Lo que hago
                        <br />
                        <span className="italic">por ti</span>
                    </h2>
                </div>
                <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#888' }}>
                    Trabajo de forma independiente, adaptándome al ritmo y las necesidades del proyecto.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                {services.map((s) => (
                    <div
                        key={s.index}
                        className="p-8 group cursor-default transition-colors duration-300 hover:bg-black/2"
                        style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', borderRight: '1px solid rgba(0,0,0,0.08)' }}
                    >
                        <div className="flex items-start justify-between mb-6">
                            <span
                                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#e8a020' }}
                            >
                                {s.index}
                            </span>
                            <span className="w-6 h-6 rounded-full border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: '#e8a020' }}>
                                <span style={{ color: '#e8a020', fontSize: '10px' }}>→</span>
                            </span>
                        </div>
                        <h3
                            className="text-xl md:text-2xl mb-3 leading-snug"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            {s.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-5" style={{ color: '#666' }}>
                            {s.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}