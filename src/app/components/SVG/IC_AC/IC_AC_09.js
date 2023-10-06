"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_AC_01({ width, height }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#324BA6" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`    .cls-1 {
        stroke-width: 0px;
          fill: ${color};
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m1.45,30c-.27,0-.48-.22-.48-.48V.48c0-.27.22-.48.48-.48h27.11c.27,0,.48.22.48.48v29.04c0,.27-.22.48-.48.48H1.45Zm18.55-.96h8.07V.96h-8.07v28.07Zm-9.04,0h8.07V.96h-8.07v28.07Zm-9.04,0h8.07V.96H1.93v28.07Z"
      />
      <path
        className="cls-1"
        d="m24.94,4.58c-.27,0-.48-.22-.48-.48s.22-.48.48-.48.48.22.48.48-.22.48-.48.48Z"
      />
      <path
        className="cls-1"
        d="m23.13,26.39c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m23.13,22.77c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m23.13,19.16c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m14.1,26.39c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m14.1,22.77c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m14.1,19.16c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m5.06,26.39c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m5.06,22.77c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m5.06,19.16c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m23.13,15.54c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m14.1,15.54c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
      <path
        className="cls-1"
        d="m5.06,15.54c-.27,0-.48-.22-.48-.48s.22-.48.48-.48h1.81c.27,0,.48.22.48.48s-.22.48-.48.48h-1.81Z"
      />
    </svg>
  );
}