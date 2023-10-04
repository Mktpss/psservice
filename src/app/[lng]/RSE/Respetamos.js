export default function Respetamos({ t }) {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start min-h-[10vh]  w-[100vw] gap-2">
      <div className="flex flex-col flex-nowrap items-center w-full mt-10 lg:w-[80%] ">
        {t("Respetamos")}
        <div className="flex flex-row flex-wrap gap-8 justify-between w-full items-start my-20">
          <div className="flex flex-col flex-nowrap justify-center items-center text-center">
            {t("Manejo")}
            <p>{t("ManejoText")}</p>
          </div>
          <div className="flex flex-col flex-nowrap justify-center items-center text-center">
            {t("ProtCivil")}
            <p>{t("ProtCivilText")}</p>
          </div>
          <div className="flex flex-col flex-nowrap justify-center items-center text-center">
            {t("Apoyo")}
            <p>{t("ApoyoText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}