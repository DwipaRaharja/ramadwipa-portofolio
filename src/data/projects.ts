import autoHubDashboard from "../assets/autohub-dashboard.png";
import type { Project } from "../types/project";

const projects: Project[] = [
  {
    slug: "autohub",
    title: "AutoHub",
    category: "Inventory Management System",
    summary:
      "A full-stack system that helps a used-car business manage inventory, sales, revenue, and operational data from one dashboard.",
    description:
      "AutoHub turns day-to-day showroom operations into a clear digital workflow. The application centralizes vehicle records and gives the business a practical view of inventory health, sales activity, and revenue performance.",
    coverImage: autoHubDashboard,
    coverImageAlt: "AutoHub used-car inventory dashboard",
    details: [
      { label: "Industry", value: "Used-car dealership" },
      { label: "Role", value: "Full-stack development" },
      { label: "Product", value: "Business web application" },
    ],
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Inertia.js",
      "GitHub",
    ],
    highlights: [
      "Centralized vehicle inventory and brand management",
      "Sales and monthly revenue monitoring",
      "Dashboard summaries for faster operational decisions",
      "Structured workflows that reduce repetitive manual work",
    ],
    challenge:
      "Vehicle inventory and sales information can become fragmented when it is managed through separate records. This makes stock visibility, revenue tracking, and day-to-day coordination harder for the showroom team.",
    solution:
      "AutoHub brings the operational data into one application with focused inventory, sales, and dashboard modules. The interface prioritizes essential information so the team can understand current business activity quickly.",
    outcome:
      "The resulting workflow gives the business clearer operational visibility, fewer manual errors, and a more consistent foundation for managing future growth.",
    testimonial: {
      quote:
        "AutoHub has significantly improved how we manage vehicle inventory and operational data. The system simplifies daily workflows, reduces manual errors, and provides better visibility into our showroom operations.",
      author: "Business Owner, Telaga Berlian Motor",
    },
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export default projects;
