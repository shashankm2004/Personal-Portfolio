import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, passion, and vision
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass rounded-3xl p-8 lg:p-12 glow-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Hello! I'm <span className="gradient-text font-semibold">Shashank M</span>, a passionate Computer Science and Design student with a deep love for creating innovative web solutions. My journey in technology began with curiosity and has evolved into a mission to build meaningful digital experiences.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I specialize in <span className="text-primary font-semibold">modern web development</span> with expertise in React, TypeScript, and cutting-edge design principles. My unique background combining computer science fundamentals with design thinking allows me to approach problems from both technical and user-centric perspectives.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects, or sketching new interface ideas. I believe that the best solutions come from the intersection of <span className="text-accent font-semibold">creativity and logic</span>.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                My goal is to leverage technology to solve real-world problems and create digital experiences that are not only functional but also delightful and accessible to everyone.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};