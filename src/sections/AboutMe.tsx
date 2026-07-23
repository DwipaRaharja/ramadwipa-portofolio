import techStack from "../data/techStack";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen scroll-mt-24 overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pb-24 lg:px-10 lg:pb-20"
    >
      {/* Layout content */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-24">
        <div className="flex flex-col items-center justify-center gap-10">
          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              delay: 0.7,
            }}
            className="text-3xl font-bold text-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              delay: 0.9,
            }}
            className="order-1 size-[clamp(14rem,65vw,20rem)] overflow-hidden rounded-full border-2 border-gray-300 bg-[linear-gradient(180deg,#F0F4FE_30%,#3C63C5_100%)] lg:order-2 lg:size-92"
          ></motion.div>
        </div>
        <div className="flex flex-col">
          <motion.p
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              delay: 1,
            }}
            className="text-justify text-xl"
          >
            I&apos;m a Full Stack Developer who enjoys turning business
            challenges into clear, reliable web solutions. I work across user
            interfaces, backend logic, and databases, so each part of the
            product supports the same practical goal.
          </motion.p>

          {/* My tech stack */}
          <div className="mt-8">
            <motion.p
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
                delay: 0.9,
              }}
              className="flex text-2xl font-bold"
            >
              &lt;My <span className="text-primary">TechStack="</span>
            </motion.p>
            <motion.div
              className="mt-4 flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delayChildren: 1, staggerChildren: 0.07 }}
            >
              {techStack.map((tech) => (
                <motion.span
                  key={tech.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="border-primary text-primary flex items-center gap-2 rounded-full border-2 bg-white px-4 py-2 text-sm font-semibold"
                >
                  {tech.name}
                  <tech.icon className="text-primary size-7" />
                </motion.span>
              ))}
            </motion.div>
            <motion.p
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
                delay: 0.9,
              }}
              className="text-primary mt-3 text-2xl font-bold"
            >
              " /&gt;
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
