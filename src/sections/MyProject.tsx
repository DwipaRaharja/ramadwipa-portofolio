import { motion } from "motion/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import {
  SiGithub,
  SiInertia,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import DecorativeGlow from "../components/ui/DecorativeGlow";
import projects from "../data/projects";

const MotionLink = motion.create(Link);
const featuredProject = projects[0];

const projectTech = [
  { name: "Laravel", icon: SiLaravel },
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Inertia.js", icon: SiInertia },
  { name: "GitHub", icon: SiGithub },
];

const DashboardPreview = () => {
  return (
    <div className="aspect-568/326 w-full overflow-hidden rounded-2xl border border-slate-900 bg-white">
      <img
        src={featuredProject.coverImage}
        alt={featuredProject.coverImageAlt}
        className="size-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
};

const MyProject = () => {
  return (
    <section
      id="projects"
      className="relative isolate min-h-screen scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 lg:px-10"
    >
      <DecorativeGlow
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
        className="top-24 right-1/4 -z-10 size-40 -translate-x-1/2 opacity-35 sm:size-56"
      />
      <div className="mx-auto w-full max-w-7xl">
        <motion.div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-5 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              delay: 0.2,
            }}
            className="text-3xl font-bold text-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Featured Client Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
              delay: 0.35,
            }}
            className="text-sm leading-relaxed text-black sm:text-base lg:text-lg"
          >
            See how a business challenge was turned into a practical system that
            supports daily operations.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1.12fr_0.95fr] lg:gap-8">
          <motion.article
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
            className="border-primary flex h-full flex-col rounded-3xl border-2 bg-white/35 p-4 sm:p-5 lg:p-6"
          >
            <DashboardPreview />

            <div className="mt-5 flex flex-1 flex-col sm:mt-6">
              <h3 className="text-text-main text-3xl font-bold sm:text-4xl">
                {featuredProject.title}
              </h3>
              <p className="text-text-main mt-2 text-sm leading-relaxed sm:text-base">
                {featuredProject.summary}
              </p>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <ul
                  className="flex flex-wrap items-center gap-3 text-slate-950"
                  aria-label="AutoHub technology stack"
                >
                  {projectTech.map((tech) => (
                    <li key={tech.name} title={tech.name}>
                      <span className="sr-only">{tech.name}</span>
                      <tech.icon
                        className="size-6 sm:size-7"
                        aria-hidden="true"
                      />
                    </li>
                  ))}
                </ul>
                <MotionLink
                  to={`/projects/${featuredProject.slug}`}
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
                  See Details
                  <ArrowRightIcon className="size-5" weight="bold" />
                </MotionLink>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 22,
              delay: 0.1,
            }}
            className="border-primary flex h-full flex-col rounded-3xl border-2 bg-white/35 p-6 sm:p-8"
          >
            <h3 className="text-text-main text-lg font-bold sm:text-xl">
              Testimonial From Owner Telaga Berlian Motor
            </h3>

            <blockquote className="mt-8 flex flex-1 flex-col justify-between sm:mt-10">
              <p className="text-text-main text-base leading-8 sm:text-lg sm:leading-9 lg:text-lg lg:leading-10">
                &ldquo;AutoHub has significantly improved how we manage vehicle
                inventory and operational data. The system simplifies daily
                workflows, reduces manual errors, and provides better visibility
                into our showroom operations. Rama consistently approached
                development with a strong understanding of our business needs
                and delivered a practical solution that truly supports our
                team.&rdquo;
              </p>

              <footer className="text-text-main mt-10 text-right text-sm font-bold sm:text-base lg:text-lg">
                -- Business Owner Telaga Berlian Motor
              </footer>
            </blockquote>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
