"use client";
import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";
export default function NavbarDisplayed({ t, lng, showMenu, setShowMenu }) {
  return (
    <div className="h-screen bg-zinc-800">
      <div
        className="m-3 mt-7 flex flex-col flex-nowrap justify-start content-center items-center"
        onClick={() => setShowMenu(false)}
      >
        <>
          <ThemeSwitcher />
          <div className="mt-3 text-white text-3xl">
            <Link href={`${lng}/Inicio`}>{t("Inicio")}</Link>
          </div>
          <div className="mt-3 text-white text-3xl">
            <Link href={`${lng}/Especialidades`}>{t("Especialidades")}</Link>
          </div>
          <div className="mt-3 text-white text-3xl">
            <Link href={`${lng}/Servicios`}>{t("Servicios")}</Link>
          </div>
          <div className="mt-3 text-white text-3xl">
            <Link href={`${lng}/Clientes`}>{t("Clientes")}</Link>
          </div>
          <div className="mt-3 text-white text-3xl">
            <Link href={`${lng}/Aliados`}>{t("Aliados")}</Link>
          </div>
          <div className="mt-3 text-white text-3xl">
            <Link href={`${lng}/RSE`}>{t("RSE")}</Link>
          </div>
          <div className="mt-3 text-white text-3xl">
            <Link href={`${lng}/Bolsa`}>{t("Bolsa")}</Link>
          </div>
          <div className="mt-3 text-white text-3xl">
            <Link href="/LogIn">{t("LogIn")}</Link>
          </div>
        </>
      </div>
    </div>
  );
}
