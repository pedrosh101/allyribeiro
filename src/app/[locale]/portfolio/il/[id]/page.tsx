import { illustrations } from "@/app/data/il";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = illustrations.find((item) => item.id.toString() === id);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center p-6 ">
        <div className="flex flex-col md:flex-row w-5/6">
          <div className="w-full md:w-1/2 p-4">
            <Image
              src={project.caminho}
              alt={project.title}
              width={600}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-4xl font-semibold font-consola text-gray-800 mb-2">
              {project.title}
            </h1>
            <p className="text-lg text-gray-800 font-semibold mb-4">{project.category}</p>
            <p className="text-lg text-gray-600 mb-4">{project.texto}</p>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
