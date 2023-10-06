"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IC_MON_05({ width, height }) {
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
          {`      .cls-1 {
        stroke-width: 0px;
          fill: ${color};
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m14.78,30.05c-.84,0-1.65-.18-2.41-.52l-6.29-2.86c-2.08-.95-3.43-3.03-3.43-5.32V6.46c0-.42.33-.76.75-.78,2.65-.13,4.75-2.23,4.88-4.88.02-.42.36-.75.78-.75h11.46c.42,0,.76.33.78.75.13,2.65,2.23,4.75,4.88,4.88.42.02.75.36.75.78v14.89c0,2.29-1.35,4.38-3.43,5.32l-6.29,2.86c-.76.35-1.58.52-2.41.52h0ZM9.18,1.38c-.37,2.69-2.52,4.84-5.21,5.21l-.36.05v14.71c0,1.91,1.12,3.65,2.86,4.44l6.29,2.86c.64.29,1.32.44,2.02.44s1.38-.15,2.02-.44l6.29-2.86c1.74-.79,2.86-2.53,2.86-4.44V6.64l-.36-.05c-2.69-.37-4.84-2.52-5.21-5.21l-.05-.36h-11.09l-.05.36Z"
      />
      <path
        className="cls-1"
        d="m14.78,26.08c-.26,0-.53-.06-.77-.17l-6.29-2.86c-.67-.3-1.1-.97-1.1-1.7v-11.88c0-.3.18-.58.45-.71,1.87-.9,3.39-2.42,4.29-4.29.13-.27.41-.45.71-.45h5.43c.3,0,.57.17.7.45.9,1.87,2.42,3.4,4.3,4.3.27.13.45.41.45.7v11.87c0,.73-.43,1.4-1.1,1.7l-6.29,2.86c-.24.11-.5.17-.77.17h0Zm-2.72-20.86c-.95,1.8-2.46,3.31-4.25,4.25l-.23.12v11.76c0,.35.21.68.53.82l6.29,2.86c.12.05.24.08.37.08s.25-.03.37-.08l6.29-2.86c.32-.15.53-.47.53-.82v-11.76s-.23-.12-.23-.12c-1.8-.95-3.31-2.46-4.26-4.26l-.12-.23h-5.19l-.12.23Z"
      />
      <path
        className="cls-1"
        d="m14.83,19.69c-.07,0-.13-.01-.19-.04-.24-.1-.36-.39-.25-.63l1.5-3.49h-2.94c-.17,0-.31-.08-.4-.22-.09-.14-.1-.31-.03-.46l1.89-4.16c.08-.17.25-.28.44-.28.07,0,.14.01.2.04.12.05.21.15.25.27.05.12.04.25-.01.37l-1.58,3.48h2.93c.16,0,.31.08.4.22.09.14.11.3.04.46l-1.79,4.16c-.08.18-.25.29-.44.29h0Z"
      />
    </svg>
  );
}