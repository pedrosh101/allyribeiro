import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import about from "../../../../public/about.png";
import div1 from "../../../../public/div1.png";
import div2 from "../../../../public/div2.png";

export default function About() {
  const t = useTranslations("about");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col lg:mx-28 p-8 text-clr1 font-imfell">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="lg:w-1/2">
            <h1 className="text-3xl italic mb-6 text-center">{t("hi")}</h1>
            <div className="border-4 border-clr1 p-8 flex flex-col lg:space-y-6 items-center justify-center text-xl">
              <div>
                <p>{t("par0")}</p>
                <p>{t("par1")}</p>
              </div>
              <p>{t("par2")}</p>
              <p>{t("par3")}</p>
              <p>{t("par4")}</p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-brown-800 flex items-center justify-center rounded-full text-xl">
            <Image src={about} alt="about" width={500} height={500} />
          </div>
        </div>

        <div className="flex items-center justify-center rounded-full text-xl py-6">
          <Image src={div1} alt="about" width={700} height={700} />
        </div>

        <div className="w-full mb-12">
          <p className="italic text-3xl mb-6">{t("touch1")}</p>
          <div className="border-4 text-center border-clr1 p-8 mt-2 text-2xl">
            <p className="lg:px-44">
              {t("touch2")}
              <a
                href="mailto:allyribeiro.art@gmail.com"
                className="text-lime-800"
              >
                allyribeiro.art@gmail.com
              </a>
            </p>
            <p>{t("touch3")}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-around w-full text-center text-lg mt-6">
          <div>
            <h2 className="italic text-3xl">{t("pw0")}</h2>
            <ul className="mt-2">
              <li>{t("pw1")}</li>
              <li>{t("pw2")}</li>
              <li>{t("pw3")}</li>
              <li>{t("pw4")}</li>
              <li>{t("pw5")}</li>
              <li>{t("pw6")}</li>
            </ul>
          </div>
          <div>
            <h2 className="italic text-3xl">{t("ex0")}</h2>
            <ul className="mt-2">
              <li>{t("ex1")}</li>
              <li>{t("ex2")}</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-full text-xl py-6">
          <Image src={div2} alt="about" width={700} height={700} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="italic mb-6 text-3xl">{t("ig")}</h2>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-24 h-24 bg-brown-800"></div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
