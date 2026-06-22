import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Expertise from "@/sections/Expertise";
import Hero from "@/sections/Hero";
import Stack from "@/sections/Stack";
import ScrollEffects from "@/components/ScrollEffects";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <main className="page-shell text-zinc-100">
      <TopNav />
      <ScrollEffects />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Stack />
      <Contact />
      <footer className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-8 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500 md:px-8">
        <span>{"\u00A9"} 2026 Wisnu Rafi</span>
        <span className="hidden sm:inline">End of issue 01</span>
      </footer>
    </main>
  );
}
