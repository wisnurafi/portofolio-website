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
    <main className="text-zinc-100">
      <TopNav />
      <ScrollEffects />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Stack />
      <Contact />
      <footer className="px-6 md:px-8 py-8 text-center text-zinc-500 text-sm border-t border-white/10">
        {"\u00A9"} 2026 Wisnu Rafi
      </footer>
    </main>
  );
}
