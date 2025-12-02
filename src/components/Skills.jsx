import { motion } from "framer-motion";
import React from "react";
import { ModernCard } from "./ui/ModernCard";
import { FadeInText, BlurText } from "./animations/TextReveal";
import { RevealOnScroll, FloatingElement } from "./animations/ScrollAnimations";
import { TiltCard, HoverGlow } from "./animations/InteractiveElements";


import cppIcon from "/assets/skills/cpp.png";
import pythonIcon from "/assets/skills/python.png";
import javascriptIcon from "/assets/skills/javascript.png";
import typescriptIcon from "/assets/skills/typescript.png";
import goIcon from "/assets/skills/go.png";
import htmlIcon from "/assets/skills/html.png";
import cssIcon from "/assets/skills/css.png";
import reactIcon from "/assets/skills/react.png";
import tailwindIcon from "/assets/skills/tailwindcss.png";
import nodejsIcon from "/assets/skills/nodejs.png";
import apiIcon from "/assets/skills/rest_api.png";
import mongodbIcon from "/assets/skills/mongodb.png";
import mysqlIcon from "/assets/skills/mysql.png";
import firebaseIcon from "/assets/skills/firebase.png";
import gitIcon from "/assets/skills/git.png";
import githubIcon from "/assets/skills/github.png";
import postmanIcon from "/assets/skills/postman.png";
import dockerIcon from "/assets/skills/docker.png";
import githubActionsIcon from "/assets/skills/github_actions.png";
import vscodeIcon from "/assets/skills/vs_code.png";
import vercelIcon from "/assets/skills/vercel.png";
import netlifyIcon from "/assets/skills/netlify.png";
import renderIcon from "/assets/skills/render.png";
import figmaIcon from "/assets/skills/figma.png";
import chromeIcon from "/assets/skills/chrome_devtools.png";
import markdownIcon from "/assets/skills/markdown.png";
import numpyIcon from "/assets/skills/numpy.png";
import pandasIcon from "/assets/skills/pandas.png";
import matplotlibIcon from "/assets/skills/matplotlib.png";
import pytorchIcon from "/assets/skills/pytorch.png";
import nextIcon from "/assets/skills/next.png";
import expressIcon from "/assets/skills/express.png";
import postgresqlIcon from "/assets/skills/postgresql.png";
import canvaIcon from "/assets/skills/canva.png";

