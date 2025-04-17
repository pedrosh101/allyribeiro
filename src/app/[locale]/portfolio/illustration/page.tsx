"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Masonry from "react-masonry-css";
import { illustrations } from "@/app/data/il";
import React from "react";

export default function About() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col lg:mx-28 md:p-8 p-4 text-clr1 font-imfell">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {illustrations
            .filter((project) => project.category == "Illustration")
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
      </main>
      <Footer />
    </>
  );
}
