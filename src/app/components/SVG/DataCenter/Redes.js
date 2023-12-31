"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Almacenamiento({ width, height }) {
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
      viewBox="0 0 45 45"
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
      <g>
        <path
          className="cls-1"
          d="m24.6,34.75c-.16,0-.28.13-.28.28s.13.28.28.28h6.43c.16,0,.28-.13.28-.28s-.13-.28-.28-.28h-6.43Z"
        />
        <path
          className="cls-1"
          d="m31.03,35.81h-6.43c-.43,0-.78-.35-.78-.78s.35-.78.78-.78h6.43c.43,0,.78.35.78.78s-.35.78-.78.78Z"
        />
      </g>
      <g>
        <path
          className="cls-1"
          d="m11.34,34.57c-.16,0-.28.13-.28.28s.13.28.28.28h6.57c.16,0,.28-.13.28-.28s-.13-.28-.28-.28h-6.57Z"
        />
        <path
          className="cls-1"
          d="m17.91,35.64h-6.57c-.43,0-.78-.35-.78-.78s.35-.78.78-.78h6.57c.43,0,.78.35.78.78s-.35.78-.78.78Z"
        />
      </g>
      <g>
        <path
          className="cls-1"
          d="m21.15,24.16c-.16,0-.28.13-.28.28v7.15c0,.16.13.28.28.28s.28-.13.28-.28v-7.15c0-.16-.13-.28-.28-.28Z"
        />
        <path
          className="cls-1"
          d="m21.15,32.37c-.43,0-.78-.35-.78-.78v-7.15c0-.43.35-.78.78-.78s.78.35.78.78v7.15c0,.43-.35.78-.78.78Z"
        />
      </g>
      <g>
        <path
          className="cls-1"
          d="m21.25,31.23c-1.99,0-3.62,1.62-3.62,3.62s1.62,3.61,3.62,3.61,3.61-1.62,3.61-3.61-1.62-3.62-3.61-3.62Zm0,6.66c-1.68,0-3.05-1.37-3.05-3.05s1.37-3.05,3.05-3.05,3.05,1.37,3.05,3.05-1.37,3.05-3.05,3.05Z"
        />
        <path
          className="cls-1"
          d="m21.25,38.96c-2.27,0-4.12-1.85-4.12-4.11s1.85-4.12,4.12-4.12,4.11,1.85,4.11,4.12-1.85,4.11-4.11,4.11Zm0-6.66c-1.41,0-2.55,1.14-2.55,2.55s1.14,2.55,2.55,2.55,2.55-1.14,2.55-2.55-1.14-2.55-2.55-2.55Z"
        />
      </g>
      <g>
        <path
          className="cls-1"
          d="m11.31,5.23c-.62,0-1.13.51-1.13,1.13v14.21c0,.62.5,1.13,1.13,1.13h19.8c.62,0,1.13-.51,1.13-1.13V6.36c0-.62-.5-1.13-1.13-1.13H11.31Zm20.3,15.9H11.1l-.29-.3-.06-.26.06-14.77,20.86.07-.06,15.27Z"
        />
        <path
          className="cls-1"
          d="m31.12,22.2H11.31c-.9,0-1.63-.73-1.63-1.63V6.36c0-.9.73-1.63,1.63-1.63h19.8c.9,0,1.63.73,1.63,1.63v14.21c0,.9-.73,1.63-1.63,1.63Zm-19.8-1.57h19.8l.06-14.27-19.86-.06-.06,14.22.06.12Z"
        />
      </g>
      <g>
        <path
          className="cls-1"
          d="m15.12,24.11c-.16,0-.28.13-.28.28s.13.28.28.28h12.19c.16,0,.28-.13.28-.28s-.13-.28-.28-.28h-12.19Z"
        />
        <path
          className="cls-1"
          d="m27.31,25.18h-12.19c-.43,0-.78-.35-.78-.78s.35-.78.78-.78h12.19c.43,0,.78.35.78.78s-.35.78-.78.78Z"
        />
      </g>
    </svg>
  );
}
