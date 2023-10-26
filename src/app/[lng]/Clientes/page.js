import { useTranslation } from "../../i18n";
import Hero from "./Hero";
import Somos from "./Somos";
import Soluciones from "./Soluciones";
import SolucionesPoints from "./SolucionesPoints";
import Icon1 from "../../components/SVG/TecnologiaMed/Icon1";
import Icon2 from "../../components/SVG/TecnologiaMed/Icon2";
import Icon3 from "../../components/SVG/TecnologiaMed/Icon3";
import Image from "next/image";
import Contacta from "./Contacta";
import Contacto from "../(components)/Contacto";
export default async function Fabricacion({ params: { lng } }) {
  const { t } = await useTranslation(lng, "Clientes");
  const solucionesData = [
    {
      id: 0,
      Icon: Icon1,
      title: t("Soluciones1"),
      points: t("Soluciones1Points"),
      colorChg: "bg-[#2E7D96]",
    },
    {
      id: 1,
      Icon: Icon2,
      title: t("Soluciones2"),
      points: t("Soluciones2Points"),
      colorChg: "bg-[#155E75]",
    },
    {
      id: 2,
      Icon: Icon3,
      title: t("Soluciones3"),
      points: t("Soluciones3Points"),
      colorChg: "bg-[#044053]",
    },
  ];
  return (
    <div className="w-full">
      <Hero t={t} />
      <Somos t={t} />
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap w-full mb-16 items-center justify-center">
        <SolucionesPoints {...solucionesData[0]} />
        <Soluciones {...solucionesData[1]} />
        <Soluciones {...solucionesData[2]} />
      </div>

      {/* <Contacta t={t} /> */}
      <Contacto t={t} />
    </div>
  );
}
