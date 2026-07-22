import type { ComponentType, SVGProps } from "react";
import {
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiLaravel,
  SiGithub,
  SiInertia,
  SiTypescript,
  SiJavascript,
} from "@icons-pack/react-simple-icons";

export interface TechItem {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const techStack: TechItem[] = [
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "GitHub", icon: SiGithub },
  { name: "Inertia JS", icon: SiInertia },
  { name: "Laravel", icon: SiLaravel },
];

export default techStack;
