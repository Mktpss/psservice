export default function Somos({ t }) {
  return (
    <>
      <div className="flex justify-center items-center min-h-[60vh] w-[100vw]">
        <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2">
          <div className="w-full max-w-2xl text-[#324BA6] dark:text-[#fff]">
            <h2 className="text-3xl md:text-5xl  font-bold py-2">
              {t("Hero2")}
            </h2>
            <p className="text-2xl font-bold mb-8">{t("Hero2sub")}</p>
            <p className="text-lg font-bold">{t("HeroText")}</p>
          </div>
        </div>
      </div>
    </>
  );
}