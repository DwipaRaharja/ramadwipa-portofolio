import {
  FacebookLogoIcon,
  GithubLogo,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TiktokLogoIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

export type SocialLinkItem = {
  icon: Icon;
  href?: string;
  ariaLabel: string;
};

const socialLinks: SocialLinkItem[] = [
  {
    icon: LinkedinLogoIcon,
    href: "https://www.linkedin.com/in/rama-dwipa-a81423412/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: FacebookLogoIcon,
    href: "https://www.facebook.com/ramaraharja.ramaraharja/",
    ariaLabel: "Facebook",
  },
  {
    icon: InstagramLogoIcon,
    href: "https://www.instagram.com/ramadwipa16/",
    ariaLabel: "Instagram",
  },
  {
    icon: TiktokLogoIcon,
    href: "https://www.tiktok.com/@ramawipa",
    ariaLabel: "TikTok",
  },
  {
    icon: GithubLogo,
    href: "https://github.com/DwipaRaharja",
    ariaLabel: "GitHub",
  },
];

export default socialLinks;
