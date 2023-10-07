import ConocimientoSingle from "./ConocimientoSingle";
import IC_AC_01 from "../../components/SVG/IC_AC/IC_AC_01";
import IC_AC_02 from "../../components/SVG/IC_AC/IC_AC_02";
import IC_AC_03 from "../../components/SVG/IC_AC/IC_AC_03";
import IC_AC_04 from "../../components/SVG/IC_AC/IC_AC_04";
import IC_AC_05 from "../../components/SVG/IC_AC/IC_AC_05";
import IC_AC_06 from "../../components/SVG/IC_AC/IC_AC_06";
import IC_AC_07 from "../../components/SVG/IC_AC/IC_AC_07";
import IC_AC_08 from "../../components/SVG/IC_AC/IC_AC_08";
import IC_AC_09 from "../../components/SVG/IC_AC/IC_AC_09";
import IC_AC_10 from "../../components/SVG/IC_AC/IC_AC_10";
import IC_AC_11 from "../../components/SVG/IC_AC/IC_AC_11";
export default function Conocimiento({ t }) {
  const servicios = [
    {
      id: 1,
      service: t("S1"),
      icon: IC_AC_05,
    },
    {
      id: 2,
      service: t("S2"),
      icon: IC_AC_04,
    },
    {
      id: 3,
      service: t("S3"),
      icon: IC_AC_02,
    },
    {
      id: 4,
      service: t("S4"),
      icon: IC_AC_03,
    },
    {
      id: 5,
      service: t("S5"),
      icon: IC_AC_07,
    },
    {
      id: 6,
      service: t("S6"),
      icon: IC_AC_06,
    },
    {
      id: 7,
      service: t("S7"),
      icon: IC_AC_09,
    },
    {
      id: 8,
      service: t("S8"),
      icon: IC_AC_10,
    },
    {
      id: 9,
      service: t("S9"),
      icon: IC_AC_08,
    },
    {
      id: 10,
      service: t("S10"),
      icon: IC_AC_01,
    },
    {
      id: 11,
      service: t("S11"),
      icon: IC_AC_11,
    },
  ];
  return (
    <div className="flex justify-center items-center min-h-[60vh] w-[95vw] mt-16">
      <div className="flex flex-row flex-wrap items-center w-full p-10 lg:p-0 lg:w-3/4 xl:w-1/2 bg-gradient-to-b from-[#C0D6D5] to-[#DEDEDE]  dark:bg-gradient-to-r dark:from-[#F8D3AE] dark:to-[#DDDDDD]  rounded-3xl">
        <div className="w-full max-w-2xl text-[#0A2473] dark:text-[#0A2473] px-20 py-12">
          <h2 className="text-2xl font-bold">{t("Conocimiento")}</h2>
          <p>{t("ConocimientoText")}</p>
          <ul className=" h-full mt-4">
            {servicios.map((servicio) => (
              <ConocimientoSingle servicio={servicio} key={servicio.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
