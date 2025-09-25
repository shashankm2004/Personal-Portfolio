import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educationData = [
  
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Design",
    institution: "K S Institute of Technology, Bengaluru",
    year: "2022 – 2026 (Pursuing)",
    cgpa: "9.05",
    description: "Pursuing a degree in Computer Science and Design with a focus on web development, AI integration, and full-stack applications."
  },
  {
    degree: "Pre-University (PUC)",
    field: "PCMB",
    institution: "Soundarya Composite P U College, Bengaluru",
    year: "2020 – 2022",
    cgpa: "94%",
    description: "Focused on Physics, Chemistry, Mathematics, and Biology, building a strong foundation for engineering studies."
  },
  {
    degree: "SSLC – Board Exam",
    // field: "General Studies",
    institution: "New Cambridge English School, Bengaluru",
    year: "2019 – 2020",
    cgpa: "97%",
    description: "Completed secondary education with a strong emphasis on core subjects and overall academic excellence."
  }
];


export const Education = () => {
  return (
    <section className="py-20 relative" id="education">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic journey that shaped my technical and design expertise
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="relative flex items-start gap-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full glass glow-primary flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                {/* Content card */}
                <motion.div 
                  className="flex-1 glass rounded-2xl p-6 glow-accent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-medium text-foreground">
                        {edu.field}
                      </p>
                      <p className="text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent">
                        <Award className="h-4 w-4" />
                        <span className="font-bold">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};