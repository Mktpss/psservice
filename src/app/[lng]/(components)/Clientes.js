import HeroBgImage from "./HeroBgImage";

export default function Clientes({ t }) {
  return (
    <div className="relative flex justify-center items-center  w-[100vw]  my-8">
      {/* Background Image Wrapper */}

      {/* Content */}
      <div className="relative z-0 w-[95%] flex justify-center items-end  rounded-xl py-4 min-h-[30vh]">
        <div className="absolute inset-0 rounded overflow-hidden">
          <div className="absolute inset-0">
            <HeroBgImage
              lightImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/Clientes"
              darkImg="https://psserviceimages.s3.us-east-2.amazonaws.com/dark/Clientes"
            />
          </div>
        </div>
        <div className="relative z-10 flex flex-row flex-wrap justify-end items-center w-full text-white">
          <div className="flex flex-col flex-nowrap justify-center items-start w-[90vw] lg:w-[73vw]  ">
            <h2 className="text-3xl lg:text-5xl font-bold pt-16 pb-4">
              {t("Hero5")}
            </h2>
            <p className="text-xl font-bold py-4">{t("Hero5Sub")}</p>
            <p className="text-md font-bold">{t("Hero5Text")}</p>
            <button className="py-2 px-4 mt-8 bg-[#5D001D] text-white">
              {t("MasCasos")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
