import { motion } from "framer-motion";
import { ModernCard } from "./ui/ModernCard";
import { FadeInText, BlurText } from "./animations/TextReveal";
import { RevealOnScroll } from "./animations/ScrollAnimations";
import { TiltCard, HoverGlow, MagneticButton } from "./animations/InteractiveElements";
import { Button } from "./ui/button";
import megaBlogs from '/assets/projects/megaBlogs.png'; 
import repulens from '/assets/projects/repulens.png'; 
import personal_portfolio from '/assets/projects/portfolio.png';  
import { Github, ExternalLink, Code, Sparkles } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiGooglechrome,
  SiChartdotjs,
  SiFirebase,
  SiGo,
  SiMysql,
  SiDocker,
  SiAppwrite,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
  SiKubernetes
} from "react-icons/si";


const projects = [
{
  title: "MegaBlogs",
  description: "I built a full-stack blog platform where users can securely sign up, create and edit posts, format content with rich editing tools, upload media, and access their workspace seamlessly across devices—all within a responsive, user-friendly interface.",
  img: megaBlogs,
  link: "https://mega-blogs-one.vercel.app/",
  github_link: "https://github.com/Sajalsinghal17/megaBlogs",
  tech: [
    { icon: SiReact, name: "React", color: "text-blue-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
    { icon: SiRedux, name: "Redux", color: "text-purple-500" },
    { icon: SiAppwrite, name: "Appwrite", color: "text-orange-500" },
    { icon: SiVite, name: "Vite", color: "text-purple-500" },
  ],
  category: "Full Stack",
  featured: true
},
{
  title: "Portfolio Website",
  description: "Personal portfolio website created with React and Tailwind CSS featuring modern animations and interactive elements",
  img: personal_portfolio, 
  link: "https://abhinavphi.vercel.app",
  github_link: "https://github.com/abhinav-phi/personal-website",
  tech: [
    { icon: SiReact, name: "React", color: "text-cyan-500" },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
    { icon: SiVite, name: "Vite", color: "text-purple-500" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" }
  ],
  category: "Web Development"
},

  {
  title: "RepuLens",
  description: "Built RepuLens, an AI-powered platform for real-time sentiment monitoring, controversy detection, and reputation analysis across major social platforms.",
  img: repulens,
  link: "https://repu-lens-c7r3.vercel.app/", 
  github_link: "https://github.com/Sajalsinghal17/RepuLens-1",
  tech: [
    { icon: SiReact, name: "React", color: "text-blue-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: SiTailwindcss, name: "TailwindCSS", color: "text-teal-500" },
    { icon: SiExpress, name: "Express.js", color: "text-yellow-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-600" },
    { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-500" },
    { icon: SiDocker, name: "Docker", color: "text-blue-500" },
    { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-500" }
  ],
  category: "Full Stack",
},
];

const ProjectCard = ({ project, index }) => {
  return (
    <RevealOnScroll delay={index * 0.1} direction="up">
      <TiltCard maxTilt={5}>
        <HoverGlow>
          <ModernCard 
            variant="glass" 
            className={`h-full group cursor-pointer overflow-hidden relative ${
              project.featured ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            {/* Featured Badge */}
            {project.featured && (
              <motion.div
                className="absolute top-4 right-4 z-20"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Featured
                </div>
              </motion.div>
            )}

            {/* Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />

            <div className="relative z-10 p-6">
              {/* Project Image */}
              <motion.div
                className="relative mb-6 overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=${project.title}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Overlay Buttons */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  {project.link && (
                    <MagneticButton>
                      <Button
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white shadow-lg backdrop-blur-sm"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </MagneticButton>
                  )}
                  
                  {project.github_link && (
                    <MagneticButton>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-gray-900/90 text-white border-gray-700 hover:bg-gray-800 shadow-lg backdrop-blur-sm"
                        onClick={() => window.open(project.github_link, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </MagneticButton>
                  )}
                </motion.div>
              </motion.div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <motion.h3 
                    className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-sm whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/30"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      style={{ transitionDelay: `${techIndex * 0.1}s` }}
                    >
                      <tech.icon className={`w-4 h-4 ${tech.color}`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.github_link && (
  <MagneticButton className="flex-1">
    <Button
      variant="outline"
      className="w-full group/btn border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors text-black dark:text-white hover:text-black dark:hover:text-white"
      onClick={() => window.open(project.github_link, '_blank')}
    >
      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
      View Code
    </Button>
  </MagneticButton>
)}

                  
                  {project.link && (
                    <MagneticButton className="flex-1">
                      <Button
                        className="w-full group/btn bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        Live Demo
                      </Button>
                    </MagneticButton>
                  )}
                </div>
              </div>
            </div>
          </ModernCard>
        </HoverGlow>
      </TiltCard>
    </RevealOnScroll>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <FadeInText>
            <motion.h1 
              className="text-6xl max-sm:text-4xl font-extrabold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                PROJECTS
              </BlurText>
            </motion.h1>
          </FadeInText>
          
          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              A showcase of my creative work and technical expertise
            </p>
          </FadeInText>

          <FadeInText delay={0.5}>
            <motion.div
              className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">Scroll to explore</span>
            </motion.div>
          </FadeInText>
        </div>

        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <MagneticButton>
  <Button
    size="lg"
    className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group/btn"
    onClick={() => window.open('https://github.com/Sajalsinghal17?tab=repositories&q=&type=public&language=&sort=', '_blank')}
  >
    <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
    View All Projects on GitHub
  </Button>
</MagneticButton>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;