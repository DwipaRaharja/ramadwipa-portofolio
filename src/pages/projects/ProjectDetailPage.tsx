import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DecorativeGlow from "../../components/ui/DecorativeGlow";
import ProjectHero from "../../components/project/ProjectHero";
import ProjectHighlights from "../../components/project/ProjectHighlights";
import ProjectOverview from "../../components/project/ProjectOverview";
import ProjectTechStack from "../../components/project/ProjectTechStack";
import { getProjectBySlug } from "../../data/projects";
import NotFoundPage from "../NotFoundPage";

const ProjectDetailPage = () => {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} Project — Ramadwipa`;
    }
  }, [project]);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <main className="relative isolate overflow-hidden">
      <DecorativeGlow
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.35, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
          delay: 0.2,
        }}
        className="top-28 -right-24 -z-10 size-64 sm:right-0 lg:size-80"
      />
      <DecorativeGlow
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
        }}
        className="top-240 -left-24 -z-10 size-64 sm:left-0 lg:size-80"
      />
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectHighlights project={project} />
      <ProjectTechStack project={project} />
    </main>
  );
};

export default ProjectDetailPage;
