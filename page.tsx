import { Providers } from "@/components/Providers";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Competencies } from "@/components/Competencies";
import { Technology } from "@/components/Technology";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <Providers>
      <Loader />
      <Navbar />
      <main id="main" className="relative overflow-x-clip">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Competencies />
        <Technology />
        <Education />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
