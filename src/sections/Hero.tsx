import { motion } from "motion/react";
import { HandWavingIcon, PlayCircleIcon } from "@phosphor-icons/react";
import DecorativeGlow from "../components/ui/DecorativeGlow";
import SocialLinks from "../components/ui/SocialLinks";
import SkillItems from "../components/ui/SkillItems";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative mb-10 scroll-mt-24 overflow-hidden px-4 pt-24 pb-2 sm:px-6 sm:pb-24 md:min-h-screen lg:px-10 lg:pb-5"
      >
        {/* decoration circle */}
        <DecorativeGlow
          className="top-36 -right-24 size-48 sm:right-0 sm:size-56 lg:top-40 lg:right-50 lg:size-64"
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
            delay: 1.1,
          }}
        />
        <DecorativeGlow
          className="top-120 -left-14 size-48 sm:left-0 sm:size-56 lg:top-105 lg:left-64 lg:size-64"
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
            delay: 0.9,
          }}
        />

        {/* main content about me */}
        <motion.div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              delay: 0.2,
            }}
            className="bg-primary w-fit rounded-full px-5 py-1.5 sm:px-6"
          >
            <span className="flex items-center justify-center gap-2 text-base font-bold text-white sm:text-lg">
              <HandWavingIcon width={24} height={24} weight="fill" />
              Hello
            </span>
          </motion.div>
          <div className="relative z-10 mt-3 text-center sm:mt-4">
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
                delay: 0.35,
              }}
              className="lg:text-shadow-heading text-3xl leading-tight font-bold text-shadow-lg sm:text-4xl md:text-5xl lg:text-7xl"
            >
              I'm <span className="text-primary">Ramadwipa,</span>
              <br />
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.6,
                }}
                className="text-4xl leading-tight font-medium sm:text-5xl md:text-6xl lg:text-8xl"
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>
          </div>

          {/* container information about me */}
          <div className="relative z-20 mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 items-center justify-items-center gap-8 sm:gap-10 lg:-mt-4 lg:grid-cols-[1fr_auto_1fr] lg:justify-items-stretch lg:gap-8">
            {/* first content (description about me)*/}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
                delay: 0.5,
              }}
              className="order-2 w-full max-w-sm text-center lg:order-1 lg:max-w-xs lg:justify-self-end lg:text-left"
            >
              <span className="text-primary block h-10 text-5xl leading-none sm:text-6xl">
                &ldquo;
              </span>
              <p className="text-text-main text-justify leading-relaxed">
                Focused on problem-solving and architecting scalable systems. I
                build robust full-stack applications designed for long-term
                growth.
              </p>
            </motion.div>

            {/* second content (circle)*/}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
                delay: 0.65,
              }}
              className="order-1 size-[clamp(14rem,65vw,20rem)] overflow-hidden rounded-full border-2 border-gray-300 bg-[linear-gradient(180deg,#F0F4FE_30%,#3C63C5_100%)] lg:order-2 lg:size-92"
            />

            {/* third content (social media)*/}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
                delay: 0.8,
              }}
              className="order-3 max-w-full justify-self-center lg:justify-self-start"
            >
              <SocialLinks className="bg-white/12" />
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:mt-6">
            <motion.a
              href="#projects"
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 0.96,
              }}
              whileTap={{
                scale: 0.93,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.9,
              }}
              className="border-primary text-primary hover:bg-primary flex w-fit cursor-pointer items-center gap-2 rounded-full border-3 px-4 py-2 text-sm font-bold transition-colors duration-300 hover:text-white sm:px-5 sm:text-base"
            >
              My Project
              <PlayCircleIcon className="size-7" weight="fill" />
            </motion.a>
            <motion.a
              href="#about"
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 0.96,
              }}
              whileTap={{
                scale: 0.93,
                transition: {
                  type: "spring",
                  stiffness: 1000,
                  damping: 20,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 1,
              }}
              className="border-primary text-primary hover:bg-primary flex w-fit cursor-pointer items-center gap-2 rounded-full border-3 px-4 py-2 text-sm font-bold transition-colors duration-300 hover:text-white sm:px-5 sm:text-base"
            >
              About Me
              <PlayCircleIcon className="size-7" weight="fill" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      <div className="bg-primary overflow-hidden py-5">
        <motion.div
          className="flex w-max"
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <SkillItems />
          <SkillItems hidden />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
