import { ArrowLeftIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

type ProjectHeroProps = {
  project: Project;
};

const ProjectHero = ({ project }: ProjectHeroProps) => (
  <section className="px-4 pt-32 pb-16 sm:px-6 lg:px-10 lg:pb-24">
    <div className="mx-auto w-full max-w-7xl">
      <Link
        to="/#projects"
        className="text-primary focus-visible:outline-primary inline-flex items-center gap-2 rounded-full font-semibold focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <ArrowLeftIcon className="size-5" weight="bold" />
        Back to projects
      </Link>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 150, damping: 22 }}
        >
          <span className="border-primary text-primary inline-flex rounded-full border-2 bg-white/40 px-4 py-2 text-sm font-bold">
            {project.category}
          </span>
          <h1 className="mt-5 text-4xl font-bold text-shadow-lg sm:text-5xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="text-text-main mt-5 text-base leading-8 sm:text-lg">
            {project.summary}
          </p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2">
            {project.details.map((detail) => (
              <div
                key={detail.label}
                className="border-primary/30 rounded-2xl border bg-white/35 p-4"
              >
                <dt className="text-text-muted text-xs font-bold tracking-wide uppercase">
                  {detail.label}
                </dt>
                <dd className="text-text-main mt-1 text-sm font-semibold">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 22,
            delay: 0.12,
          }}
          className="border-primary overflow-hidden rounded-3xl border-2 bg-white shadow-[0_12px_40px_rgba(60,99,197,0.16)]"
        >
          <img
            src={project.coverImage}
            alt={project.coverImageAlt}
            className="aspect-568/326 size-full object-cover object-top"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProjectHero;
