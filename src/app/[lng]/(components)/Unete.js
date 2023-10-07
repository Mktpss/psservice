export default function Unete({ t }) {
  return (
    <div className="flex flex-col flex-nowrap w-full justify-center items-center">
      <div
        className="flex flex-row flex-wrap justify-center my-8 bg-[#155E75] dark:bg-gradient-to-r dark:from-[#10244A] dark:to-[#4D0519] rounded-3xl"
        style={{ width: "95vw", minHeight: "60vh" }}
      >
        <div className="flex items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2  ">
          <div className="w-full py-4 ">
            <div className="text-white  flex flex-col flex-nowrap justify-start w-full">
              <div>
                <h2 className="text-3xl lg:text-5xl  font-bold py-2">
                  {t("Hero8")}
                </h2>
                <p className="text-lg font-bold mb-8">{t("Hero8Sub")}</p>
                <p className="text-lg font-bold mb-8">{t("Hero8Text")}</p>
                <button className="border border-white dark:border-[#799FE6] text-[#AEC8F8]  py-2 px-20 rounded dark:text-[#799FE6]">
                  {t("QuieroSer")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
