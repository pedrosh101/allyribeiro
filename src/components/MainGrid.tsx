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
      <div className="w-5/6">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {illustrations.map((project) => (
            <ProjectCard
              key={project.id}
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
