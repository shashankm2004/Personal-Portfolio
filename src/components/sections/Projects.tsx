import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Filter } from "lucide-react";
import credit from "@/assets/credit.jpg";
import recipe from "@/assets/a1.gif";
import chatbot from "@/assets/chatbot.webp";
import face from "@/assets/face.jpeg";
import raitha from "@/assets/raitha.jpeg";
const projectsData = [
  
  {
    title: "Raitha Bandhava – Farmer's Companion",
    description: "Full-stack farming management system helping farmers with crop planning, weather forecasting, market price analysis, and expense tracking. Includes AI-based crop disease detection and optional IoT irrigation control.",
    category: "Web",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "APIs", "IoT"],
    image:raitha,
     github: "#",
    live: "#"
  },
  
  {
    title: "Face and Eye Detection using PHP",
    description: "Computer vision project detecting faces and eyes in real-time using PHP and OpenCV for security and surveillance applications.",
    category: "AI",
    tech: ["PHP", "OpenCV", "Computer Vision"],
    image: face,
    github: "#",
    live: "#"
  },
  {
    title: "Recipe Finder Project",
    description: "Web application suggesting recipes based on available ingredients, built with HTML, CSS, and JavaScript for interactive user experience.",
    category: "Web",
    tech: ["HTML", "CSS", "JavaScript"],
    image: recipe,
    github: "https://github.com/shashankm2004/Recipe-finder-using-HTML-CSS-JS",
    live: "#"
  },
  {
    title: "AI Chatbot for Ordering Food",
    description: "AI-powered chatbot that takes food orders, provides menu suggestions, and tracks orders in real-time for enhanced customer engagement.",
    category: "AI",
    tech: ["Python", "Chatbot", "NLP", "AI"],
    image: chatbot,
    github: "https://github.com/shashankm2004/AI-ChatBot-for-ordering-Food",
    live: "#"
  },
  {
    title: "Credit Card Fraud Detection",
    description: "Machine learning project detecting fraudulent credit card transactions using supervised learning models and anomaly detection techniques.",
    category: "ML",
    tech: ["Python", "Pandas", "Scikit-learn", "ML Algorithms"],
    image:credit,
    github: "https://github.com/shashankm2004/Credit-Card-Fraud-Detection",
    live: "#"
  },
  

];

const categories = ["All", "Web", "AI", "ML", "Others"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`glass ${selectedCategory === category ? "glow-primary" : ""}`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${selectedCategory}`}
              className="group glass rounded-2xl overflow-hidden glow-accent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div><div className="flex gap-3">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button size="sm" variant="outline" className="w-full">
      <Github className="mr-2 h-4 w-4" />
      Code
    </Button>
  </a>
                
                {/* <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button> */}
                  <Button size="sm" className="flex-1 gradient-border">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};