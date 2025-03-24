import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { illustrations } from "@/app/data/il";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-3 gap-4 p-4 mx-24">
        {illustrations.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            caminho={project.caminho}
            texto={project.texto}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}
