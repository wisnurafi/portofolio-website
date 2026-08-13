import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Expertise from "@/sections/Expertise";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Stack from "@/sections/Stack";
import BoardWall from "@/components/background/BoardWall";
import NoiseOverlay from "@/components/background/NoiseOverlay";
import SiteFooter from "@/components/layout/SiteFooter";
import TopNav from "@/components/navigation/TopNav";
import ScrollEffects from "@/components/visuals/ScrollEffects";

export default function Home() {
  return (
    <main className="page-shell relative min-h-screen text-foreground">
      <BoardWall />
      <NoiseOverlay />
      <TopNav />
      <ScrollEffects />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Stack />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  );
}
