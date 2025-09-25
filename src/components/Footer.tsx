import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Social Links
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="glass glow-accent">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="glass glow-accent">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="glass glow-accent">
              <Mail className="h-5 w-5" />
            </Button>
          </div> */}
          
          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Built  by 
              <span className="gradient-text font-semibold">Shashank M</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shashank M. All rights reserved.
            </p>
          </div>
          
          {/* Tech Stack */}
          
        </motion.div>
      </div>
    </footer>
  );
};