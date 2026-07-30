import { useEffect, useState } from "react";

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = ["Servicios", "Proyectos", "Sobre mí", "Contacto"];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: scrolled ? 'rgba(248,251,255,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
            }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ backgroundColor: '#e8a020', fontFamily: 'var(--font-mono)' }}
                    >
                        N
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                        nexom.dev
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase().replace(' ', '-')}`}
                            className="text-sm transition-colors duration-200 hover:text-amber-600"
                            style={{ color: '#555', fontFamily: 'var(--font-body)' }}
                        >
                            {l}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        className="text-sm px-4 py-2 rounded-full border border-[#1c1c2e] text-[#1c1c2e] transition-all duration-200 hover:bg-[#1c1c2e] hover:text-white"
                    >
                        Hablemos
                    </a>
                </nav>
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className="block w-5 h-px bg-black transition-all duration-200"
                        style={{ transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }}
                    />
                    <span
                        className="block w-5 h-px bg-black transition-all duration-200"
                        style={{ opacity: menuOpen ? 0 : 1 }}
                    />
                    <span
                        className="block w-5 h-px bg-black transition-all duration-200"
                        style={{ transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }}
                    />
                </button>
            </div>

            <div
                className="md:hidden overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: menuOpen ? '300px' : '0',
                    backgroundColor: 'rgba(248,251,255,0.97)',
                    backdropFilter: 'blur(12px)',
                }}
            >
                <div className="flex flex-col px-6 py-4 gap-4 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    {links.map((l) => (
                        <a
                            key={l}
                            href={`#${l.toLowerCase().replace(' ', '-')}`}
                            className="text-base py-1"
                            style={{ color: '#555' }}
                            onClick={() => setMenuOpen(false)}
                        >
                            {l}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}