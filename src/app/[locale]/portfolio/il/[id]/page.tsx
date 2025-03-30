import { illustrations } from "@/app/data/il";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      <div className="flex flex-col md:flex-row items-center justify-center p-6">
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

            <p className="text-base text-gray-600">
              {locale === "en" ? project.text : project.texto}
            </p>

            {/* Carousel */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-6">
                <Carousel>
                  <CarouselContent>
                    {project.gallery.map((image, index) => {
                      const imageObj =
                        typeof image === "string"
                          ? { src: image, caption: "" }
                          : image;
                      return (
                        <CarouselItem
                          key={index}
                          className="flex flex-col items-center"
                        >
                          <Dialog>
                            <DialogTrigger>
                              <Image
                                src={imageObj.src}
                                alt={imageObj.caption || `Imagem ${index + 1}`}
                                width={500}
                                height={500}
                                className="rounded-lg shadow-md object-cover cursor-pointer"
                              />
                            </DialogTrigger>
                            <DialogContent className="max-w-[50vw] max-h-[90vh] flex flex-col items-center bg-white/10 text-white">
                              <Image
                                src={imageObj.src}
                                alt={imageObj.caption || `Imagem ${index + 1}`}
                                width={800}
                                height={800}
                                className="rounded-lg object-contain max-w-full max-h-[80vh]"
                              />
                              <DialogTitle>{imageObj.caption}</DialogTitle>
                            </DialogContent>
                          </Dialog>
                          <p className="text-sm text-gray-600 mt-2">
                            {imageObj.caption}
                          </p>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
