export type ProjectDetail = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  details: ProjectDetail[];
  technologies: string[];
  highlights: string[];
  challenge: string;
  solution: string;
  outcome: string;
  testimonial: {
    quote: string;
    author: string;
  };
};
