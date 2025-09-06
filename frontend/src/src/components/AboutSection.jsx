import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4 md:px-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        About{" "}
        <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
          Us
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left side (bio) */}
        <motion.div
          className="space-y-6 p-8 rounded-[32px] bg-white/5 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-500/30"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={1}
        >
          <h3 className="text-2xl font-semibold text-purple-300">
            Passionate Web Developer & Tech Creator
          </h3>

          <p className="text-gray-300 leading-relaxed">
            With over 5 years of experience in web development, I specialize in
            creating responsive, accessible, and performant web applications
            using modern technologies.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I'm passionate about creating elegant solutions to complex problems,
            and I'm constantly learning new technologies and techniques to stay
            at the forefront of the ever-evolving web landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href=""
              className="px-6 py-2 rounded-full border border-purple-400 text-purple-400 hover:bg-purple-500/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right side (skills cards) */}
        <motion.div
          className="grid grid-cols-1 gap-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          custom={2}
        >
          {[
            {
              icon: <Code className="h-6 w-6 text-purple-400" />,
              title: "Web Development",
              desc: "Creating responsive websites and web applications with modern frameworks.",
            },
            {
              icon: <User className="h-6 w-6 text-purple-400" />,
              title: "UI/UX Design",
              desc: "Designing intuitive user interfaces and seamless user experiences.",
            },
            {
              icon: <Briefcase className="h-6 w-6 text-purple-400" />,
              title: "Project Management",
              desc: "Leading projects from conception to completion with agile methodologies.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-[24px] bg-white/5 backdrop-blur-xl border border-purple-500/20 shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 transition card-hover"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 3}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-purple-200">
                    {item.title}
                  </h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
