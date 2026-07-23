import type { FormEvent } from "react";
import {
  PaperPlaneTiltIcon,
  WhatsappLogoIcon,
  MailboxIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import DecorativeGlow from "../components/ui/DecorativeGlow";

const emailAddress = "ramadwipa168@gmail.com";
const whatsappNumber = "62877767444538";

const inputClassName =
  "w-full rounded-2xl border-2 border-primary bg-transparent px-4 py-3 text-sm text-text-main outline-none transition-shadow placeholder:text-text-muted/60 focus:shadow-[0_0_0_3px_rgba(60,99,197,0.14)] sm:text-base";

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") ?? "");
    const lastName = String(formData.get("lastName") ?? "");
    const senderEmail = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "Portfolio inquiry");
    const message = String(formData.get("message") ?? "");
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${senderEmail}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 lg:px-10"
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
        className="top-24 right-1/4 -z-10 size-40 -translate-x-1/2 opacity-75 sm:size-56"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 160, damping: 22 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-black sm:text-base">
            Have a business idea, need a modern website, or want to build a
            custom web application? I&apos;d love to hear about your project and
            help turn your ideas into reality.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ type: "spring", stiffness: 150, damping: 22 }}
          className="border-primary mt-12 grid grid-cols-1 gap-x-5 gap-y-6 rounded-3xl border-2 bg-white/15 p-5 shadow-[0_8px_30px_rgba(60,99,197,0.08)] sm:grid-cols-2 sm:p-7"
        >
          <label className="text-primary block font-semibold">
            First Name
            <input
              className={`${inputClassName} mt-2`}
              type="text"
              name="firstName"
              placeholder="Input first name..."
              autoComplete="given-name"
              required
            />
          </label>

          <label className="text-primary block font-semibold">
            Last Name
            <input
              className={`${inputClassName} mt-2`}
              type="text"
              name="lastName"
              placeholder="Input last name..."
              autoComplete="family-name"
              required
            />
          </label>

          <label className="text-primary block font-semibold">
            Your Email
            <input
              className={`${inputClassName} mt-2`}
              type="email"
              name="email"
              placeholder="Input your email..."
              autoComplete="email"
              required
            />
          </label>

          <label className="text-primary block font-semibold">
            Your Subject
            <input
              className={`${inputClassName} mt-2`}
              type="text"
              name="subject"
              placeholder="Input subject..."
              required
            />
          </label>

          <label className="text-primary block font-semibold sm:col-span-2">
            Your Message
            <textarea
              className={`${inputClassName} mt-2 min-h-48 resize-y sm:min-h-60`}
              name="message"
              placeholder="Input message..."
              required
            />
          </label>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-primary hover:bg-primary/90 focus-visible:outline-primary flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 font-bold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-span-2"
          >
            Send To Me
            <PaperPlaneTiltIcon className="size-5" weight="fill" />
          </motion.button>
        </motion.form>

        <div className="text-primary/70 my-8 flex items-center justify-center gap-3">
          <span className="bg-primary/40 h-px w-8" />
          <span className="font-medium">OR</span>
          <span className="bg-primary/40 h-px w-8" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2"
        >
          <motion.a
            href={`mailto:${emailAddress}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
            className="border-primary text-primary focus-visible:outline-primary flex items-center gap-4 rounded-2xl border-2 bg-white/20 px-5 py-4 transition-colors hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <MailboxIcon className="size-10 shrink-0" weight="fill" />
            <span className="min-w-0">
              <strong className="block text-lg">My Email</strong>
              <span className="block truncate text-xs sm:text-sm">
                {emailAddress}
              </span>
            </span>
          </motion.a>

          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -3 }}
            className="border-primary text-primary focus-visible:outline-primary flex items-center gap-4 rounded-2xl border-2 bg-white/20 px-5 py-4 transition-colors hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <WhatsappLogoIcon className="size-10 shrink-0" weight="fill" />
            <span>
              <strong className="block text-lg">My WhatsApp</strong>
              <span className="block text-xs sm:text-sm">
                +62 8777-6744-4538
              </span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
