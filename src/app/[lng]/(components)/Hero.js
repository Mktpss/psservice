"use client";
import { useTranslation } from "next-i18next";
import { sendGTMEvent } from "@next/third-parties/google";
import dynamic from "next/dynamic";
import Link from "next/link";
import PSLogo from "../../components/SVG/Logos/PSLogo";
import Head from "next/head";

const HeroBgImage = dynamic(() => import("./HeroBgImage"));

export default function Hero() {
  const { t } = useTranslation("Landing");

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/Hero.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/hero2.mp4"
          as="video"
        />
      </Head>
      <div className="relative flex justify-center lg:justify-end items-center w-[100vw] z-0">
        <div className="absolute inset-0 z-0 overflow-hidden h-[75vh] lg:h-full">
          <HeroBgImage
            image="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/Hero.jpg"
            video="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/LANDING/hero2.mp4"
            imageMovil="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/datacenter_dark_mobile.jpg"
            videoMovil="https://psserviceimages.s3.us-east-2.amazonaws.com/mobile/Datacenter_light.mp4"
          />
        </div>
        <div className="relative z-10 flex flex-wrap justify-end items-center w-full my-8">
          <div className="flex justify-center items-center p-8 w-full lg:w-[24vw]">
            <PSLogo />
          </div>
          <div className="flex flex-col justify-start items-start w-[90vw] lg:w-[75vw] my-10">
            <h1 className="text-3xl lg:text-5xl text-[#002772] dark:text-white font-bold py-8 lg:py-16 max-w-2xl text-shadow uppercase">
              {t("Hero1")}
            </h1>
            <Link
              href="https://wa.me/522371267243?text=Hola%quisiera%20hablar%20con%20un%20experto"
              passHref
              target="_blank"
              className="py-2 px-4 bg-[#5D001D] text-white rounded-lg"
              onClick={() => sendGTMEvent({ event: "Whatsapp", value: "1" })}
            >
              {t("Experto")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
