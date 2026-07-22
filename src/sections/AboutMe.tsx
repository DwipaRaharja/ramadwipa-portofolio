import techStack from "../data/techStack";
import { motion } from "motion/react";

function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="relative min-h-screen overflow-hidden px-10 pt-24 pb-2 sm:px-28 sm:pb-24 lg:pb-5"
    >
      {/* Layout content */}
      <div className="flex flex-col items-center gap-24 lg:flex-row">
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
            I'm a Full Stack Developer passionate about building scalable
            solutions. I design relational databases, develop clean backend
            logic, and create intuitive user interfaces while focusing on DRY,
            maintainable code.
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
}

export default AboutMe;
