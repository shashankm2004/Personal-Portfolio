import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Internships } from "@/components/sections/Internships";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ThemeToggle />
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <Education />
        <Projects />
        <Skills />
        <Internships />
        <Contact />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
