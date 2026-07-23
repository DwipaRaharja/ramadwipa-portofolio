import { motion } from "motion/react";
import type { Project } from "../../types/project";

type ProjectOverviewProps = {
  project: Project;
};

const ProjectOverview = ({ project }: ProjectOverviewProps) => (
  <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
    <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 150, damping: 22 }}
      >
        <p className="text-primary text-sm font-bold tracking-widest uppercase">
          Project overview
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Built around real business needs
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 22,
          delay: 0.1,
        }}
        className="space-y-8"
      >
        <p className="text-text-main text-lg leading-9">
          {project.description}
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          <article className="border-primary rounded-3xl border-2 bg-white/35 p-6">
            <h3 className="text-primary text-xl font-bold">The challenge</h3>
            <p className="text-text-main mt-3 leading-7">{project.challenge}</p>
          </article>
          <article className="border-primary rounded-3xl border-2 bg-white/35 p-6">
            <h3 className="text-primary text-xl font-bold">The solution</h3>
            <p className="text-text-main mt-3 leading-7">{project.solution}</p>
          </article>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectOverview;
