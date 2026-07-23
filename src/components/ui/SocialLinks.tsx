import { motion } from "motion/react";
import type { Icon } from "@phosphor-icons/react";
import socialLinks from "../../data/socialLinks";

type AnimatedSocialIconProps = {
  Icon: Icon;
};

const AnimatedSocialIcon = ({ Icon }: AnimatedSocialIconProps) => (
  <span className="relative block size-7 lg:size-8">
    <motion.span
      className="absolute inset-0 block"
      variants={{
        rest: { opacity: 1, scale: 1 },
        active: { opacity: 0, scale: 0.85 },
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Icon className="size-full fill-current" weight="bold" />
    </motion.span>

    <motion.span
      className="absolute inset-0 block"
      variants={{
        rest: { opacity: 0, scale: 0.85 },
        active: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Icon className="size-full fill-current" weight="fill" />
    </motion.span>
  </span>
);

type SocialLinksProps = {
  className?: string;
};

const SocialLinks = ({ className = "" }: SocialLinksProps) => (
  <ul
    aria-label="Social media links"
    className={`border-primary text-primary flex items-center justify-center gap-2 rounded-full border-3 bg-white px-3 py-2 sm:gap-4 sm:px-5 sm:py-3 ${className}`}
  >
    {socialLinks.map((link) => (
      <li key={link.ariaLabel}>
        {link.href ? (
          <motion.a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.ariaLabel}
            initial="rest"
            animate="rest"
            whileHover="active"
            whileFocus="active"
            whileTap="active"
            className="focus-visible:outline-primary block rounded-full focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <AnimatedSocialIcon Icon={link.icon} />
          </motion.a>
        ) : (
          <span
            aria-label={`${link.ariaLabel} profile is not configured yet`}
            title={`${link.ariaLabel} profile coming soon`}
            className="block cursor-not-allowed opacity-45"
          >
            <link.icon
              className="size-7 fill-current lg:size-8"
              weight="bold"
            />
          </span>
        )}
      </li>
    ))}
  </ul>
);

export default SocialLinks;
