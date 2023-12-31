"use client";
import React from "react";
import Link from "next/link";
export default function EspSistemasElectricos({ title, text, active }) {
  const { active: activeState, setActive } = active;
  const activo = activeState == "SistemasElectricos";
  return (
    <div
      className={`${
        activo ? "h-[26rem]" : "h-44"
      } w-full lg:w-[33vw] border rounded bg-[#155E75] border-[#155E75] text-white flex flex-col flex-nowrap items-center justify-center `}
      onClick={() => {
        if (activeState == "SistemasElectricos") {
          setActive("");
        } else {
          setActive("SistemasElectricos");
        }
      }}
    >
      <div className="font-bold mb-4 text-lg">{title}</div>
      {activo && (
        <>
          <div className="mb-4 text-sm px-6">{text}</div>
          <Link
            className="border rounded bg-white border-white text-[#155E75] px-6 py-2"
            href="/IngenieriaEnSistemasElectricos"
          >
            Ver más
          </Link>
        </>
      )}
    </div>
  );
}
