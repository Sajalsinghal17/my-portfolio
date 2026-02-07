import { motion } from "framer-motion";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiGmail,
  SiDiscord,
} from "react-icons/si";
import { ModernCard } from "./ui/ModernCard";
import { FadeInText, BlurText } from "./animations/TextReveal";
import { RevealOnScroll } from "./animations/ScrollAnimations";
import { TiltCard, MagneticButton } from "./animations/InteractiveElements";
import { Button } from "./ui/button";
import { Download, Star } from "lucide-react";

// Import your X logo
import xLogo from '/assets/logo/x.png';

const socialLinks = [
  {
    icon: SiGithub,
    href: "https://github.com/Sajalsinghal17",
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "from-gray-700 to-black"
  },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/sajal-singhal-169b4b277/",
    label: "LinkedIn",
    color: "hover:text-blue-600",
    bgColor: "from-blue-600 to-blue-800"
  },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/sajalsinghal_/",
    label: "Instagram",
    color: "hover:text-pink-600",
    bgColor: "from-pink-500 to-purple-600"
  },
  {
    icon: null, 
    href: "https://x.com/SajalSingh4165",
    label: "X",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "from-gray-700 to-black",
    customIcon: xLogo 
  },
  {
    icon: SiDiscord,
    href: "https://discordapp.com/users/747863878159040513",
    label: "Discord",
    color: "hover:text-indigo-600",
    bgColor: "from-indigo-500 to-purple-600"
  },
  {
    icon: SiGmail,
    href: "mailto:sajalsinghal172005@gmail.com",
    label: "Email",
    color: "hover:text-red-600",
    bgColor: "from-red-500 to-red-700"
  }
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins'] max-sm:p-2 min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
        {/* Header - Moved down with padding */}
        <div className="text-center mb-16 pt-12">
          <FadeInText>
            <motion.h1 
              className="text-6xl max-sm:text-4xl font-extrabold mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <BlurText className="bg-gradient-to-r from-[#00040f] to-gray-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                GET IN TOUCH
              </BlurText>
            </motion.h1>
          </FadeInText>
          
          <FadeInText delay={0.3}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Let's collaborate and build something amazing together
            </p>
          </FadeInText>
        </div>

        {/* Main Contact Card - Simplified */}
        <RevealOnScroll direction="up" className="max-w-4xl mx-auto">
          <TiltCard maxTilt={2}>
            <ModernCard 
              variant="glass" 
              className="overflow-hidden"
              glow={true}
            >
              <div className="p-8 max-sm:p-6 text-center">
                {/* Social Links - Centralized */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex gap-4 justify-center flex-wrap">
                    {socialLinks.map((social, index) => (
                      <MagneticButton key={social.label}>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative w-14 h-14 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${social.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                          
                          {/* Custom X icon for Twitter */}
                          {social.customIcon ? (
                            <img
                              src={social.customIcon}
                              alt="X logo"
                              className="w-7 h-7 relative z-10 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                            />
                          ) : (
                            <social.icon className="w-7 h-7 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10" />
                          )}
                        </motion.a>
                      </MagneticButton>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-6 max-sm:flex-col justify-center max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <MagneticButton className="flex-1">
                    <Button 
                      className="w-full group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                      onClick={() => window.open("https://drive.google.com/file/d/1k60uAxcSMf0e2b2H8AxzGP6SaDx-egSR/view?usp=sharing", "_blank")}
                    >
                      <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                      Resume
                    </Button>
                  </MagneticButton>
                  
                  <MagneticButton className="flex-1">
                    <Button 
                      variant="outline"
                      className="w-full group border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                      onClick={() => window.open("https://github.com/Sajalsinghal17/my-portfolio", "_blank")}
                    >
                      <Star className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      Star Project
                    </Button>
                  </MagneticButton>
                </motion.div>
              </div>
            </ModernCard>
          </TiltCard>
        </RevealOnScroll>

        {/* Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p className="text-[#00040f] dark:text-slate-300 text-center capitalize tracking-widest max-sm:text-sm p-2 flex items-center justify-center gap-2">
            made with 
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💙
            </motion.span>
            by Sajal Singhal
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
