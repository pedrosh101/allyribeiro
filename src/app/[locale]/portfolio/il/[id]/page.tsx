import { illustrations } from "@/app/data/il";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ locale: string; id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id, locale } = await params;
  const project = illustrations.find((item) => item.id.toString() === id);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-5xl p-4">


          <h1 className="text-4xl font-semibold font-imfell text-gray-800 mt-6 mb-4">
            {project.title}
          </h1>

          <p className="text-sm text-gray-600 font-consola mb-8">
            {locale === "en" ? project.text : project.texto}
          </p>

          {project.gallery && project.gallery.length > 0 && (
            <div className="flex flex-col gap-6">
              {project.gallery.map((image, index) => {
                const imageObj =
                  typeof image === "string"
                    ? { src: image, caption: "" }
                    : image;

                return (
                  <div key={index} className="w-full">
                    <Image
                      src={imageObj.src}
                      alt={imageObj.caption || `Imagem ${index + 1}`}
                      width={1200}
                      height={800}
                      className="rounded-lg shadow-md object-cover w-full h-auto"
                    />
                    {/* {imageObj.caption && (
                      <p className="text-sm text-gray-600 mt-2 text-center">
                        {imageObj.caption}
                      </p>
                    )} */}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
