export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            className="relative z-10 py-8 px-6 md:px-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
        >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.05em' }}>
                © {year} nexom.dev — Hecho con cuidado
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#aaa', letterSpacing: '0.05em' }}>
                Córdoba, Argentina
            </span>
        </footer>
    )
}