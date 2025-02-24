"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Instagram, Mail, Menu } from "lucide-react";
import logo from "../../public/logo.png";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./LanguageSwitcher";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import kofi from "../../public/kofi.png"

export default function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-8 bg-white mx-28 font-consola">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
        <Image src={logo} alt="Logo" width={200} height={200} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <Menu size={28} color="#895a2c" />
      </button>

      {/* Menu */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center text-black absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-10 shadow md:shadow-none`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="hover:text-clr1">
              portfolio
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/portfolio/illustration" className="hover:text-clr1">
                <span>{t("ilu")}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/portfolio/comics" className="hover:text-clr1">
                comics
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/portfolio/character-design"
                className="hover:text-clr1"
              >
                <span>{t("charc")}</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/pt/about">
          <Button variant="ghost">
            <span className="hover:text-clr1">{t("sob")}</span>
          </Button>
        </Link>

        <Link
          href="https://lettersfromthehauntedforest.substack.com/"
          target="_blank"
        >
          <Button variant="ghost" className="hover:text-clr1">
            newsletter
          </Button>
        </Link>

        <Link
          href="https://mailchi.mp/d4a1e101dd11/studiovulpes"
          target="_blank"
        >
          <Button variant="ghost" className="hover:text-clr1">
            shop
          </Button>
        </Link>

        {/* Ícones sociais */}
        <div className="flex space-x-4 pl-4">
          <Link href="https://instagram.com/allyribeiroart" target="_blank">
            <Instagram color="#895a2c" size={24} />
          </Link>
          <Link
            href="https://lettersfromthehauntedforest.substack.com/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faPinterest} size="lg" color="#895a2c" />
          </Link>
          <Link href="mailto:seuemail@example.com">
            <Mail color="#895a2c" size={24} />
          </Link>
          <Link href="https://ko-fi.com/allyribeiro" target="_blank">
            <Image src={kofi} alt="kofi" width={24} height={24} />
          </Link>
        </div>

        <LocalSwitcher />
      </div>
    </nav>
  );
}
