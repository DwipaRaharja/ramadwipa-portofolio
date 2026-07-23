import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

type ProjectTechStackProps = {
  project: Project;
};

const ProjectTechStack = ({ project }: ProjectTechStackProps) => (
  <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 150, damping: 22 }}
      className="border-primary mx-auto w-full max-w-7xl rounded-3xl border-2 bg-white/35 p-6 sm:p-10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-primary text-sm font-bold tracking-widest uppercase">
            Technology stack
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Tools behind {project.title}
          </h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
            className="mt-7 flex flex-wrap gap-3"
            aria-label="Technology stack"
          >
            {project.technologies.map((technology) => (
              <motion.li
                key={technology}
                variants={{
                  hidden: { opacity: 0, y: 16, scale: 0.92 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="border-primary text-primary rounded-full border-2 bg-white px-4 py-2 text-sm font-bold"
              >
                {technology}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/#contact"
            className="bg-primary focus-visible:outline-primary inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Discuss a project
            <ArrowRightIcon className="size-5" weight="bold" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default ProjectTechStack;
