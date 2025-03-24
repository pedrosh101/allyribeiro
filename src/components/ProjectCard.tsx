import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

interface ProjectCardProps {
  id: number;
  title: string;
  caminho: string;
  texto: string;
}

function ProjectCard({ id, title, caminho }: ProjectCardProps) {
  const localeActive = useLocale();

  return (
    <Link 
      href={`/${localeActive}/portfolio/il/${id}`} 
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
