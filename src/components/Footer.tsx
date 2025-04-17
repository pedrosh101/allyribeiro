import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Instagram, Mail } from "lucide-react";
import kofi from "../../public/kofi.png";
import { faPinterest, faBehance } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="flex justify-center py-12">
      <div>
        <div className="flex justify-center space-x-6">
          <Link href="https://instagram.com/allyribeiroart" target="_blank">
            <Instagram color="#895a2c" size={28} />
          </Link>
          <Link
            href="https://www.behance.net/allyribeiro"
            target="_blank"
          >
            <FontAwesomeIcon icon={faBehance} size="xl" color="#895a2c" />
          </Link>
          <Link
            href="https://pinterest.com/allyribeiroart/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faPinterest} size="xl" color="#895a2c" />
          </Link>
          <Link href="mailto:allyribeiro.art@gmail.com">
            <Mail color="#895a2c" size={28} />
          </Link>
          <Link
            href="https://lettersfromthehauntedforest.substack.com/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#895a2c"
              className="bi bi-substack mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z" />
            </svg>
          </Link>
          <Link href="https://ko-fi.com/allyribeiro" target="_blank">
            <Image src={kofi} alt="kofi" width={27} height={27} />
          </Link>


        </div>
        <p className="text-gray-400 mt-6 font-imfell text-lg">
          all images @ Ally Ribeiro, 2025 | all rights reserved
        </p>

      </div>
    </main>
  );
}
