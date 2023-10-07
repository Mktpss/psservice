import ConocimientoSingle from "./ConocimientoSingle";

export default function Conocimiento({ t }) {
  const servicios = [
    {
      id: 1,
      service: t("S1"),
      icon: "",
    },
    {
      id: 2,
      service: t("S2"),
      icon: "",
    },
    {
      id: 3,
      service: t("S3"),
      icon: "",
    },
    {
      id: 4,
      service: t("S4"),
      icon: "",
    },
    {
      id: 5,
      service: t("S5"),
      icon: "",
    },
    {
      id: 6,
      service: t("S6"),
      icon: "",
    },
    {
      id: 7,
      service: t("S7"),
      icon: "",
    },
    {
      id: 8,
      service: t("S8"),
      icon: "",
    },
    {
      id: 9,
      service: t("S9"),
      icon: "",
    },
    {
      id: 10,
      service: t("S10"),
      icon: "",
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-[60vh] w-[95vw] mt-16">
      <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2 bg-gradient-to-b from-[#C0D6D5] to-[#DEDEDE] dark:bg-gradient-to-r dark:from-[#F8D3AE] dark:to-[#DDDDDD]  rounded-3xl">
        <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#0A2473] px-20 py-12">
          {/* <h2 className="text-2xl font-bold">{t("Conocimiento")}</h2>
          <p>{t("ConocimientoText")}</p> */}
          <h2 className="mt-4 text-2xl font-bold">{t("Servicios")}</h2>
          <ul className="grid grid-cols-2 h-[295px] mt-4">
            {servicios.map((servicio) => (
              <ConocimientoSingle servicio={servicio} key={servicio.id} />
            ))}
          </ul>
          <button className="mt-16 px-6 rounded py-2 bg-[#324BA6] text-white">
            {t("Descarga")}
          </button>
        </div>
      </div>
    </div>
  );
}
