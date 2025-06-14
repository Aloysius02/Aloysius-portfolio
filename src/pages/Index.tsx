import {
  useEffect
} from "react";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import {
  ThemeProvider
} from "@/components/ThemeProvider";

const Index = () => {
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]')) as HTMLAnchorElement[];

    const handleClick = (e: Event, anchor: HTMLAnchorElement) => {
      e.preventDefault();

      const targetId = anchor.getAttribute("href");
      if (!targetId) return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement || !(targetElement instanceof HTMLElement)) return;

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    };

    const listeners: {
      anchor: HTMLAnchorElement; handler: (e: Event) => void
    }[] = [];

    anchors.forEach((anchor) => {
      const handler = (e: Event) => handleClick(e, anchor);
      anchor.addEventListener("click", handler);
      listeners.push({
        anchor, handler
      });
    });

    return () => {
      listeners.forEach(({
        anchor, handler
      }) => {
        anchor.removeEventListener("click", handler);
      });
    };
  },
    []);

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground w-screen overflow-hidden">
        <Header />
        <main className="w-screen overflow-hidden">
          <Hero />
          <About />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Index;