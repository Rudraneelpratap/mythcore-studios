import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Books from "../components/Books";
import Mythcore from "../components/Mythcore";
import MythcoreJr from "../components/MythcoreJr";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement"; // ✅ Correct name
// import ScrollingText from "../components/ScrollingText";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white font-sans scroll-smooth">
      {/* <ScrollingText /> 👈 Add this wherever you want the loop text */}
      <Navbar />
      <Hero />
      <Announcement />
      <About />
      <Books />
      <Mythcore />
      <MythcoreJr />
      <Contact />
      <Footer />
    </main>
  );
}
