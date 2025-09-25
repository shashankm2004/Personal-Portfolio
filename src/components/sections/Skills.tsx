import { motion } from "framer-motion";
import { Code, Palette, Database, Globe, Smartphone, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
    color: "text-blue-400"
  },
  {
    title: "Backend Development", 
    icon: Database,
    skills: ["Node.js & Express.js", "Python","MongoDB & SQL", "REST APIs","Java", "C",],
    color: "text-green-400"
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing", "Design Systems"],
    color: "text-pink-400"
  },
 
  
  
];

export const Skills = () => {
  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and creative abilities I've developed throughout my journey
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6 glow-accent group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl glass mr-4 group-hover:glow-primary transition-all duration-300`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold group-hover:gradient-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center p-3 rounded-lg bg-secondary/30 group-hover:bg-secondary/50 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-3 animate-pulse"></div>
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Floating skill icons animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 rounded-full glass glow-primary opacity-20"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * 800 + 200
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * 800 + 200,
                rotate: 360
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};