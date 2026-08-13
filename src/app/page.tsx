import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Expertise from "@/sections/Expertise";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Stack from "@/sections/Stack";
import BoardWall from "@/components/background/BoardWall";
import NoiseOverlay from "@/components/background/NoiseOverlay";
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
      <footer className="border-t border-border bg-background/80">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-8 md:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {"\u00A9"} 2026 Wisnu Rafi
          </span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:inline">
            End of transmission
          </span>
        </div>
      </footer>
    </main>
  );
}
