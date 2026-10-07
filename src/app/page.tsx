import Loader from "@/components/loader";
import Topbar from "@/components/topbar";
import StatusBar from "@/components/statusbar";
import Hero from "@/components/hero";
import Profile from "@/components/profile";
import Changelog from "@/components/changelog";
import Expertise from "@/components/expertise";
import Work from "@/components/work";
import Stack from "@/components/stack";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Topbar />
      <Hero />
      <main className="wrap panels">
        <Profile />
        <Changelog />
        <Expertise />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
      <StatusBar />
    </>
  );
}
