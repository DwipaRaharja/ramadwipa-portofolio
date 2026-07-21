import { motion } from "motion/react";
import { HandWavingIcon, PlayCircleIcon } from "@phosphor-icons/react";
import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";
import socialLink from "../data/socialLink";
import DecorativeGlow from "../components/ui/DecorativeGlow";
import SkillItems from "../data/skillItems";

const IconWrapper = ({ Icon }: { Icon: ComponentType<IconProps> }) => (
  <>
    <span className="relative block size-7 lg:size-8">
      {/* Ikon bold */}
      <motion.span
        className="absolute inset-0 block"
        variants={{
          rest: {
            opacity: 1,
            scale: 1,
          },
          hover: {
            opacity: 0,
            scale: 0.85,
          },
          focus: {
            opacity: 0,
            scale: 0.85,
          },
          tap: {
            opacity: 0,
            scale: 0.85,
          },
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <Icon className="size-full fill-current" weight="bold" />
      </motion.span>

      {/* Ikon fill */}
      <motion.span
        className="absolute inset-0 block"
        variants={{
          rest: {
            opacity: 0,
            scale: 0.85,
          },
          hover: {
            opacity: 1,
            scale: 1,
          },
          focus: {
            opacity: 1,
            scale: 1,
          },
          tap: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <Icon className="size-full fill-current" weight="fill" />
      </motion.span>
    </span>
  </>
);

const Hero = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-4 pt-24 pb-2 sm:px-6 sm:pb-24 lg:pb-5">
        {/* decoration circle */}
        <DecorativeGlow
          className="top-36 -right-24 size-48 sm:right-0 sm:size-56 lg:top-40 lg:right-50 lg:size-64"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
            delay: 1.3,
          }}
        />
        <DecorativeGlow
          className="top-120 -left-14 size-48 sm:left-0 sm:size-56 lg:top-105 lg:left-64 lg:size-64"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 12,
            delay: 1,
          }}
        />

        {/* main content about me */}
        <motion.div className="mx-auto flex w-full max-w-7xl flex-col items-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 12,
              delay: 0.8,
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
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
                delay: 0.8,
              }}
              className="lg:text-shadow-heading text-3xl leading-tight font-bold text-shadow-lg sm:text-4xl md:text-5xl lg:text-7xl"
            >
              I'm <span className="text-primary">Ramadwipa,</span>
              <br />
              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 12,
                  delay: 0.8,
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
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
                delay: 0.8,
              }}
              className="order-2 w-full max-w-sm text-center lg:order-1 lg:max-w-xs lg:justify-self-end lg:text-left"
            >
              <span className="text-primary block h-10 text-5xl leading-none sm:text-6xl">
                &ldquo;
              </span>
              <p className="text-text-main leading-relaxed">
                Focused on problem-solving and architecting scalable systems. I
                build robust full-stack applications designed for long-term
                growth.
              </p>
            </motion.div>

            {/* second content (circle)*/}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
                delay: 0.8,
              }}
              className="order-1 size-[clamp(14rem,65vw,20rem)] overflow-hidden rounded-full border-2 border-gray-300 bg-[linear-gradient(180deg,#F0F4FE_30%,#3C63C5_100%)] lg:order-2 lg:size-92"
            />

            {/* third content (social media)*/}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
                delay: 0.8,
              }}
              className="order-3 max-w-full justify-self-center lg:justify-self-start"
            >
              <ul className="border-primary text-primary flex items-center justify-center gap-2 rounded-full border-3 bg-white px-3 py-2 sm:gap-4 sm:px-5 sm:py-3">
                {socialLink.map((link) => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      aria-label={link.ariaLabel}
                      initial="rest"
                      animate="rest"
                      whileHover="hover"
                      whileFocus="focus"
                      whileTap="tap"
                    >
                      <IconWrapper Icon={link.icon} />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:mt-6">
            <motion.button
              whileHover={{
                opacity: 1,
                scale: 0.95,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="border-primary text-primary hover:bg-primary flex w-fit cursor-pointer items-center gap-2 rounded-full border-3 px-4 py-2 text-sm font-bold transition-colors duration-300 hover:text-white sm:px-5 sm:text-base"
            >
              My Project
              <PlayCircleIcon className="size-7" weight="fill" />
            </motion.button>
            <motion.button
              whileHover={{
                opacity: 1,
                scale: 0.95,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="border-primary text-primary hover:bg-primary flex w-fit cursor-pointer items-center gap-2 rounded-full border-3 px-4 py-2 text-sm font-bold transition-colors duration-300 hover:text-white sm:px-5 sm:text-base"
            >
              About Me
              <PlayCircleIcon className="size-7" weight="fill" />
            </motion.button>
          </div>
        </motion.div>
      </section>

      <div className="bg-primary overflow-hidden py-5">
        <motion.div
          className="flex w-max"
          initial={{ x: "-50%" }}
          animate={{ x: "-0%" }}
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
