"use client";

import ProjectCard from "@/components/ProjectCard";
import { illustrations } from "@/app/data/il";
import Masonry from "react-masonry-css";

export default function HomePage() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <div className="md:w-5/6 md:p-0 p-4">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {illustrations
            .filter((project) => project.category !== "Comics")
            .map((project) => (
              <ProjectCard
                key={project.id}
                slug={project.slug}
                id={project.id}
                title={project.title}
                caminho={project.caminho}
                texto={project.texto}
              />
            ))}
        </Masonry>
      </div>
    </>
  );
}
