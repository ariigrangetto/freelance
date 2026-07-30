const stack = ["JavaScript", "React", "Tailwind CSS", "Node.JS", "PostgreSQL", "MongoDB", "Figma", "Vercel", "Git"];
export default function About() {
    return (
        <section id="sobre-mí" className="relative z-10 py-24 px-6 md:px-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <div>
                    <span
                        className="block text-xs uppercase tracking-widest mb-3"
                        style={{ fontFamily: 'var(--font-mono)', color: '#888' }}
                    >
                        Sobre mí
                    </span>
                    <h2
                        className="text-4xl md:text-5xl leading-tight mb-8"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Diseño y código
                        <br />
                        <span className="italic">van juntos</span>
                    </h2>
                    <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: '#555' }}>
                        <p>
                            Soy desarrolladora frontend con más de 2 años construyendo productos digitales que la gente realmente usa.
                            Me importan tanto los píxeles como la arquitectura del código que los mueve.
                        </p>
                        <p>
                            Trabajo mejor en proyectos donde la calidad visual y la solidez técnica no son opuestas,
                            sino que se refuerzan mutuamente.
                        </p>
                        <p>
                            Fuera del trabajo: Gimnasio, disfrutar de mi familia/amigos, sol y demasiado café.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-10 pt-10" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                        {[['2+', 'años de experiencia'], ['10+', 'proyectos entregados'], ['100%', 'clientes satisfechos']].map(([n, l]) => (
                            <div key={n}>
                                <div
                                    className="text-2xl md:text-3xl font-medium mb-1"
                                    style={{ fontFamily: 'var(--font-display)', color: '#e8a020' }}
                                >
                                    {n}
                                </div>
                                <div className="text-xs leading-tight" style={{ color: '#888' }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div
                        className="rounded-2xl p-8 mb-6"
                        style={{ backgroundColor: 'rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.06)' }}
                    >
                        <h3
                            className="text-base mb-5"
                            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                        >
                            Stack tecnológico
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {stack.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-3 py-1.5 rounded-full border border-black/10 bg-white text-[#333] transition-all duration-200 hover:bg-[#1c1c2e] hover:text-white hover:border-[#1c1c2e] cursor-default"
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                    <blockquote
                        className="text-lg md:text-xl leading-relaxed pl-5"
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontStyle: 'italic',
                            color: '#333',
                            borderLeft: '2px solid #e8a020',
                        }}
                    >
                        "El mejor código es el que el usuario nunca tiene que pensar."
                    </blockquote>
                </div>
            </div>
        </section>
    )
}