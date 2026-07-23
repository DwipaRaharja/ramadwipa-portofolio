import {
  BrowserIcon,
  ChartLineUpIcon,
  CheckCircleIcon,
  DatabaseIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

const services = [
  {
    title: "Business Website",
    description:
      "A responsive, professional website that explains your business clearly and turns visitors into potential customers.",
    icon: BrowserIcon,
    benefits: [
      "Mobile-friendly interface",
      "Clear call-to-action",
      "Fast and easy to navigate",
    ],
  },
  {
    title: "Custom Web Application",
    description:
      "A web-based system tailored to your workflow, helping your team manage data and daily operations more efficiently.",
    icon: DatabaseIcon,
    benefits: [
      "Built around your workflow",
      "Organized business data",
      "Scalable for future needs",
    ],
  },
  {
    title: "Dashboard & Internal Tools",
    description:
      "Practical dashboards and internal tools that make important information easier to monitor and act on.",
    icon: ChartLineUpIcon,
    benefits: [
      "Clear operational overview",
      "Less repetitive manual work",
      "Better decision support",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 160, damping: 22 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            How I Can Help
          </p>
          <h2 className="mt-3 text-3xl font-bold text-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Digital Solutions for Your Business
          </h2>
          <p className="text-text-muted mt-5 leading-relaxed sm:text-lg">
            I build practical web solutions that help businesses look
            professional, simplify their work, and prepare for growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
              whileHover={{ y: -6 }}
              className="border-primary/35 group hover:border-primary rounded-3xl border-2 bg-white/45 p-6 shadow-[0_12px_35px_rgba(60,99,197,0.06)] transition-colors sm:p-7"
            >
              <div className="bg-primary/10 text-primary group-hover:bg-primary flex size-14 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
                <service.icon className="size-8" weight="bold" />
              </div>
              <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                {service.title}
              </h3>
              <p className="text-text-muted mt-3 leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm font-medium"
                  >
                    <CheckCircleIcon
                      className="text-primary mt-0.5 size-5 shrink-0"
                      weight="fill"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
