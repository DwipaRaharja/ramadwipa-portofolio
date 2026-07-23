import { CheckCircleIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import type { Project } from "../../types/project";

type ProjectHighlightsProps = {
  project: Project;
};

const ProjectHighlights = ({ project }: ProjectHighlightsProps) => (
  <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
    <div className="mx-auto w-full max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 150, damping: 22 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-primary text-sm font-bold tracking-widest uppercase">
          Key capabilities
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
          A focused workflow for the showroom team
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {project.highlights.map((highlight, index) => (
          <motion.article
            key={highlight}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 22,
              delay: index * 0.06,
            }}
            className="border-primary/50 flex gap-4 rounded-3xl border-2 bg-white/35 p-6"
          >
            <CheckCircleIcon
              className="text-primary mt-0.5 size-7 shrink-0"
              weight="fill"
            />
            <p className="text-text-main text-lg leading-8 font-semibold">
              {highlight}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <motion.article
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 150, damping: 22 }}
          className="bg-primary rounded-3xl p-7 text-white sm:p-9"
        >
          <p className="text-sm font-bold tracking-widest text-white/70 uppercase">
            Outcome
          </p>
          <p className="mt-4 text-xl leading-9 font-semibold">
            {project.outcome}
          </p>
        </motion.article>

        <motion.blockquote
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 22,
            delay: 0.08,
          }}
          className="border-primary rounded-3xl border-2 bg-white/35 p-7 sm:p-9"
        >
          <p className="text-text-main text-lg leading-8">
            &ldquo;{project.testimonial.quote}&rdquo;
          </p>
          <footer className="text-primary mt-6 font-bold">
            — {project.testimonial.author}
          </footer>
        </motion.blockquote>
      </div>
    </div>
  </section>
);

export default ProjectHighlights;
