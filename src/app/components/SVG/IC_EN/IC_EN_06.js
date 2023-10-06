"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_EN_06({ width, height }) {
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
          {`.cls-1 {
        stroke-width: 0px;
        fill: ${color};
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m15,30c-.27,0-.48-.22-.48-.48v-2.19h-2.92c-.76,0-1.39-.62-1.39-1.39v-2.91l-2.63-3.83c-.33-.48-.51-1.05-.51-1.64v-6.93h-.95c-.76,0-1.39-.62-1.39-1.39v-2.15c0-.76.62-1.39,1.39-1.39h1.71V1.08c0-.6.49-1.08,1.08-1.08h2.41c.6,0,1.08.49,1.08,1.08v4.63h5.18V1.08c0-.6.49-1.08,1.08-1.08h2.41c.6,0,1.08.49,1.08,1.08v4.63h1.71c.76,0,1.39.62,1.39,1.39v2.15c0,.76-.62,1.39-1.39,1.39h-.95v6.93c0,.59-.18,1.15-.51,1.64l-2.63,3.83v2.91c0,.76-.62,1.39-1.39,1.39h-2.92v2.19c0,.27-.22.48-.48.48Zm-3.83-3.64h7.26l.39-.06v-2.93h-7.65v3Zm-3.14-8.8c0,.39.12.77.34,1.09l2.57,3.74h8.11l2.57-3.74c.22-.32.34-.7.34-1.09v-6.93s-13.93,0-13.93,0v6.93Zm-2.33-7.9h18.2l.39-.06v-2.94H5.7v3Zm12.85-3.96h2.65V.96h-2.65v4.75Zm-9.76,0h2.65V.96h-2.65v4.75Z"
      />
      <path
        className="cls-1"
        d="m15.03,19.6c-.07,0-.13-.01-.19-.04-.12-.05-.21-.14-.26-.26-.05-.12-.05-.25,0-.37l.83-1.93h-1.57c-.17,0-.31-.08-.4-.22-.09-.14-.1-.31-.03-.46l1.18-2.6c.08-.17.25-.28.44-.28.07,0,.14.01.2.04.12.05.21.15.25.27.05.12.04.25-.01.37l-.87,1.92h1.55c.16,0,.31.08.4.22.09.14.11.3.04.45l-1.12,2.6c-.08.18-.25.29-.44.29h0Z"
      />
    </svg>
  );
}