const skills = [
  // Languages
  { name: "C++", img: cppIcon, category: "Languages", level: 92, color: "from-blue-600 to-purple-600" },
  { name: "Python", img: pythonIcon, category: "Languages", level: 82, color: "from-yellow-500 to-blue-500" },
  { name: "JavaScript", img: javascriptIcon, category: "Languages", level: 95, color: "from-yellow-400 to-orange-500" },
  { name: "TypeScript", img: typescriptIcon, category: "Languages", level: 70, color: "from-blue-500 to-cyan-500" },

  // Web Technologies
  { name: "HTML5", img: htmlIcon, category: "Web Technologies", level: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS3", img: cssIcon, category: "Web Technologies", level: 92, color: "from-blue-500 to-cyan-500" },
  { name: "React.js", img: reactIcon, category: "Web Technologies", level: 97, color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind CSS", img: tailwindIcon, category: "Web Technologies", level: 90, color: "from-teal-400 to-cyan-500" },
  { name: "Node.js", img: nodejsIcon, category: "Web Technologies", level: 88, color: "from-green-500 to-emerald-600" },
  { name: "Express.js", img: expressIcon, category: "Web Technologies", level: 85, color: "from-yellow-500 to-red-500" },
  { name: "Next.js", img: nextIcon, category: "Web Technologies", level: 80, color: "from-purple-500 to-pink-500" },

  // Databases
  { name: "MongoDB", img: mongodbIcon, category: "Databases", level: 92, color: "from-green-600 to-green-800" },
  { name: "PostgreSQL", img: postgresqlIcon, category: "Databases", level: 82, color: "from-cyan-600 to-blue-500" },
  { name: "Firebase", img: firebaseIcon, category: "Databases", level: 78, color: "from-yellow-500 to-red-500" },

  // Tools & Platforms
  { name: "Git", img: gitIcon, category: "Tools & Platforms", level: 88, color: "from-orange-500 to-red-600" },
  { name: "GitHub", img: githubIcon, category: "Tools & Platforms", level: 90, color: "from-gray-700 to-black" },
  { name: "Postman", img: postmanIcon, category: "Tools & Platforms", level: 85, color: "from-orange-500 to-red-500" },
  { name: "Docker", img: dockerIcon, category: "Tools & Platforms", level: 70, color: "from-blue-500 to-cyan-500" },
  { name: "GitHub Actions", img: githubActionsIcon, category: "Tools & Platforms", level: 75, color: "from-gray-600 to-blue-600" },
  { name: "VS Code", img: vscodeIcon, category: "Tools & Platforms", level: 95, color: "from-blue-600 to-cyan-500" },

  // Deployment
  { name: "Vercel", img: vercelIcon, category: "Deployment", level: 88, color: "from-gray-900 to-black" },
  { name: "Netlify", img: netlifyIcon, category: "Deployment", level: 85, color: "from-teal-400 to-cyan-500" },
  { name: "Render", img: renderIcon, category: "Deployment", level: 80, color: "from-purple-500 to-pink-500" },
  { name: "Firebase Hosting", img: firebaseIcon, category: "Deployment", level: 82, color: "from-yellow-500 to-red-500" },

  // Design
  { name: "Figma", img: figmaIcon, category: "Design", level: 78, color: "from-purple-500 to-pink-500" },
  { name: "Canva", img: canvaIcon, category: "Design", level: 95, color: "from-blue-600 to-purple-500" },

  // Others
  // { name: "Firebase Auth", img: firebaseIcon, category: "Others", level: 85, color: "from-yellow-500 to-red-500" },
  // { name: "Chrome DevTools", img: chromeIcon, category: "Others", level: 88, color: "from-red-500 to-yellow-500" },
  // { name: "Markdown", img: markdownIcon, category: "Others", level: 90, color: "from-gray-600 to-gray-800" },

  // // ML & Data
  // { name: "NumPy", img: numpyIcon, category: "ML & Data", level: 80, color: "from-blue-600 to-cyan-600" },
  // { name: "Pandas", img: pandasIcon, category: "ML & Data", level: 78, color: "from-purple-600 to-pink-600" },
  // { name: "Matplotlib", img: matplotlibIcon, category: "ML & Data", level: 75, color: "from-blue-500 to-green-500" },
  // { name: "PyTorch", img: pytorchIcon, category: "ML & Data", level: 70, color: "from-orange-500 to-red-500" }
];

const categories = [
  "Languages",
  "Web Technologies", 
  "Databases",
  "Tools & Platforms",
  "Deployment",
  "Design",
  "Others",
  "ML & Data"
];

const SkillCard = ({ skill, index }) => {
  return (
    <RevealOnScroll delay={index * 0.05} direction="up">
      <TiltCard maxTilt={8}>
        <HoverGlow>
          <ModernCard 
            variant="glass" 
            className="p-6 h-full group cursor-pointer overflow-hidden relative"
          >
            {/* Background Gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              initial={false}
            />

            <div className="relative z-10">
              <FloatingElement intensity={5} duration={3}>
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-sm border border-white/10" />
                  <div className="relative w-full h-full p-3">
                    <img 
                      src={skill.img} 
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/80x80/4F46E5/FFFFFF?text=${skill.name.charAt(0)}`;
                      }}
                    />
                  </div>
                </motion.div>
              </FloatingElement>

              <motion.h3 
                className="text-lg font-bold text-center mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.h3>

              {/* Skill Level Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
                <motion.div
                  className="text-center text-sm font-medium text-gray-600 dark:text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {skill.level}%
                </motion.div>
              </div>
            </div>
          </ModernCard>
        </HoverGlow>
      </TiltCard>
    </RevealOnScroll>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Languages");
  
  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <section 
      id="skills"
      className="relative p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5 min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
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
                SKILLS
              </BlurText>
            </motion.h1>
          </FadeInText>
          
          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Technologies and tools I use to bring ideas to life
            </p>
          </FadeInText>

          {/* Category Filter */}
          <motion.div 
            className="flex justify-center gap-2 mb-12 flex-wrap max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white/10 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SkillCard skill={skill} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Count Display */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredSkills.length} skills in {selectedCategory}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
