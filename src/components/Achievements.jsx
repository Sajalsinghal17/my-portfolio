import { motion } from "framer-motion";
import { ModernCard } from "./ui/ModernCard";
import { FadeInText, BlurText } from "./animations/TextReveal";
import { RevealOnScroll } from "./animations/ScrollAnimations";
import { TiltCard, HoverGlow, MagneticButton } from "./animations/InteractiveElements";
import { Button } from "./ui/button";
import { Award, Calendar, Trophy, ExternalLink, Sparkles } from "lucide-react";
import pic1 from '/assets/certificates/SRM.jpeg';
import pic2 from '/assets/certificates/Hackathon.jpg';    
import certificate1 from '/assets/certificates/Oracle.jpg';
import certificate2 from '/assets/certificates/IIITDM.jpg';

const achievements = [
    {
        title: "Internship Completion at IIITDM Jabalpur",
        issuer: "HAM Lab, IIITDM Jabalpur",
        date: "15/06/2025 to 30/07/2025",
        description: "Completed a Summer Internship in the Hybrid Additive Manufacturing Lab at PDPM Indian Institute of Information Technology, Design and Manufacturing, Jabalpur, under the guidance of Dr. Manu Srivastava. During this internship, I participated in research activities related to Hybrid Additive Manufacturing and gained hands-on experience in CAD modeling and slicing for 3D printing, operating and maintaining additive manufacturing equipment, integrating subtractive and additive processes, designing circuits for automated systems, and analyzing and documenting experimental results.",
        category: "Research",
        type: "Achievement",
        img: certificate2,
        link: "", 
        featured: true
    },
    {
        title: "Oracle Certified Proffesional (Certificate of Recognition)",
        issuer: "Oracle University",
        date: "September 2025",
        description: "I earned the Oracle Cloud Infrastructure 2025 Certified Developer Professional certification from Oracle University, officially recognizing my skills in developing, deploying, and managing applications on Oracle Cloud Infrastructure. This certification, demonstrates my proficiency in OCI services, cloud development practices, and the ability to work effectively within Oracle's cloud ecosystem.",
        category: "Web Development",
        type: "Achievement",
        img: certificate1,
        link: "", 
        featured: false
    },
    {
        title: "GEEK VERSE Hackathon Participation",
        organization: "Geek Room USAR",
        date: "May 2025",
        description: "During the GeekVerse Hackathon, I presented RepuLens, an AI-driven reputation intelligence platform designed to help companies and consumers understand how public sentiment influences real-world outcomes. The project addressed the growing challenge of misinformation and rapid sentiment shifts across platforms, offering features like real-time monitoring, controversy detection, sentiment–stock correlation, and dual dashboards for businesses and users.",
        category: "Web Development",
        type: "Participation",
        img: pic2, 
        link: "", 
    },
    {
        title: "AICTE-VAANI sponsored National Workshop",
        organization: "SRM Institute of Science and Technology, Ghaziabad",
        date: "September 2024",
        description: "Attended a national workshop on the fabrication of semiconductor devices and circuits, where I gained a deeper understanding of semiconductor fundamentals, fabrication workflows, device behavior, and practical challenges in modern electronics manufacturing. The workshop offered valuable exposure to real-world processes involved in chip development, strengthening my foundation in electronic device design and aligning with my coursework in microelectronics and fabrication technologies.",
        category: "Semiconductors",
        type: "Participation",
        img: pic1, 
        link: "", 
    }
];

const AchievementCard = ({ achievement, index }) => {
    const getIcon = () => {
        switch (achievement.type) {
            case "Winner":
                return <Trophy className="w-6 h-6" />;
            case "Achievement":
                return <Award className="w-6 h-6" />;
            default:
                return <Award className="w-6 h-6" />;
        }
    };

    const getIconColor = () => {
        switch (achievement.type) {
            case "Winner":
                return "text-yellow-500";
            case "Achievement":
                return "text-blue-500";
            default:
                return "text-gray-500";
        }
    };

    const getCategoryColor = () => {
        switch (achievement.category) {
            case "Web Development":
                return "bg-gradient-to-r from-blue-600 to-cyan-600";
            case "Research":
                return "bg-gradient-to-r from-blue-600 to-cyan-600";
            case "Semiconductors":
                return "bg-gradient-to-r from-blue-600 to-cyan-600";
            default:
                return "bg-gradient-to-r from-blue-600 to-cyan-600";
        }
    };

    return (
        <RevealOnScroll delay={index * 0.1} direction="up">
            <TiltCard maxTilt={5}>
                <HoverGlow>
                    <ModernCard 
                        variant="glass" 
                        className={`h-full group cursor-pointer overflow-hidden relative ${
                            achievement.featured ? "md:col-span-2 lg:col-span-2" : ""
                        }`}
                    >
                        {/* Featured Badge */}
                        {achievement.featured && (
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
                            {/* Achievement Icon/Image */}
                            <motion.div
                                className="relative mb-6 overflow-hidden rounded-xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl overflow-hidden flex items-center justify-center">
                                    {achievement.img ? (
                                        <img
                                            src={achievement.img}
                                            alt={achievement.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <motion.div
                                            className={`${getIconColor()} group-hover:scale-110 transition-transform duration-300`}
                                            whileHover={{ rotate: 10 }}
                                        >
                                            <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-xl">
                                                {getIcon()}
                                            </div>
                                        </motion.div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                
                                {/* Overlay Button */}
                                {achievement.link && (
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={false}
                                    >
                                        <MagneticButton>
                                            <Button
                                                size="sm"
                                                className="bg-white/90 text-gray-900 hover:bg-white shadow-lg backdrop-blur-sm"
                                                onClick={() => window.open(achievement.link, '_blank')}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                View Certificate
                                            </Button>
                                        </MagneticButton>
                                    </motion.div>
                                )}
                            </motion.div>

                            {/* Achievement Info */}
                            <div className="space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <motion.h3 
                                        className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        {achievement.title}
                                    </motion.h3>
                                    
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor()} text-white shadow-sm whitespace-nowrap`}>
                                        {achievement.category}
                                    </span>
                                </div>

                                {/* Issuer & Date */}
                                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center gap-1">
                                        <Award className="w-4 h-4" />
                                        <span className="font-medium">{achievement.issuer || achievement.organization}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{achievement.date}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {achievement.description}
                                </p>

                                {/* Achievement Type Badge */}
                                <div className="flex items-center gap-2">
                                    <motion.div
                                        className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className={`${getIconColor()}`}>
                                            {getIcon()}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            {achievement.type}
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Action Button */}
                                {achievement.link && (
                                    <div className="pt-2">
                                        <MagneticButton className="w-full">
                                            <Button
                                                className="w-full group/btn bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
                                                onClick={() => window.open(achievement.link, '_blank')}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                View Certificate
                                            </Button>
                                        </MagneticButton>
                                    </div>
                                )}
                            </div>
                        </div>
                    </ModernCard>
                </HoverGlow>
            </TiltCard>
        </RevealOnScroll>
    );
};

const Achievements = () => {
    return (
        <section
            id="achievements"
            className="relative p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
                                ACHIEVEMENTS
                            </BlurText>
                        </motion.h1>
                    </FadeInText>
                    
                    <FadeInText delay={0.3}>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Recognized achievements and professional accomplishments
                        </p>
                    </FadeInText>
                </div>

                <motion.div
                    className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, staggerChildren: 0.1 }}
                >
                    {achievements.map((achievement, index) => (
                        <AchievementCard 
                            key={index} 
                            achievement={achievement} 
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;