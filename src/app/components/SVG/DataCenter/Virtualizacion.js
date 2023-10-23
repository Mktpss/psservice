"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Virtualizacion({ width, height }) {
  const { theme } = useTheme();
  const [color, setColor] = useState("#324ba6");

  useEffect(() => {
    setColor(theme === "dark" ? "#324BA6" : "#324ba6");
  }, [theme]);
  return (
    <svg
      id="_ÎÓÈ_4"
      data-name="—ÎÓÈ_4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 45"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {` .cls-1 {
        stroke-width: 0px;
         fill: ${color};
      }`}
        </style>
      </defs>
      <path
        className="cls-1"
        d="m12.69,23.46c-.24,0-.43-.19-.43-.43s.19-.43.43-.43.43.19.43.43-.19.43-.43.43Z"
      />
      <path
        className="cls-1"
        d="m15.96,23.46c-.24,0-.43-.19-.43-.43s.19-.43.43-.43.43.19.43.43-.19.43-.43.43Z"
      />
      <path
        className="cls-1"
        d="m19.23,23.46c-.24,0-.43-.19-.43-.43s.19-.43.43-.43.43.19.43.43-.19.43-.43.43Z"
      />
      <circle className="cls-1" cx="12.69" cy="34.47" r=".43" />
      <path
        className="cls-1"
        d="m15.96,34.9c-.24,0-.43-.19-.43-.43s.19-.43.43-.43.43.19.43.43-.19.43-.43.43Z"
      />
      <circle className="cls-1" cx="19.23" cy="34.47" r=".43" />
      <path
        className="cls-1"
        d="m33.12,24.28c-.24,0-.43-.19-.43-.43v-1.63c0-.24.19-.43.43-.43s.43.19.43.43v1.63c0,.24-.19.43-.43.43Z"
      />
      <path
        className="cls-1"
        d="m29.85,24.28c-.24,0-.43-.19-.43-.43v-1.63c0-.24.19-.43.43-.43s.43.19.43.43v1.63c0,.24-.19.43-.43.43Z"
      />
      <path
        className="cls-1"
        d="m26.58,24.28c-.24,0-.43-.19-.43-.43v-1.63c0-.24.19-.43.43-.43s.43.19.43.43v1.63c0,.24-.19.43-.43.43Z"
      />
      <path
        className="cls-1"
        d="m33.12,35.72c-.24,0-.43-.19-.43-.43v-1.63c0-.24.19-.43.43-.43s.43.19.43.43v1.63c0,.24-.19.43-.43.43Z"
      />
      <path
        className="cls-1"
        d="m29.85,35.72c-.24,0-.43-.19-.43-.43v-1.63c0-.24.19-.43.43-.43s.43.19.43.43v1.63c0,.24-.19.43-.43.43Z"
      />
      <path
        className="cls-1"
        d="m26.58,35.72c-.24,0-.43-.19-.43-.43v-1.63c0-.24.19-.43.43-.43s.43.19.43.43v1.63c0,.24-.19.43-.43.43Z"
      />
      <path
        className="cls-1"
        d="m11.44,39.38c0-.21-.17-.38-.38-.38h-.82c-1.14,0-2.07-.93-2.07-2.07v-4.9s0-.03,0-.05c0-.03,0-.06.01-.09,0-.11-.03-.21-.1-.29-.06-.06-.14-.1-.22-.12-2.71-.56-4.93-2.53-5.81-5.14-.66-1.97-.52-4.09.4-5.95.92-1.86,2.52-3.26,4.49-3.92.1-.03.18-.11.22-.2.04-.09.05-.2.01-.3-.43-1.14-.65-2.34-.64-3.56,0-3.46,1.73-6.66,4.63-8.56,1.68-1.1,3.61-1.68,5.61-1.68,3.47,0,6.67,1.73,8.58,4.63.06.09.14.15.24.17.03,0,.05,0,.08,0,.08,0,.15-.02.21-.07,1.42-.96,3.09-1.46,4.8-1.46,4.75,0,8.61,3.86,8.6,8.61,0,.82-.12,1.64-.35,2.43-.05.18.03.37.19.45,2.63,1.33,4.26,3.99,4.25,6.93,0,1.79-.64,3.54-1.77,4.92-1.13,1.39-2.73,2.35-4.48,2.71-.19.04-.32.21-.3.4,0,.03,0,.06.01.09,0,.02,0,.04,0,.05v4.9c0,1.14-.93,2.07-2.07,2.07h-.82c-.21,0-.38.17-.38.38m-.87,0c0-.21-.17-.38-.38-.38H12.69c-.21,0-.38.17-.38.38m-2.07-8.56c-.66,0-1.2.54-1.2,1.2v4.9c0,.66.54,1.2,1.2,1.2h24.52c.66,0,1.2-.54,1.2-1.2v-4.9c0-.66-.54-1.2-1.2-1.2H10.24Zm23.71-3.27c-.21,0-.38.17-.38.38v1.63c0,.21.17.38.38.38h.82c.55,0,1.09.23,1.48.63.07.07.17.12.28.12.02,0,.04,0,.05,0,2.46-.35,4.55-2,5.46-4.31.68-1.72.64-3.6-.09-5.29-.74-1.69-2.09-3-3.81-3.68-.22-.09-.33-.34-.24-.56.36-.91.54-1.86.53-2.83,0-4.26-3.47-7.73-7.73-7.73h-.03c-1.81,0-3.56.64-4.94,1.81-.02.02-.05.04-.07.05-.06.03-.13.05-.2.05-.16,0-.31-.09-.38-.23-1.63-3.06-4.8-4.95-8.27-4.95-2.5,0-4.86.98-6.63,2.75-1.77,1.77-2.75,4.13-2.75,6.63,0,1.39.32,2.79.93,4.05.02.03.03.07.03.1.02.11,0,.23-.06.33-.06.1-.16.16-.28.19-2.84.59-5.02,2.91-5.44,5.77-.27,1.83.19,3.65,1.3,5.14,1.1,1.48,2.72,2.45,4.55,2.72.02,0,.04,0,.06,0,.1,0,.2-.04.28-.12.39-.4.92-.63,1.48-.63h.82c.21,0,.38-.17.38-.38v-1.63c0-.21-.17-.38-.38-.38h-.82c-1.14,0-2.07-.93-2.07-2.07v-4.9c0-1.14.93-2.07,2.07-2.07h24.52c1.14,0,2.07.93,2.07,2.07v4.9c0,1.14-.93,2.07-2.07,2.07h-.82Zm-21.25,0c-.21,0-.38.17-.38.38v1.63c0,.21.17.38.38.38h19.62c.21,0,.38-.17.38-.38v-1.63c0-.21-.17-.38-.38-.38H12.69Zm-2.45-8.17c-.66,0-1.2.54-1.2,1.2v4.9c0,.66.54,1.2,1.2,1.2h24.52c.66,0,1.2-.54,1.2-1.2v-4.9c0-.66-.54-1.2-1.2-1.2H10.24Z"
      />
    </svg>
  );
}