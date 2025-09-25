import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import xcelLogo from "@/assets/xcelcorp_logo.jpeg";
const internshipData = [
  
  {
    company: "Xcel Corp",
    role: "Web Development Intern",
    duration: "04-Nov-2024 - 04-Dec-2024",
    location: "Bengaluru",
    description: "Worked on full-stack web development projects, building responsive frontends using React.js and Bootstrap, and integrating backend services using Python and MySQL. Gained hands-on experience with version control, debugging, and collaborative development workflows.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Python", "MySQL", "Git"],
    logo: xcelLogo
  }
];

  
export const Internships = () => {
  return (
    <section className="py-20 relative" id="internships">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional internships and hands-on experience in the industry
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {internshipData.map((internship, index) => (
            <motion.div
              key={internship.company}
              className="glass rounded-2xl p-6 lg:p-8 glow-accent group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl overflow-hidden glass glow-primary">
                    <img 
                      src={internship.logo}
                      alt={internship.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        {internship.role}
                      </h3>
                      <p className="text-lg font-semibold text-foreground mb-1">
                        {internship.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {internship.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-2 lg:mt-0">
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="h-5 w-5" />
                        <span className="font-medium">Internship</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {internship.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};