import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

interface ProjectCardProps {
  id: number;
  title: string;
  slug: string;
  caminho: string;
  texto: string;
  gallery?: { src: string; caption: string }[];
}

function ProjectCard({ title, slug, caminho }: ProjectCardProps) {
  const localeActive = useLocale();

  return (
    <Link 
      href={`/${localeActive}/portfolio/il/${slug}`} 
      className="flex flex-col items-center text-center mb-4"
    >
      <Image
        src={caminho}
        alt={title}
        width={400}
        height={0}
        className="w-full h-auto object-cover"
      />
    </Link>
  );
}

export default ProjectCard;
