import React from "react";

export default function Clientes({ t }) {
  return (
    <div className="flex flex-col flex-nowrap w-full justify-center items-center">
      <div
        className="flex flex-row flex-wrap justify-center my-8 bg-[#155E75] dark:bg-inherit rounded-3xl"
        style={{ width: "95vw", minHeight: "60vh" }}
      >
        <div className="flex items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2   ">
          <div className="w-full py-4 ">
            <h2 className="text-white dark:text-[#AEC8F8] text-3xl md:text-5xl font-bold">
              {t("Hero5")}
            </h2>
            <p className="text-2xl font-bold my-4 text-white dark:text-[#AEC8F8]">
              {t("Hero5Sub")}
            </p>
            <p className="text-lg font-bold text-white my-4">
              {t("Hero5Text")}
            </p>
            <button className="py-2 px-4 bg-[#5D001D]  text-white  self-center rounded">
              {t("MasCasos")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
