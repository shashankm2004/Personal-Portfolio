import { motion } from "framer-motion";
import { Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/TypingText";
import shashankPhoto from "@/assets/shashank-photo.jpg";

export const Hero = () => {
  const roles = [
    "Computer Science Student",
    "Aspiring Web Developer", 
    "UI/UX Designer",
    "Problem Solver"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-bounce-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "} <br></br>
              <span className="gradient-text">Shashank M</span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl lg:text-3xl text-muted-foreground mb-8 h-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TypingText texts={roles} className="gradient-text font-semibold" />
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about creating innovative web solutions and bringing ideas to life through code and design.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
            <Button
  className="gradient-border glow-primary group"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // PDF in public folder
    link.download = "Shashank_Resume.pdf";
    link.click();
  }}
>
  <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
  Download Resume
</Button>




              {/* <Button className="gradient-border glow-primary group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button> */}
              <Button variant="outline" className="glass"
               onClick={() => window.location.href = "mailto:shashankm3602@gmail.com"}>
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            ><a href="https://github.com/shashankm2004">
              <Button variant="ghost" size="icon" className="glass glow-accent">
                <Github className="h-5 w-5" />
                
              </Button></a>
              <a href="https://www.linkedin.com/in/shashank-m-a839b2257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEP%2FSt%2Fj5QbmuJpc874JT7A%3D%3D">
              <Button variant="ghost" size="icon" className="glass glow-accent">
                <Linkedin className="h-5 w-5" />
              </Button></a>

              <a href="https://www.instagram.com/_._.shashank_._?igsh=MTdyaHR6YXVqd2hkNw==">
    <Button variant="ghost" size="icon" className="glass glow-accent">
      <Instagram className="h-5 w-5" />
    </Button>
  </a>
            </motion.div>
          </motion.div>
          
          {/* Photo */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative p-2">
              <div className="absolute inset-0 gradient-border glow-primary animate-pulse rounded-full"></div>
              <img 
                src={shashankPhoto}
                alt="Shashank M"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};