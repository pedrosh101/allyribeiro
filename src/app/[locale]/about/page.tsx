import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import about from "../../../../public/about.png";
import div1 from "../../../../public/div1.png";
import div2 from "../../../../public/div2.png";
import div3 from "../../../../public/coffee.png";

export default function About() {
  const t = useTranslations("about");

  const formatObra = (text: string) => {
    const [obra, resto] = text.split("(", 2);
    return (
      <>
        <strong>{obra.trim()}</strong>
        {resto ? ` (${resto}` : ""}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white flex flex-col lg:mx-28 md:p-8 p-4 text-clr1 font-imfell">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="lg:w-3/5">
            <h1 className="text-3xl mb-6 text-center">{t("hi")}</h1>
            <div className="flex flex-col lg:space-y-6 items-center mr-8 mt-8 justify-center font-consola text-sm text-black">
              <div>
                <p>{t("par0")}</p>
                <p>{t("par1")}</p>
              </div>
              <p>{t("par2")}</p>
              <p>{t("par3")}</p>
              <p>{t("par4")}</p>
            </div>
          </div>
          <div className="lg:w-2/5 bg-brown-800 flex items-center rounded-full">
            <Image src={about} alt="about" width={460} height={460} />
          </div>
        </div>

        <div className="flex items-center justify-center rounded-full text-xl py-2">
          <Image src={div1} alt="about" width={650} height={650} />
        </div>

        <div className="mb-12">
          <p className="text-3xl 2xl:ml-4">{t("touch1")}</p>
          <div className="text-center p-8 mt-2 text-sm font-consola text-black">
            <p className="lg:px-44">
              {t("touch2")}
              <a href="mailto:allyribeiro.art@gmail.com" className="text-clr1">
                allyribeiro.art@gmail.com
              </a>
            </p>
            <p className="mt-2">{t("touch3")}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-around w-full text-sm md:space-x-12 md:space-y-0 space-y-4 mt-6">
          <div>
            <h2 className="text-3xl">{t("pw0")}</h2>
            <ul className="mt-4 font-consola text-black">
              <li>{formatObra(t("pw6"))}</li>
              <li>{formatObra(t("pw5"))}</li>
              <li>{formatObra(t("pw4"))}</li>
              <li>{formatObra(t("pw3"))}</li>
              <li>{formatObra(t("pw2"))}</li>
              <li>{formatObra(t("pw1"))}</li>
            </ul>
          </div>
          <div className="flex items-center">
            <Image src={div3} alt="cafe" width={120} height={120} />
          </div>
          <div>
            <h2 className="text-3xl">{t("ex0")}</h2>
            <ul className="mt-2 font-consola text-black">
              <li>{formatObra(t("ex1"))}</li>
              <li>{formatObra(t("ex2"))}</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-full text-xl py-2">
          <Image src={div2} alt="about" width={650} height={650} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-6 text-3xl">{t("ig")}</h2>
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
