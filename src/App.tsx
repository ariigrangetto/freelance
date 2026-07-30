import Hero from "./components/Hero.tsx";
import { Nav } from "./components/Nav.tsx";
import { Services } from "./components/Sections/Services.tsx";
import { useDotGrid } from "./hooks/useDotGrid.tsx"
import Projects from "./components/Sections/Projects.tsx";
import About from "./components/Sections/About.tsx";
import { Contact } from "./components/Sections/Contact";
import Footer from "./components/Footer.tsx";

function App() {
  const { containerStyle, dotsBase, dotsBloom, handlePointerMove, setHovering } = useDotGrid();

  return (
    <>
      <div
        style={containerStyle}
        onPointerEnter={() => setHovering(true)}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setHovering(false)}>
        <div style={dotsBase} />
        <div style={dotsBloom} />
        <Nav />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
