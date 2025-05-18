import { illustrations } from "@/app/data/il";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, locale } = await params;
  const project = illustrations.find((item) => item.slug === slug);

  type LinkMap = Record<string, string>;

  function formatRichText(text: string, id: number): any {
    const baseLinks: LinkMap = {
      "@allyribeiroart": "https://www.instagram.com/allyribeiroart",
      "Darkside Books": "https://www.instagram.com/p/Cj8JWm4Iam2/?img_index=1",
      "Lendo Terror - Porta Secreta": "https://www.catarse.me/shortstories",
    };

    if (id === 8) {
      baseLinks["Substack"] =
        "https://lettersfromthehauntedforest.substack.com/p/sessao-da-meia-noite-midnight-session";
    }

    const entries = Object.entries(baseLinks);
    entries.sort((a, b) => b[0].length - a[0].length);

    const regex = new RegExp(
      `(${entries
        .map(([key]) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|")})`,
      "g"
    );
    const parts = text.split(regex);

    return parts.map((part, i) => {
      const link = baseLinks[part];
      if (link) {
        return (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-clr1 underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  }

  if (!project) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-5xl p-4">
          <h1 className="text-4xl font-semibold font-imfell text-clr1 mt-6 mb-4">
            {project.title}
          </h1>

          <p className="text-sm text-gray-600 font-consola mb-8">
            {formatRichText(
              locale === "en" ? project.text : project.texto,
              project.id
            )}
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
