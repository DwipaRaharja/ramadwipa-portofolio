import {
  CodeIcon,
  LightbulbIcon,
  PencilRulerIcon,
  RocketLaunchIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We discuss your business, current challenges, users, and the result you want to achieve.",
    icon: LightbulbIcon,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I turn the requirements into a clear solution, scope, and development direction.",
    icon: PencilRulerIcon,
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop the solution and keep the progress understandable throughout the project.",
    icon: CodeIcon,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "The finished product is reviewed, refined, and prepared for real-world use.",
    icon: RocketLaunchIcon,
  },
];

const WorkProcess = () => {
  return (
    <section
      id="process"
      className="bg-primary relative scroll-mt-24 overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-10"
    >
      <div className="absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-28 -left-24 size-72 rounded-full bg-white/10 blur-2xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 160, damping: 22 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
            Work Process
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            A Clear Process From Idea to Launch
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-white/75 sm:text-lg">
            You always know what is being built, why it matters, and what comes
            next.
          </p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
              className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <step.icon className="size-9" weight="bold" />
                <span className="text-3xl font-bold text-white/25">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
};

export default WorkProcess;
